import { nodesDefs } from "../../helper";
import "./NodePanel.css";
import type { NodeDefinition } from "../../../../shared/types";
import { useNodes } from "../../../../shared/hooks/useNodes";

export const NodePanel = () => {
  const { setSelectedNodeDef } = useNodes();

  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    selectedNodeDef: NodeDefinition
  ) => {
    setSelectedNodeDef(selectedNodeDef);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="panel">
        {nodesDefs.map((def) => {
          return (
            <button
              key={def.type}
              type="button"
              className="node-box dndnode input"
              title={def.label ?? def.type}
              onDragStart={(event) => onDragStart(event, def)}
              draggable
            >
              <def.Icon color="blue" />
              <span className="node-label">{def.label ?? def.type}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
