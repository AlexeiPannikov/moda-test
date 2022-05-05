<template>
    <div class="scroll" :class="[styleBar]" :style="{ height: heightSlots + 'px' }" ref="scroll">
        <!-- <transition name="fade"> -->
        <div class="scroll-up" ref="scrollUp" v-show="isScrollUp && isShowScrollUp"
            :class="{ reverse: isReverseScroll }">
            <div class="left-wrapper" @click="scrollTop" :style="leftScrollStyle">
                <div class="scroll-left">
                    <div class="inner">
                        <span class="arrow icon-next"></span>
                        <transition name="fade">
                            <span v-if="!isReverseScroll"></span>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="scroll-right" :style="rightScrollStyle" @click="scrollTop"></div>
        </div>
        <!-- </transition> -->
        <div class="scroll-content" ref="content" :style="[scrollStyle, { right: `-${scrollWidth}px` }]">
            <template>
                <slot></slot>
            </template>
        </div>
        <div class="scroll-bar" :class="[{ slide: hideScroll }, classBar]" v-if="displayBar"
            :style="{ right: padRightScroll + 'px', top: topScrollBar + 'px' }">
            <div class="slider" @mousedown.left="mouseDownBar" :style="{ top: top + 'px', height: height + 'px' }">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"
import { onMounted } from "vue"

interface IProps {
    direction: string;
    name: string;
    firstLoading: boolean;
    styleBar: string;
    withScroll: object;
    withoutScroll: object;
    hasUnread: boolean;
    isScrollUp: boolean;
    enableScrollUpValue: number;
    contentClass: string;
    classBar: string;
    padRightScroll: number;
    topScrollBar: number;
    maxHeight: number;
    minHeight: number;
    heightAuto: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    direction: "bottom",
    name: "",
    firstLoading: true,
    styleBar: "small",
    withScroll: () => { return {} },
    withoutScroll: () => { return {} },
    hasUnread: false,
    isScrollUp: false,
    enableScrollUpValue: 300,
    contentClass: "container",
    classBar: "",
    padRightScroll: 0,
    topScrollBar: 0,
    maxHeight: null,
    minHeight: null,
    heightAuto: true
})

let scrollY: any = null;
let startY: any = null;
let countUpdate: number = 0;
let innerTop: number = 0;
let element: object = {};
let bottomEvent: boolean = true;
let topEvent: boolean = true;
let hideScroll: boolean = false;
let oldScrollPosition: number = 0;
// флаг показывающий что скролл происходит автоматически, а не от прокрутки пользователем
let isAutoScroll: boolean = false;
let rightScrollStyle: any = {};
let leftScrollStyle: any = {};
let scrollWidth: number = 18;
const content = ref(null)
const scroll = ref(null)
const scrollUp = ref(null)
let el: any = null;

const emit = defineEmits<{
    (e: 'mutation'): void
}>()

onMounted(() => {
    content.value.addEventListener("scroll", scrollEvent);
    recalcScrollUp();
    if (props.isScrollUp) {
        scrollUp.value && scrollUp.value.addEventListener("wheel", onWheel);
    }
    new MutationObserver((e) => {
        emit("mutation");
        if (self.direction === "top" && (self.$el as any).top == 0) {
            el.scrollTop = el.scrollHeight - self.$el.scrollHeight;
        }
        self.onScroll(el, true);
        self.setScrollWidth();

        this.countUpdate++;
    }).observe(el, { childList: true, subtree: true });
    this.el = this.$el;
})



  get top(): number {
    this.$refs.content.scrollTop = this.innerTop;
    return this.innerTop * this.aspect();
}
  get height(): number {
    if (!this.el) return 0;
    var self = this;

    var clientHeight = this.el.clientHeight;
    // if (clientHeight === 0)
    clientHeight = this.heightSlots;
    let height = clientHeight * this.aspect();

    return height;
}

  get heightSlots(): number {
    //Костыль для изменение значений при изменение контента в скроле (без неё не обновляется высота слотов)
    var countUpdate = this.countUpdate;

    if (!this.el) return 0;

    if (!this.heightAuto || !this.$slots.default) {
        return this.el.parentElement.clientHeight;
    }
    // console.log("-------start--------");
    // console.log("this.$slots.default", this.$slots.default);
    var height = 0;
    this.$slots.default.forEach((vnode) => {
        // console.log("height", height);
        // console.log("vnode.elm", vnode.elm);
        if (vnode.elm && (vnode.elm as any).offsetHeight) height += (vnode.elm as any).offsetHeight;
    });
    // console.log("all height", height);
    // console.log("-------end--------");
    if (height == 0 && this.maxHeight) return this.maxHeight;
    if (this.maxHeight != null && height > this.maxHeight) return this.maxHeight;
    if (this.minHeight != null && height < this.minHeight) return this.minHeight;
    if (this.maxHeight !== null && height < this.maxHeight) {
        this.hideScroll = true;
    }
    return height;
}
aspect(): number {
    if (!this.el) return 0;
    var height = this.el.clientHeight;
    // if (height === 0)
    height = this.heightSlots;

    return height / this.$refs.content.scrollHeight;
}
  get displayBar(): Boolean {
    if (!this.el) return false;
    // if (this.el.clientHeight === 0) {
    //   return this.$refs.content.scrollHeight > this.heightSlots;
    // }
    return this.$refs.content.scrollHeight > this.heightSlots;
}
  get scrollStyle(): any {
    var style: any = {
        bottom: 0,
        top: 0,
    };

    if (!this.displayBar) style = this.withScroll || {};
    else style = this.withoutScroll || {};
    if (this.direction === "bottom") style.top = 0;
    else style.bottom = 0;
    if (this.minHeight) {
        style.minHeight = this.minHeight + "px";
    }
    return style;
}
  // для скрола вверх
  get isShowScrollUp(): Boolean {
    return this.enableScrollUpValue < this.innerTop || this.isReverseScroll;
}
  get isReverseScroll() {
    return this.oldScrollPosition > 0;
}

