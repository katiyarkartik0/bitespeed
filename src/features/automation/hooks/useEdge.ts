import {
  addEdge,
  applyEdgeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
} from "@xyflow/react";
import { useCallback, useState } from "react";

const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

export default function useEdge() {
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return { edges, onConnect, onEdgesChange };
}
