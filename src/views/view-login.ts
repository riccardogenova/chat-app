import { mapNodes } from "../declarations";
import { handlerOnClickSignIn } from "../handlers";
import { utilityGetNode } from "../utilities";

export function writeViewLogin() {
  const root = utilityGetNode(mapNodes.root);
  root.innerHTML = `<button id=${mapNodes.buttonSignIn}>SignIn</button>`;
  const buttonSignIn = utilityGetNode(mapNodes.buttonSignIn);
  buttonSignIn.addEventListener("click", () => {
    handlerOnClickSignIn("email@email.it");
  });
}
