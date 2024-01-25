import { writeViewLogin } from "./views/view-login";
import { writeViewChat } from "./views/view-chat";

export function handlerOnClickLogout() {
  localStorage.removeItem("email");
  writeViewLogin();
}

export function handlerOnClickSignIn(email: string) {
  localStorage.setItem("email", email);
  writeViewChat(email);
}
