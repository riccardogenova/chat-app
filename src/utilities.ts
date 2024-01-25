import { NodeID } from "./declarations";

export function utilityGetNode(node: NodeID) {
  const root = document.getElementById(node);
  if (!!root) return root;
  else throw new Error(`Element with id ${node} not found`);
}
