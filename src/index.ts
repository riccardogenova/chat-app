/** @format */

import { utilityGetEmailLogged } from './utilities/user/getEmailLogged';
import { renderViewChat } from './views/view-chat';
import { renderViewLogin } from './views/view-login';

window.onload = () => {
  const email = utilityGetEmailLogged();
  !!email ? renderViewChat() : renderViewLogin();
};
