/** @format */

import { mapNodes } from './declarations';
import { utilityGetNode } from './utilities/dom/getNode';
import { utilityGenerateRandomID } from './utilities/messages/generateRandomID';
import { utilitySaveMessage } from './utilities/messages/saveMessage';
import { utilityGetEmailLogged } from './utilities/user/getEmailLogged';
import { renderViewChat } from './views/view-chat';
import { renderViewLogin } from './views/view-login';

export function handlerOnClickLogout() {
  localStorage.removeItem('email');
  renderViewLogin();
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
}

export function handlerOnClickSend() {
  const nodeInput = utilityGetNode(mapNodes.inputMessage) as HTMLInputElement;
  const message = nodeInput.value;
  const email = utilityGetEmailLogged();
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
    <div id=message-container class=right-message-container>
      <p class=right-message-content>${message}</p>
      <span class=my-username>${email}</span>
    </div> `;

  nodeInput.value = '';
}
