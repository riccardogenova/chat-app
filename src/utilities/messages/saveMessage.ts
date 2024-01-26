import { Message } from '../../declarations';

export function utilitySaveMessage(message: Message) {
  const messages = localStorage.getItem('messages');
  if (!!messages) {
    const parsedMessages = JSON.parse(messages) as Array<Message>;
    const newMessages = [...parsedMessages, message];
    localStorage.setItem('messages', JSON.stringify(newMessages));
  } else {
    const newMessages = [message];
    localStorage.setItem('messages', JSON.stringify(newMessages));
  }
}
