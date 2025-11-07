import { useContext } from "react";
import { SelectedNodeDefContext } from "../../app/providers/SelectedNodeDefProvider";

export const useSelectedNodeDef = () => {
  const context = useContext(SelectedNodeDefContext);
  if (!context)
    throw new Error(
      "useSelectedNodeDef must be used within a SelectedNodeDefContext"
    );
  return context;
};
