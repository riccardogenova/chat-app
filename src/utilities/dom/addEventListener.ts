import { NodeID } from '../../declarations';
import { utilityGetNode } from './getNode';

export function addEventListener(nodeID: NodeID, event: keyof HTMLElementEventMap, handler: () => void) {
  const node = utilityGetNode(nodeID);
  node.addEventListener(event, handler);
}
