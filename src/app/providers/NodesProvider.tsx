import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useCallback,
} from "react";

import {
  AutomationNodeType,
  type AutomationNode,
  type NodeDefinition,
  type AutomationNodeData,
} from "../../shared/types";
import {
  applyNodeChanges,
  type NodeChange,
  type XYPosition,
} from "@xyflow/react";
import TextNode from "../../features/automation/components/nodes/textNode/TextNode";
import { MessageCircle } from "lucide-react";

interface NodesContextValue {
  selectedNode: AutomationNode | null;
  setSelectedNode: Dispatch<SetStateAction<AutomationNode | null>>;
  nodes: AutomationNode[];
  setNodes: Dispatch<SetStateAction<AutomationNode[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
  selectedNodeDef: NodeDefinition | null;
  setSelectedNodeDef: Dispatch<SetStateAction<NodeDefinition | null>>;
  createNode: (args: {
    def: NodeDefinition;
    position: XYPosition;
  }) => AutomationNode;
  nodesDefs: NodeDefinition[];
}

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

export const NodesContext = createContext<NodesContextValue | undefined>(
  undefined
);

export const NodesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNode, setSelectedNode] = useState<AutomationNode | null>(null);
  const [nodes, setNodes] = useState<AutomationNode[]>([]);
  const [selectedNodeDef, setSelectedNodeDef] = useState<NodeDefinition | null>(
    null
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes(
        (nodesSnapshot) =>
          applyNodeChanges(changes, nodesSnapshot) as AutomationNode[]
      ),
    []
  );

  return (
    <NodesContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
        nodes,
        setNodes,
        onNodesChange,
        selectedNodeDef,
        setSelectedNodeDef,
        createNode,
        nodesDefs,
      }}
    >
      {children}
    </NodesContext.Provider>
  );
};
