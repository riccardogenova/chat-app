import { TRoom, TUser } from './declarations';

export class CreateDiscordApp {
  #rooms: Array<TRoom>;
  #onlineUsers: Array<TUser['id']>;
  #userLogged: Pick<TUser, 'username' | 'id'> | null;
  #users: Array<TUser>;

  constructor({
    rooms,
    onlineUsers,
    userLogged,
    users,
  }: {
    rooms?: Array<TRoom>;
    onlineUsers?: Array<TUser['id']>;
    userLogged?: TUser | null;
    users?: Array<TUser>;
  }) {
    this.#rooms = rooms || [];
    this.#onlineUsers = onlineUsers || [];
    this.#userLogged = userLogged || null;
    this.#users = users || [];
    console.log('AppDiscord created');
    console.log('rooms', this.#rooms);
    console.log('onlineUsers', this.#onlineUsers);
    console.log('userLogged', this.#userLogged);
    console.log('users', this.#users);
  }

  #checkUserExists(username: TUser['username']) {
    const isAlreadySignup = this.#users.some(user => user.username === username);
    return isAlreadySignup;
  }
  #checkIsSuperAdmin() {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');
    const isSuperAdmin = userLogged.id === '1';
    return isSuperAdmin;
  }
  #isUserRoomAdmin(idRoom: TRoom['id']) {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');
    const room = this.#rooms.find(room => room.id === idRoom);
    if (!room) throw new Error('Room not found');
    const isUserAdmin = room.users.some(user => user.idUser === userLogged.id && user.permission === 'admin');
    return isUserAdmin;
  }
  isSuperAdmin() {
    return this.#checkIsSuperAdmin();
  }
  getUserLogged() {
    return this.#userLogged;
  }
  signup({ username, password }: { username: TUser['username']; password: TUser['password'] }) {
    if (!!this.#userLogged) throw new Error('You are already logged in');

    const isAlreadySignup = this.#checkUserExists(username);
    if (isAlreadySignup) throw new Error('User already exists');
    else {
      const newUser: TUser = { id: Math.random().toString(), username, password };
      this.#users = [...this.#users, newUser];
      console.log(`User ${newUser.username} created`);
      const user = this.login({ username, password });
      localStorage.setItem('users', JSON.stringify(this.#users));
      return user;
    }
  }
  login({ username, password }: { username: TUser['username']; password: TUser['password'] }) {
    if (!!this.#userLogged) throw new Error('You are already logged in');

    const user = this.#users.find(user => user.username === username && user.password === password);
    if (!user) throw new Error('User not found');
    else {
      this.#userLogged = { username: user.username, id: user.id };
      this.#onlineUsers = [...this.#onlineUsers, user.id];
      console.log(`User ${user.username} logged in`);
      localStorage.setItem('userLogged', JSON.stringify(this.#userLogged));
      localStorage.setItem('onlineUsers', JSON.stringify(this.#onlineUsers));
      return { username: user.username, id: user.id };
    }
  }
  logout() {
    const isLogged = !!this.#userLogged;
    if (!isLogged) throw new Error('You are not logged in');
    this.#onlineUsers = this.#onlineUsers.filter(id => id !== this.#userLogged!.id);
    this.#userLogged = null;
    console.log('User logged out');
  }

  getOnlineUsers() {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');
    return this.#onlineUsers;
  }
  // ROOMS
  createRoom(name: TRoom['name']) {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');

    const room: TRoom = {
      id: Math.random().toString(),
      name,
      messages: [],
      users: [{ idUser: userLogged.id, permission: 'admin' }],
      private: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.#rooms = [...this.#rooms, room];
    console.log(`Room ${room.name} created`);
    localStorage.setItem('rooms', JSON.stringify(this.#rooms));
    return room;
  }
  getRoomDetail(id: TRoom['id']) {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');
    const room = this.#rooms.find(room => room.id === id);
    const userInRoom = room?.users.some(user => user.idUser === userLogged.id);
    if (!userInRoom) throw new Error('You are not allowed to do this');
    if (!room) throw new Error('Room not found');
    return room;
  }
  getRoomListPublic() {
    const isLogged = !!this.getUserLogged();
    if (!isLogged) throw new Error('You are not logged in');

    const filteredPublicRooms = this.#rooms.filter(room => !room.private);
    const filteredRooms = filteredPublicRooms.map(room => ({ id: room.id, name: room.name }));
    return filteredRooms;
  }
  getRoomList() {
    const isLogged = !!this.getUserLogged();
    if (!isLogged) throw new Error('You are not logged in');
    const myRooms = this.#rooms.filter(room => room.users.some(user => user.idUser === this.#userLogged?.id));
    return myRooms;
  }
  inviteUserToRoom({ idRoom, idUser }: { idRoom: TRoom['id']; idUser: TUser['id'] }) {
    const userLogged = this.getUserLogged();
    if (!userLogged) throw new Error('You are not logged in');
    const room = this.getRoomDetail(idRoom);
    const isUserRoomAdmin = this.#isUserRoomAdmin(idRoom);
    if (!isUserRoomAdmin) throw new Error('You are not allowed to do this');
    if (room.users.some(user => user.idUser === idUser)) throw new Error('User already in the room');
    room.users = [...room.users, { idUser, permission: 'user' }];
    console.log(`User ${idUser} invited to room ${room.name}`);
    localStorage.setItem('rooms', JSON.stringify(this.#rooms));
    return room;
  }
  // ADMIN
  getAllUsers() {
    const isSuperAdmin = this.#checkIsSuperAdmin();
    if (!isSuperAdmin) throw new Error('You are not allowed to do this');
    return this.#users;
  }

  getAllRooms() {
    const isSuperAdmin = this.isSuperAdmin();
    if (!isSuperAdmin) throw new Error('You are not allowed to do this');
    return this.#rooms;
  }
}
