/** @format */

import { writeViewLogin } from './views/view-login';
import { writeViewChat } from './views/view-chat';

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