@Watch("innerTop")
innerTopChange(value: number) {
    if (!this.isAutoScroll && value > this.enableScrollUpValue) {
        this.oldScrollPosition = 0;
    }
}

created() {
    window.addEventListener("resize", this.recalcScrollUp);
    if (window.screen.width < 1024) this.scrollWidth = 0;
}

setScrollWidth() {
    if (this.$refs.scroll != undefined && this.$refs.content) {
        this.scrollWidth = this.$refs.scroll.scrollWidth - this.$refs.content.scrollWidth;
    }
}
onWheel(e: any) {
    this.setTop(this.innerTop + e.deltaY);
}
findFirstChildByClass(element: any, className: string): any {
    var foundElement = null,
        found;
    function recurse(element: any, className: string, found: any) {
        if (!element || !element.childNodes) return;
        for (var i = 0; i < element.childNodes.length && !found; i++) {
            var el = element.childNodes[i];
            var classes =
                el.className != undefined && el.className.length ? el.className.split(" ") : [];
            for (var j = 0, jl = classes.length; j < jl; j++) {
                if (classes[j] == className) {
                    found = true;
                    foundElement = element.childNodes[i];
                    break;
                }
            }
            if (found) break;
            recurse(element.childNodes[i], className, found);
        }
    }
    recurse(element, className, false);
    return foundElement;
}

recalcScrollUp() {
    // min width 90px
    this.countUpdate++
    var child = this.findFirstChildByClass(this.$refs.content, this.contentClass);
    if (!child) return;
    var contentWidth = this.$refs.content.offsetWidth;
    var childWidth = child.offsetWidth + 30;
    var width = (contentWidth - childWidth) / 2;
    this.leftScrollStyle = {
        width: width + "px",
        opacity: width > 90 ? 1 : 0,
    };
}
scrollAnimate(element: any, to: any, duration: number) {
    if (duration <= 0) {
        this.isAutoScroll = false;
        return;
    }
    var self = this;
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 2;
    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        self.scrollAnimate(element, to, duration - 2);
    }, 10);
}
scrollTop() {
    if (this.isAutoScroll) return;
    this.isAutoScroll = true;
    //todo: сохранять позицию если есть норм прокрутка.
    let el = this.$refs.content;
    if (el.scrollTop > 300) {
        this.oldScrollPosition = el.scrollTop;
        this.scrollAnimate(el, 0, 20);
    } else {
        this.scrollAnimate(el, this.oldScrollPosition || 0, 20);
        this.oldScrollPosition = 0;
    }
}
scrollToPosition(top: number, speed: number = 80) {
    this.scrollAnimate(this.$refs.content, top, 2);
}
// нахождение полосы прокрутки
onTop() {
    return this.innerTop < 10;
}
onBottom() {
    return (this.$el as any).top > this.$refs.content.scrollHeight - this.$el.clientHeight - 10;
}

// установка отступа сверху и снизу
setTop(value: number) {
    this.innerTop = value;
}
setBottom(value: number) {
    //console.log('set bottom', value);
    this.innerTop =
        this.$refs.content.scrollHeight - this.$refs.content.clientHeight - value;
}

