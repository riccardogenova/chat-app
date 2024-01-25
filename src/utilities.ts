/** @format */

import { Message, NodeID } from './declarations';

export function utilityGetNode(node: NodeID) {
  const root = document.getElementById(node);
  if (!!root) return root;
  else throw new Error(`Element with id ${node} not found`);
}

export function utilityGenerateRandomID() {
  let result = '';
  const characters = '0123456789abcdef';
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function utilityParsedMessages(messages: Array<{ content: string; author: string }>) {
  const parsedMessages = messages
    .map(
      message => `
    <div>
      <p>${message.content}</p>
      <span>${message.author}</span>
    </div>`,
    )
    .join('');

  return parsedMessages;
}

export function utilityGetMessages() {
  const messages = localStorage.getItem('messages');
  if (!!messages) return JSON.parse(messages) as Array<Message>;
  else return [];
}

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
