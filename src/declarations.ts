/** @format */

export const mapNodes = {
  root: 'root',
  buttonSignIn: 'btn-signin',
  buttonLogout: 'btn-logout',
  inputEmail: 'input-email',
  inputPassword: 'input-password',
  inputMessage: 'input-message',
  buttonSend: 'btn-send',
  messageList: 'message-list',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];

export type Message = {
  author: string;
  content: string;
  ref: string;
  date: Date;
  id: string;
};
