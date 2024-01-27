import { styleMessagesClass } from '../../style';

export function utilityParsedMessages(messages: Array<{ content: string; author: string }>) {
  const parsedMessages = messages
    .map(
      (message, i) => `
      <div class= '${styleMessagesClass(i)}'>
         <span>${message.author}</span>
        <p>${message.content}</p>
      </div>`,
    )
    .join('');

  return parsedMessages;
}
