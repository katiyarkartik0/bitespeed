import { ReactFlowProvider } from "@xyflow/react";
import type { ReactNode } from "react";
import { NodesProvider } from "./NodesProvider";
import { EdgesProvider } from "./EdgesProvider";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ReactFlowProvider>
      <NodesProvider>
        <EdgesProvider>{children}</EdgesProvider>
      </NodesProvider>
    </ReactFlowProvider>
  );
}
