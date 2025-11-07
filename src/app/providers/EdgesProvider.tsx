import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useCallback,
} from "react";

import {
  addEdge,
  applyEdgeChanges,
  MarkerType,
  type Connection,
  type Edge,
  type EdgeChange,
} from "@xyflow/react";

interface EdgesContextValue {
  onConnect: (params: Connection) => void;
  edges: Edge[];
  setEdges: Dispatch<SetStateAction<Edge[]>>;
  onEdgesChange: (changes: EdgeChange[]) => void;
}

export const EdgesContext = createContext<EdgesContextValue | undefined>(
  undefined
);

export const EdgesProvider = ({ children }: { children: ReactNode }) => {
  const [edges, setEdges] = useState<Edge[]>([]);

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) =>
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          edgesSnapshot
        )
      ),
    []
  );
  return (
    <EdgesContext.Provider
      value={{
        edges,
        onEdgesChange,
        onConnect,
        setEdges,
      }}
    >
      {children}
    </EdgesContext.Provider>
  );
};