// события скролла
scrollEvent(el: any) {
    this.onScroll(el.target, false);
    // this.handleScroll();
}
resize() {
    this.onScroll(this.$refs.content, false);
}
prevTop: number = null;
onScroll(el: any, hide = true) {
    this.innerTop = el.scrollTop;
    if (!this.$refs.content) return;
    this.element = {
        height: el.clientHeight,
        scrollHeight: this.$refs.content.scrollHeight,
        top: el.scrollTop,
    };
    if (!this.firstloading) {
        if (this.top < 10 && !!this.prevTop && this.top <= this.prevTop) {
            this.scrollTopEvent();
        }
        let short = false;
        if (this.$refs.scroll) {
            short = this.$refs.scroll.clientHeight > this.$refs.content.clientHeight;
        }
        if (
            !short &&
            this.$refs.content.scrollTop + this.$refs.content.offsetHeight >
            this.$refs.content.scrollHeight - 10
        ) {
            this.scrollBottomEvent();
        }
    }
    this.prevTop = this.top;
    this.hideScroll = hide;
    this.$emit("scroll");
}
scrollTopEvent() {
    if (this.topEvent) {
        this.$emit("scroll-top");
    }
    this.topEvent = false;
    let self = this;
    setTimeout(function () {
        self.topEvent = true;
    }, 200);
}
scrollBottomEvent() {
    if (this.bottomEvent) {
        this.$emit("scroll-bottom");
    }
    this.bottomEvent = false;
    let self = this;
    setTimeout(function () {
        self.bottomEvent = true;
    }, 200);
}
mouseDownBar(e: any) {
    this.setStartPosition(e);
    document.documentElement.addEventListener("mousemove", this.moveScrollBar, false);
    document.documentElement.onselectstart = function () {
        return false;
    };
}
mouseUpBar(e: any) {
    document.documentElement.removeEventListener("mousemove", this.moveScrollBar, false);
    document.documentElement.removeEventListener("mouseup", this.mouseUpBar, false);
    document.documentElement.onselectstart = function () {
        return true;
    };
}
setStartPosition(e: any) {
    scrollY = e.clientY;
    startY = this.innerTop;
    document.documentElement.addEventListener("mouseup", this.mouseUpBar, false);
}
moveScrollBar(e: any) {
    // величина перемещения
    let b = scrollY - e.clientY;
    let y = startY - b / this.aspect();
    let c = this.$refs.content.scrollHeight - this.$el.clientHeight;
    if (y < 0) {
        this.innerTop = 0;
    } else if (y > c) {
        this.innerTop = c;
    } else {
        this.innerTop = y;
    }
    this.hideScroll = false;
    // this.handleScroll();
}
// handleScroll: debounce(function() {
// 	if(!this.hideScroll){
// 		this.hideScroll = true;
// 		return;
// 	}
// }, 1000)
/**
 * Спускаем скролл в самый низ
 */
scrollToBottom() {
    let el = this.$refs.content;
    el.scrollTop = el.scrollHeight;
    this.setScrollWidth();
}
getScrollHeight() {
    return this.$refs.content.scrollHeight;
}
</script>

<style lang="less" scoped>
.scroll-up {
    z-index: 100;
    height: 100vh;
    position: fixed;
    cursor: pointer;

    .left-wrapper {
        &:hover {
            .scroll-left {
                opacity: 0.85;
            }
        }

        height: 100%;

        .scroll-left {
            opacity: 0.5;
            background-color: #dbdbdb;
            padding-top: 30px;
            height: 100%;
            max-width: 150px;

            .inner {
                margin-left: 20px;
                display: flex;

                span {
                    line-height: 25px;
                    //color: #aeaeae;
                }
            }

            .arrow {
                margin-right: 10px;
                font-size: 18px;
                position: relative;
                top: -3px;
                opacity: inherit;
                -moz-transform: rotate(-90deg);
                -o-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
            }
        }
    }
}

.scroll-up.reverse {
    margin-top: 50px;

    .scroll-left {
        background-color: transparent;
        padding-top: 20px;

        .arrow {
            -moz-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
        }
    }
}

@media (max-width: 800px) {
    .scroll-up {
        display: none;
    }
}

.scroll {
    overflow: hidden;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;

    .scroll-content::-webkit-scrollbar {
        width: 0;
    }

    .scroll-content {
        position: absolute;
        max-height: 100%;
        left: 0;
        // right: -18px;
        overflow-y: scroll;
        height: auto;
        overflow-x: hidden;
    }

    .scroll-bar {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        background-color: #f0f0f5;

        &.white {
            background-color: rgba(255, 255, 255, 0.25);

            .slider {
                background-color: #ffffff;
            }
        }

        &.black {
            background-color: rgba(240, 240, 245, 0.1);
        }

        .slider {
            background-color: #bebecc;
            position: absolute;
            height: 200px;
            border-radius: 2px;
            opacity: 1;
            transition: background-color 0.1s linear;
            cursor: pointer;
            opacity: 0.85;
            transition: opacity 0.1s ease;

            &:hover,
            &:active {
                // background-color: #aaa;
                opacity: 1;
            }
        }
    }

    .slide {
        .slider {
            transition: opacity 0.4s linear;
            opacity: 0;
        }
    }

    .scroll-bar:hover {
        .slider {
            transition: opacity 0.4s linear;
            opacity: 1;
        }
    }
}

// .test{
// 	width: 6px;
// 	position: absolute;
//     height: 100%;
//     right: 0;
//     top: 0;
// }
.standart {
    .scroll-bar {
        width: 6px;

        .slider {
            width: 6px;
        }
    }
}

.small {
    .scroll-bar {
        width: 4px;

        .slider {
            width: 4px;
        }
    }
}

.mini {
    .scroll-bar {
        width: 2px;

        .slider {
            width: 2px;
        }
    }
}

.invis {
    .scroll-bar {
        opacity: 0;
    }
}
</style>
