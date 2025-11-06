import type { XYPosition } from "@xyflow/react";
import TextNode from "./components/nodes/textNode/TextNode";
import { NodeType } from "./types";

export const nodesDefs = [
  {
    type: NodeType.text,
    component: TextNode,
    label: "message",
    description: "this will text you",
  },
];

const generatePosition = (): XYPosition => ({
  x: Math.random() * 400,
  y: Math.random() * 400,
});

export const createNode = ({ def }: { def: (typeof nodesDefs)[number] }) => {
  const nodeId = `${def.type}-${Date.now()}`;
  return {
    id: nodeId,
    type: def.type,
    position: generatePosition(),
    data: {
      nodeId,
      label: def.label,
      description: def.description,
      nodeType: def.type,
      prompt: "",
    },
  };
};
