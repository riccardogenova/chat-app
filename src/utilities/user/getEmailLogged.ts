export function utilityGetEmailLogged() {
  const email = localStorage.getItem('email');
  if (!!email) return email;
  else return '';
}
