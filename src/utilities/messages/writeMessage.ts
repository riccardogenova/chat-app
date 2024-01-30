import { Message } from '../../declarations';

export function utilityWriteMessage(message: Message, email: string) {
  const nodeDelete = email === message.author ? `<button id="btn-delete-${message.id}">Delete</button>` : '';

  return `
        <section>
          <p>${message.content}</p>
          <span>${message.author}</span>
          ${nodeDelete}
        </section>`;
}
