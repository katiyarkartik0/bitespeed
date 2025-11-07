import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useMemo,
} from "react";

import { type AutomationNode } from "../../shared/types";
import { applyNodeChanges, type NodeChange } from "@xyflow/react";

interface NodesContextValue {
  nodes: AutomationNode[];
  setNodes: Dispatch<SetStateAction<AutomationNode[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
}

export const NodesContext = createContext<NodesContextValue | undefined>(
  undefined
);

export const NodesProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes] = useState<AutomationNode[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes(
        (nodesSnapshot) =>
          applyNodeChanges(changes, nodesSnapshot) as AutomationNode[]
      ),
    []
  );

  const contextValue = useMemo(
    () => ({
      nodes,
      setNodes,
      onNodesChange,
    }),
    [nodes, setNodes, onNodesChange]
  );

  return (
    <NodesContext.Provider value={contextValue}>
      {children}
    </NodesContext.Provider>
  );
};
