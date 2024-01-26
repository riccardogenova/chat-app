import { mapNodes } from '../declarations';
import { utilityGetMessages } from '../utilities/messages/getMessages';
import { utilityGetEmailLogged } from '../utilities/user/getEmailLogged';

export function componentChat() {
  const email = utilityGetEmailLogged();
  const messages = utilityGetMessages();

  return `
    <button id=${mapNodes.buttonLogout}>Logout ${email}</button>
    <div id=${mapNodes.messageList}>${messages || 'Non ci sono messaggi'}</div>
    <input id=${mapNodes.inputMessage} type="text" placeholder='Scrivi un messaggio' />  
    <button id=${mapNodes.buttonSend} >Send</button>`;
}
