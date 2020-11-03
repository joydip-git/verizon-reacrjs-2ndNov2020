//app component
import { welcome } from './welcome'
import { description } from './description'
export const app = () => {
    const welcomeElement = welcome();
    const desciptionElement = description();

    const appElement = document.createElement('div');
    appElement.appendChild(welcomeElement);
    appElement.appendChild(document.createElement('br'))
    appElement.appendChild(document.createElement('br'))
    appElement.appendChild(desciptionElement);

    return appElement;
}