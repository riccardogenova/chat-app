/** @format */

import { writeViewChat } from './views/view-chat';
import { writeViewLogin } from './views/view-login';

window.onload = () => {
  const email = localStorage.getItem('email');
  if (!!email) writeViewChat(email);
  else writeViewLogin();
};
