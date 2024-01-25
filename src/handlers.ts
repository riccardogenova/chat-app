/** @format */

import { writeViewLogin } from './views/view-login';
import { writeViewChat } from './views/view-chat';
import { mapNodes } from './declarations';
import { utilityGetNode, utilityGenerateRandomID, utilitySaveMessage } from './utilities';

export function handlerOnClickLogout() {
  localStorage.removeItem('email');
  writeViewLogin();
}

export function handlerOnClickSignIn(email: string, password: string) {
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
      if (userFound.password === password) writeViewChat(email);
      else alert('wrong password');
    } else {
      users = JSON.parse(cachedUsers);
      const newUsers = [...users, { email, password }];
      localStorage.setItem('users', JSON.stringify(newUsers));
      writeViewChat(email);
    }
  } else {
    const newUsers = [{ email, password }];
    localStorage.setItem('users', JSON.stringify(newUsers));
    writeViewChat(email);
  }
}

export function handlerOnClickSend(email: string) {
  const nodeInput = utilityGetNode(mapNodes.inputMessage) as HTMLInputElement;
  const message = nodeInput.value;
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
    <div>
      <p>${message}</p>
      <span>${email}</span>
    </div> `;

  nodeInput.value = '';
}
