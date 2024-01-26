/** @format */

import { handlerOnClickLogout, handlerOnClickSend } from '../handlers';
import { mapNodes } from '../declarations';
import { componentChat } from '../components/chat';
import { addEventListener } from '../utilities/dom/addEventListener';
import { render } from '../utilities/dom/render';

export function renderViewChat() {
  render(mapNodes.root, componentChat());
  addEventListener(mapNodes.buttonSend, 'click', handlerOnClickSend);
  addEventListener(mapNodes.buttonLogout, 'click', handlerOnClickLogout);
}
