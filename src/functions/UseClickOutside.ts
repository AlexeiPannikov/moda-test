import { onMounted, onUnmounted } from "vue"

export const useClickOutside = () => {

    return (elements: any[], handler: () => void) => {
        const listenerHandler = (event: any) => {
            for (let element of elements) {
                if(element.value && element.value.contains(event.target)) {
                    break;
                }
                handler()
            }
        }

        onMounted(() => {
            document.addEventListener("click", listenerHandler)
        })

        onUnmounted(() => {
            document.removeEventListener("click", listenerHandler)
        })
    }
}