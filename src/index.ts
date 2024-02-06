/** @format */

import { CreateDiscordApp } from './Model';
import {
  utilityGetInitialRooms,
  utilityGetInitialOnlineUsers,
  utilityGetInitialUserLogged,
  utilityGetInitialUsers,
} from './utils';

const rooms = utilityGetInitialRooms();
const onlineUsers = utilityGetInitialOnlineUsers();
const userLogged = utilityGetInitialUserLogged();
const users = utilityGetInitialUsers();

export const App = new CreateDiscordApp({ rooms, onlineUsers, userLogged, users });

// @ts-ignore
window.app = App;

window.onload = () => {
  document.body.innerHTML = `<div>Welcome to Chat App</div>`;
};
