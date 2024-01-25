export const mapNodes = {
  root: "root",
  buttonSignIn: "btn-signin",
  buttonLogout: "btn-logout",
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];
