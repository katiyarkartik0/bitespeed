import { MessageCircle } from "lucide-react";
import {
  AutomationNodeType,
  type AutomationNode,
  type NodeDefinition,
} from "../../shared/types";
import TextNode from "./components/nodes/textNode/TextNode";
import type { XYPosition } from "@xyflow/react";

export const nodesDefs = [
  {
    type: AutomationNodeType.text,
    component: TextNode,
    label: "message",
    description: "this will text you",
    Icon: MessageCircle,
  },
];

export const createNode = ({
  def,
  position,
}: {
  def: NodeDefinition;
  position: XYPosition;
}): AutomationNode => {
  const nodeId = `${def.type}-${Date.now()}`;
  return {
    id: nodeId,
    type: def.type,
    position,
    data: {
      nodeId,
      label: def.label,
      description: def.description,
      nodeType: def.type,
      prompt: "",
      Icon: def.Icon,
    },
  };
};
