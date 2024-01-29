import { utilityGetEmailLogged } from "../user/getEmailLogged";

export function utilityParsedMessages(messages: Array<{ content: string; author: string }>,) {
  const emailLogged = utilityGetEmailLogged()
  const parsedMessages = messages
    .map(
      message => `
      <div id=message-container class="${message.author === emailLogged ? 'right-message-container' : 'left-message-container'}">
        <p class="${message.author === emailLogged ? 'right-message-content' : 'left-message-content'}">${message.content}</p>
        <span class="${message.author === emailLogged ? 'my-username' : 'other-username'}">${message.author}</span>
      </div>`,
    )
    .join('');

  return parsedMessages;
}
