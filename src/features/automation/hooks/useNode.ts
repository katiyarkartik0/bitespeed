import { useCallback, useState } from "react";
import { applyNodeChanges, type NodeChange } from "@xyflow/react";
import type { AutomationNode } from "../types";

export default function useNode() {
  const [nodes, setNodes] = useState<AutomationNode[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes(
        (nodesSnapshot) =>
          applyNodeChanges(changes, nodesSnapshot) as AutomationNode[]
      ),
    []
  );
  return { nodes, onNodesChange, setNodes };
}
