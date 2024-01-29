import { mapNodes } from '../declarations';
import { utilityGetMessages } from '../utilities/messages/getMessages';
import { utilityGetEmailLogged } from '../utilities/user/getEmailLogged';

export function componentChat() {
  const email = utilityGetEmailLogged();
  const messages = utilityGetMessages();

  return `
  <div id=chat-container>
    <div id=btn-container>
    <div id=nickname-container>${email}</div>
    <button id=${mapNodes.buttonLogout}>Logout</button>
  </div>
    <div id=${mapNodes.messageList}>${messages || 'Non ci sono messaggi'}</div>
    <div class=input-bar>
    <input id=${mapNodes.inputMessage} type="text" placeholder='Scrivi un messaggio' />  
    <button id=${mapNodes.buttonSend} >Send</button>
    </div>
  </div>`;
}
