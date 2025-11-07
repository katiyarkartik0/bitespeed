import { useContext } from "react";

import { SelectedNodeContext } from "../../app/providers/SelectedNodeProvider";

export const useSelectedNode = () => {
  const context = useContext(SelectedNodeContext);
  if (!context)
    throw new Error(
      "useSelectedNode must be used within a SelectedNodeProvider"
    );
  return context;
};
