import { useContext } from "react";
import { EdgesContext } from "../../app/providers/EdgesProvider";

export const useEdges = () => {
  const context = useContext(EdgesContext);
  if (!context) throw new Error("useEdges must be used within a EdgesProvider");
  return context;
};