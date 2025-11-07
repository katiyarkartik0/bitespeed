import { ArrowLeft } from "lucide-react";
import useSettingsPanel from "../../hooks/useSettingsPanel";

import "./SettingsPanel.css";

export default function SettingsPanel() {
  const { selectedNode, closeSettings, handleChange } = useSettingsPanel();
  if (!selectedNode) return <>Node not selected</>;

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <div className="settings-header-left">
          <ArrowLeft className="back-icon" onClick={closeSettings} />
          <span className="title">Message</span>
        </div>
      </div>

      <div className="settings-body">
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
