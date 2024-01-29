import { mapNodes } from '../declarations';

export function componentFormLogin() {
  return `
    
      <input type="text" id=${mapNodes.inputEmail} class = "inputLogin" placeholder="email" />
  
    
      <input type="password" id=${mapNodes.inputPassword} class = "inputLogin" placeholder="password" />
    
    
      <button id=${mapNodes.buttonSignIn} class= "btnLogin">SignIn</button>
    
  `;
}


import '../css/style.css';