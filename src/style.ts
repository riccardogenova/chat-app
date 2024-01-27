import { mapNodes } from './declarations';
import { utilityGetNode } from './utilities/dom/getNode';

export function styleRootLogin() {
  const root = utilityGetNode(mapNodes.root);
  root.style.width = '65vw';
  root.style.height = '80vh';
  root.style.margin = '7%';
  root.style.flexDirection = 'column';
  root.style.justifyContent = 'center';
}

export function styleRootChat() {
  const root = utilityGetNode(mapNodes.root);
  root.style.width = '95%';
  root.style.height = '95%';
  root.style.margin = '2%';
  root.style.flexDirection = 'row';
  root.style.justifyContent = 'flex-start';
}

export function styleMessagesClass(i: number) {
  const email = localStorage.getItem('email');
  const messages = localStorage.getItem('messages');
  if (!!messages) {
    const parsedMessages = JSON.parse(messages);
    const className = email == parsedMessages[i].author ? 'userMessages' : 'otherMessages';
    console.log(parsedMessages);
    return className;
  }
}
