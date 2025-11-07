import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useMemo,
} from "react";

import { type NodeDefinition } from "../../shared/types";

interface SelectedNodeDefContext {
  selectedNodeDef: NodeDefinition | null;
  setSelectedNodeDef: Dispatch<SetStateAction<NodeDefinition | null>>;
}

export const SelectedNodeDefContext = createContext<
  SelectedNodeDefContext | undefined
>(undefined);

export const SelectedNodeDefProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedNodeDef, setSelectedNodeDef] = useState<NodeDefinition | null>(
    null
  );

  const contextValue = useMemo(
    () => ({
      selectedNodeDef,
      setSelectedNodeDef,
    }),
    [selectedNodeDef, setSelectedNodeDef]
  );

  return (
    <SelectedNodeDefContext.Provider value={contextValue}>
      {children}
    </SelectedNodeDefContext.Provider>
  );
};
