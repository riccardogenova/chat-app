import { componentFormLogin } from '../components/formLogin';
import { mapNodes } from '../declarations';
import { handlerOnClickSignIn } from '../handlers';
import { styleRootLogin } from '../style';
import { addEventListener } from '../utilities/dom/addEventListener';
import { render } from '../utilities/dom/render';

export function renderViewLogin() {
  render(mapNodes.root, componentFormLogin());

  addEventListener(mapNodes.buttonSignIn, 'click', handlerOnClickSignIn);
  styleRootLogin();
}
