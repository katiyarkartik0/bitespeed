import type { Node } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import type { FC } from "react";

export interface AutomationNodeData extends Record<string, unknown> {
  nodeId: string;
  label: string;
  description: string;
  nodeType: AutomationNodeType;
  prompt: string;
}

export interface NodeDefinition {
  type: AutomationNodeType;
  component: FC<any>;
  label: string;
  description: string;
  Icon: LucideIcon;
}

export interface AutomationNode extends Node<AutomationNodeData> {}

export enum AutomationNodeType {
  text = "text",
  notification = "notification"
}
