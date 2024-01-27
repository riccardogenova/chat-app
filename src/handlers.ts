/** @format */

import { mapNodes } from './declarations';
import { styleMessagesClass, styleRootChat, styleRootLogin } from './style';
import { utilityGetNode } from './utilities/dom/getNode';
import { utilityGenerateRandomID } from './utilities/messages/generateRandomID';
import { utilitySaveMessage } from './utilities/messages/saveMessage';
import { utilityGetEmailLogged } from './utilities/user/getEmailLogged';
import { renderViewChat } from './views/view-chat';
import { renderViewLogin } from './views/view-login';

export function handlerOnClickLogout() {
  localStorage.removeItem('email');
  renderViewLogin();
  styleRootLogin();
}

export function handlerOnClickSignIn() {
  const nodeEmail = utilityGetNode(mapNodes.inputEmail) as HTMLInputElement;
  const nodePassword = utilityGetNode(mapNodes.inputPassword) as HTMLInputElement;
  const email = nodeEmail.value;
  const password = nodePassword.value;

  localStorage.setItem('email', email);
  const cachedUsers = localStorage.getItem('users');
  let users: Array<{ email: string; password: string }> = [];

  if (!!cachedUsers) {
    users = JSON.parse(cachedUsers);
    const userFound = users.find(user => {
      if (user.email === email) return true;
      return false;
    });
    if (!!userFound) {
      if (userFound.password === password) renderViewChat();
      else alert('wrong password');
    } else {
      users = JSON.parse(cachedUsers);
      const newUsers = [...users, { email, password }];
      localStorage.setItem('users', JSON.stringify(newUsers));
      renderViewChat();
    }
  } else {
    const newUsers = [{ email, password }];
    localStorage.setItem('users', JSON.stringify(newUsers));
    renderViewChat();
  }
  styleRootChat();
}

export function handlerOnClickSend() {
  const nodeInput = utilityGetNode(mapNodes.inputMessage) as HTMLInputElement;
  const message = nodeInput.value;
  const email = utilityGetEmailLogged();
  const messages = localStorage.getItem('messages') as string;
  const parsedMessages = JSON.parse(messages);
  utilitySaveMessage({
    content: message,
    author: email,
    ref: '',
    date: new Date(),
    id: utilityGenerateRandomID(),
  });
  const nodeMessageList = utilityGetNode(mapNodes.messageList);
  nodeMessageList.innerHTML = `
    ${nodeMessageList.innerHTML}
    <div class=${styleMessagesClass(parsedMessages.length)}>
      <span>${email}</span>
      <p>${message}</p>
    </div> `;

  nodeInput.value = '';
}
