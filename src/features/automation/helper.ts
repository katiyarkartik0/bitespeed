import TextNode from "./components/nodes/textNode/TextNode";
import { MessageCircle } from "lucide-react";
import { AutomationNodeType } from "../../shared/types";

export const nodesDefs = [
  {
    type: AutomationNodeType.text,
    component: TextNode,
    label: "message",
    description: "this will text you",
    Icon: MessageCircle,
  },
];

