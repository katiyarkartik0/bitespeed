import type { Node } from "@xyflow/react";

interface CustomNodeData extends Record<string, unknown> {
  nodeId: string;
  label: string;
  description: string;
  nodeType: NodeType;
  prompt: string;
}

export interface AutomationNode extends Node<CustomNodeData> {}

export enum NodeType {
  text = "text",
}
