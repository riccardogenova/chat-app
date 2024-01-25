/** @format */

export const mapNodes = {
  root: 'root',
  buttonSignIn: 'btn-signin',
  buttonLogout: 'btn-logout',
  inputEmail: 'input-email',
  inputPassword: 'input-password',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];
