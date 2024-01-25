/** @format */

import { handlerOnClickLogout, handlerOnClickSend } from '../handlers';
import { mapNodes } from '../declarations';
import { utilityGetMessages, utilityGetNode, utilityParsedMessages } from '../utilities';

export function writeView(email: string, messagesHTML?: string) {
  const root = utilityGetNode(mapNodes.root);

  root.innerHTML = `
    <button id=${mapNodes.buttonLogout}>Logout ${email}</button>
    <div id=${mapNodes.messageList}>${messagesHTML || 'Non ci sono messaggi'}</div>
    <input id=${mapNodes.inputMessage} type="text" placeholder='Scrivi un messaggio' />  
    <button id=${mapNodes.buttonSend} >Send</button>`;

  const buttonSend = utilityGetNode(mapNodes.buttonSend);
  buttonSend.addEventListener('click', () => {
    handlerOnClickSend(email);
  });

  const buttonLogout = utilityGetNode(mapNodes.buttonLogout);
  buttonLogout.addEventListener('click', handlerOnClickLogout);
}

export function writeViewChat(email: string) {
  const messages = utilityGetMessages();
  if (!!messages) {
    const messagesHTML = utilityParsedMessages(messages);
    writeView(email, messagesHTML);
  } else writeView(email);
}
