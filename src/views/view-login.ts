/** @format */

import { mapNodes } from '../declarations';
import { handlerOnClickSignIn } from '../handlers';
import { utilityGetNode } from '../utilities';

export function writeViewLogin() {
  const root = utilityGetNode(mapNodes.root);
  root.innerHTML = `
    <div>
      <input type="text" id=${mapNodes.inputEmail} placeholder="email" />
    </div>
    <div>
      <input type="password" id=${mapNodes.inputPassword} placeholder="password" />
    </div>
    <div>
      <button id=${mapNodes.buttonSignIn}>SignIn</button>
    </div>
  `;
  const buttonSignIn = utilityGetNode(mapNodes.buttonSignIn);
  buttonSignIn.addEventListener('click', () => {
    const nodeEmail = utilityGetNode(mapNodes.inputEmail);
    const nodePassword = utilityGetNode(mapNodes.inputPassword);
    // @ts-ignore
    const email = nodeEmail.value;
    // @ts-ignore
    const password = nodePassword.value;
    handlerOnClickSignIn(email, password);
  });
}
