import AutomationBuilder from "../../components/AutomationBuilder";
import { NodePanel } from "../../components/nodePanel/NodePanel";

import "./Automation.css";
import SettingsPanel from "../../components/settingsPanel/SettingsPanel";
import Header from "../../components/header/Header";
import { useSelectedNode } from "../../../../shared/hooks/useSelectedNode";

export default function Automation() {
  const { selectedNode } = useSelectedNode();
  return (
    <div className="page">
      <Header />
      <div className="workspace">
        <AutomationBuilder />
        {selectedNode ? <SettingsPanel /> : <NodePanel />}
      </div>
    </div>
  );
}