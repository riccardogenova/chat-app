/** @format */

import { handlerOnClickLogout } from '../handlers';
import { mapNodes } from '../declarations';
import { utilityGetNode } from '../utilities';

export function writeViewChat(email: string) {
  const root = utilityGetNode(mapNodes.root);
  root.innerHTML = `<button id=${mapNodes.buttonLogout}>Logout ${email}</button>`;
  const buttonLogout = utilityGetNode(mapNodes.buttonLogout);
  buttonLogout.addEventListener('click', handlerOnClickLogout);
}
