export const utilityGetInitialRooms = () => {
  return !!localStorage.getItem('rooms') ? JSON.parse(localStorage.getItem('rooms')!) : [];
};

export const utilityGetInitialOnlineUsers = () => {
  return !!localStorage.getItem('onlineUsers') ? JSON.parse(localStorage.getItem('onlineUsers')!) : [];
};

export const utilityGetInitialUserLogged = () => {
  return !!localStorage.getItem('userLogged') ? JSON.parse(localStorage.getItem('userLogged')!) : null;
};

export const utilityGetInitialUsers = () => {
  return !!localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users')!)
    : [
        {
          id: '1',
          username: 'riccardogenova',
          password: '12345',
        },
      ];
};
