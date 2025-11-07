import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useMemo,
} from "react";

import { type AutomationNode } from "../../shared/types";

interface SelectedNodeContextValue {
  selectedNode: AutomationNode | null;
  setSelectedNode: Dispatch<SetStateAction<AutomationNode | null>>;
}

export const SelectedNodeContext = createContext<
  SelectedNodeContextValue | undefined
>(undefined);

export const SelectedNodeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNode, setSelectedNode] = useState<AutomationNode | null>(null);

  const contextValue = useMemo(
    () => ({
      selectedNode,
      setSelectedNode,
    }),
    [selectedNode, setSelectedNode]
  );

  return (
    <SelectedNodeContext.Provider value={contextValue}>
      {children}
    </SelectedNodeContext.Provider>
  );
};
