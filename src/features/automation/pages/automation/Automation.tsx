import { useSelectedNode } from "../../../../shared/hooks/useSelectedNode";

import AutomationBuilder from "../../components/AutomationBuilder";
import { NodePanel } from "../../components/nodePanel/NodePanel";
import SettingsPanel from "../../components/settingsPanel/SettingsPanel";
import Header from "../../components/header/Header";

import "./Automation.css";

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