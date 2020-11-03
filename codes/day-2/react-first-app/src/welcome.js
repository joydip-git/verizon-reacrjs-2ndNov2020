//welcome component
export const welcome = () => {
    const message = 'Welcome to React'
    const spanElement = document.createElement('span');
    // const spanStyle = {
    //     backgroundColor: 'lime',
    //     textAlign: 'center',
    //     fontFamily: 'Arial',
    //     fontSize: 'medium'
    // }
    //spanElement.style = spanStyle;
    spanElement.style.backgroundColor = 'lime';
    spanElement.style.textAlign = 'center'
    spanElement.style.fontFamily = 'Consolas'
    spanElement.style.fontSize = 'medium'
    spanElement.innerHTML = message;

    return spanElement;
}