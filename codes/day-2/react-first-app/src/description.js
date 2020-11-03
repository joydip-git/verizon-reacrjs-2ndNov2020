//description component
export const description = () => {
    const data = 'React is a JavaScript Library'

    const articleElement = document.createElement('article');
    articleElement.innerHTML = data;

    return articleElement;
}