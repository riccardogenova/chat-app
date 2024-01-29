import { mapNodes } from '../declarations';

export function componentFormLogin() {
  return `
    <div id=form>
    <div>
      <input type="text" id=${mapNodes.inputEmail} placeholder="email" />
    </div>
    <div>
      <input type="password" id=${mapNodes.inputPassword} placeholder="password" />
    </div>
    <div>
      <button id=${mapNodes.buttonSignIn}>SignIn</button>
    </div>
    </div>
  `;
}
