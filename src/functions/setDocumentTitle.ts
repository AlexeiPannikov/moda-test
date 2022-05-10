export const setDocumentTitle = (...titles: string[]) => {
    const uppercaseFirstLetters = (str: string) => {
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
    const titleUppercaseFirstLetter = titles.map(item => uppercaseFirstLetters(item)).join(' | ')
    let defaultTitle = 'Pixelmoda'
    document.title = defaultTitle
    if (titles.length) {
        document.title = `${defaultTitle} | ${titleUppercaseFirstLetter}`
    }
}