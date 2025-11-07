import { useState } from "react";

import { useEdges } from "../../../shared/hooks/useEdges";
import { useNodes } from "../../../shared/hooks/useNodes";

export default function useHeader() {
  const [canSave, setCanSave] = useState(true);
  const { nodes } = useNodes();
  const { edges } = useEdges();
  const handleSave = () => {
    setCanSave(true);
    if (nodes.length > 1) {
      const nodesWithNoIncoming = nodes.filter(
        (node) => !edges.some((edge) => node.id === edge.target)
      );

      if (nodesWithNoIncoming.length > 1) {
        setCanSave(false);
        return;
      }
    }
  };
  return { handleSave, canSave };
}
