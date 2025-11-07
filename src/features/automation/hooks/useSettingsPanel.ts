import { useNodes } from "../../../shared/hooks/useNodes";
import { useSelectedNode } from "../../../shared/hooks/useSelectedNode";

import type { ChangeEvent } from "react";

export default function useSettingsPanel() {
  const { setNodes } = useNodes();
  const { selectedNode, setSelectedNode } = useSelectedNode();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!selectedNode) return;
    setSelectedNode((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        data: { ...prev?.data, prompt: e.target.value },
      };
    });
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              data: {
                ...node.data,
                prompt: e.target.value,
              },
            }
          : node
      )
    );
  };

  const closeSettings = () => setSelectedNode(null);
  return { selectedNode, handleChange, closeSettings };
}
