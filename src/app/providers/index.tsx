import { ReactFlowProvider } from "@xyflow/react";

import { NodesProvider } from "./NodesProvider";
import { EdgesProvider } from "./EdgesProvider";
import { SelectedNodeProvider } from "./SelectedNodeProvider";
import { SelectedNodeDefProvider } from "./SelectedNodeDefProvider";

import type { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ReactFlowProvider>
      <NodesProvider>
        <SelectedNodeProvider>
          <SelectedNodeDefProvider>
            <EdgesProvider>{children}</EdgesProvider>
          </SelectedNodeDefProvider>
        </SelectedNodeProvider>
      </NodesProvider>
    </ReactFlowProvider>
  );
}