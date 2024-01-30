import { Message } from '../../declarations';
import { utilityGetEmailLogged } from '../user/getEmailLogged';
import { utilityWriteMessage } from './writeMessage';

function onMap(message: Message, email: string) {
  const nodeMessage = utilityWriteMessage(message, email);
  return nodeMessage;
}

export function utilityParsedMessages(messages: Array<Message>) {
  const emailLogged = utilityGetEmailLogged();
  const parsedMessages = messages.map(message => onMap(message, emailLogged)).join('');
  return parsedMessages;
}
