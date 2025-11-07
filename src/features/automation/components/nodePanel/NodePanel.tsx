import "./NodePanel.css";
import { nodesDefs } from "../../utils";
import useNodePanel from "../../hooks/useNodePanel";

export const NodePanel = () => {
  const { onDragStart } = useNodePanel();

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
