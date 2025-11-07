import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { useNodes } from "../../../shared/hooks/useNodes";
import { createNode } from "../utils";
import { useSelectedNodeDef } from "../../../shared/hooks/useSelectedNodeDef";

export default function useDnd() {
  const { setNodes } = useNodes();
  const { selectedNodeDef } = useSelectedNodeDef();
  const { screenToFlowPosition } = useReactFlow();
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!selectedNodeDef) {
        return;
      }
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((prev) => [
        ...prev,
        createNode({ def: selectedNodeDef, position }),
      ]);
    },
    [screenToFlowPosition, selectedNodeDef]
  );

  return { onDrop, onDragOver };
}
