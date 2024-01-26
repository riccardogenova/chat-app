import { Message } from '../../declarations';
import { utilityParsedMessages } from './parsedMessages';

export function utilityGetMessages() {
  const messages = localStorage.getItem('messages');
  if (!!messages) {
    const parsedMessages = JSON.parse(messages) as Array<Message>;
    const nodeMessages = utilityParsedMessages(parsedMessages);
    return nodeMessages;
  } else return '';
}
