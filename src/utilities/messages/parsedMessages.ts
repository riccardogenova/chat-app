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
