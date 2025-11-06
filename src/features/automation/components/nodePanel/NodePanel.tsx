import { createNode, nodesDefs } from "../../helper";
import "./NodePanel.css";
import { MessageCircle } from "lucide-react";
import { NodeType, type AutomationNode } from "../../types";

export const NodePanel = ({
  setNodes,
}: {
  setNodes: React.Dispatch<React.SetStateAction<AutomationNode[]>>;
}) => {
  const handleAddNode = (def: (typeof nodesDefs)[number]) => {
    setNodes((prev) => [...prev, createNode({ def })]);
  };
  return (
    <div className="panel">
      {nodesDefs.map((def) => {
        if (def.type === NodeType.text) {
          return (
            <button
              key={def.type}
              type="button"
              className="node-box"
              title={def.label ?? def.type}
              onClick={() => handleAddNode(def)}
            >
              <MessageCircle color="blue" />
              <span className="node-label">{def.label ?? def.type}</span>
            </button>
          );
        }
      })}
    </div>
  );
};
