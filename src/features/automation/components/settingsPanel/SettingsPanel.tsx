import { ArrowLeft } from "lucide-react";
import "./SettingsPanel.css";
import useSettingsPanel from "../../hooks/useSettingsPanel";

export default function SettingsPanel() {
  const { selectedNode, closeSettings, handleChange } = useSettingsPanel();
  if (!selectedNode) return <>Node not selected</>;

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
