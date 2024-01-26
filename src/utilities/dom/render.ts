import { NodeID } from '../../declarations';
import { utilityGetNode } from './getNode';

export function render(nodeID: NodeID, html: string) {
  const node = utilityGetNode(nodeID);
  node.innerHTML = html;
}
