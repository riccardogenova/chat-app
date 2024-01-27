import { mapNodes } from '../declarations';

export function componentFormLogin() {
  return `
  <div id="formContainer">
    
      <input type="text" id=${mapNodes.inputEmail} placeholder="email" />
    
      <input type="password" id=${mapNodes.inputPassword} placeholder="password" />
    
      <button id=${mapNodes.buttonSignIn}>SignIn</button>
      
    </div>
  `;
}
