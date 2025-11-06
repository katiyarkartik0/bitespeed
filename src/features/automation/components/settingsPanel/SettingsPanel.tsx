import { ArrowLeft } from "lucide-react";
import "./SettingsPanel.css";
import { useEffect, useState } from "react";
import type { AutomationNode } from "../../types";

interface SettingsPanelProps {
  setNodes: React.Dispatch<React.SetStateAction<AutomationNode[]>>;
  editNode: AutomationNode;
  closeSettings: () => void;
}

export default function SettingsPanel({
  editNode,
  setNodes,
  closeSettings,
}: SettingsPanelProps) {
  const [editPrompt, setEditPrompt] = useState("");

  useEffect(() => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === editNode.id
          ? {
              ...node,
              data: {
                ...node.data,
                prompt: editPrompt,
              },
            }
          : node
      )
    );
  }, [editPrompt]);

  if (!editNode) {
    return (
      <div className="settingspanel">
        <div className="header">
          <span>No node selected</span>
        </div>
      </div>
    );
  }

  return (
    <div className="settingspanel">
      <div className="header">
        <ArrowLeft className="back-icon" onClick={closeSettings} />
        <span className="title">Message</span>
      </div>

      <div className="body">
        <label htmlFor="prompt" className="label">
          Text
        </label>
        <textarea
          id="prompt"
          className="text"
          value={editPrompt}
          onChange={(e) => setEditPrompt(e.target.value)}
          placeholder="Enter message text..."
        />
      </div>
    </div>
  );
}
