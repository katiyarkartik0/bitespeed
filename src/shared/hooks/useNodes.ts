import { useContext } from "react";

import { NodesContext } from "../../app/providers/NodesProvider";

export const useNodes = () => {
  const context = useContext(NodesContext);
  if (!context) throw new Error("useNodes must be used within a NodesProvider");
  return context;
};