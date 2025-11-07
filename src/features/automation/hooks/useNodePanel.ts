import { useSelectedNodeDef } from "../../../shared/hooks/useSelectedNodeDef";

import type { NodeDefinition } from "../../../shared/types";

export default function useNodePanel() {
  const { setSelectedNodeDef } = useSelectedNodeDef();

  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    selectedNodeDef: NodeDefinition
  ) => {
    setSelectedNodeDef(selectedNodeDef);
    event.dataTransfer.effectAllowed = "move";
  };
  return { onDragStart };
}
