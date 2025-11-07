import { ArrowLeft } from "lucide-react";

import { type ChangeEvent } from "react";
import "./SettingsPanel.css";
import { useNodes } from "../../../../shared/hooks/useNodes";

export default function SettingsPanel() {
  const { selectedNode, setSelectedNode, setNodes } = useNodes();

  if (!selectedNode) return <>No node selected</>;

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
          value={selectedNode.data.prompt}
          onChange={handleChange}
          placeholder="Enter message text..."
        />
      </div>
    </div>
  );
}
