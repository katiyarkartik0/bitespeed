import AutomationBuilder from "../../components/AutomationBuilder";
import Navbar from "../../components/navbar/Navbar";
import { NodePanel } from "../../components/nodePanel/NodePanel";

import type { NodeTypes } from "@xyflow/react";
import { nodesDefs } from "../../helper";
import useNode from "../../hooks/useNode";
import useEdge from "../../hooks/useEdge";

import "./Automation.css";
import SettingsPanel from "../../components/settingsPanel/SettingsPanel";
import { useMemo, useState } from "react";

function constructNodeTypes({
  setEditNodeId,
}: {
  setEditNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}): NodeTypes {
  const nodeTypes: NodeTypes = Object.fromEntries(
    nodesDefs.map(({ type, component }) => {
      return [type, (props) => component({ ...props, setEditNodeId })];
    })
  );
  return nodeTypes;
}

export default function Automation() {
  const [editNodeId, setEditNodeId] = useState<string | null>(null);
  const { nodes, onNodesChange, setNodes } = useNode();
  const { edges, onEdgesChange, onConnect } = useEdge();
  const nodeTypes = useMemo(
    () => constructNodeTypes({ setEditNodeId }),
    [setEditNodeId]
  );

  const editNode = useMemo(() => {
    return nodes.find((n) => n.id === editNodeId);
  }, [nodes, editNodeId]);

  const closeSettings = () => setEditNodeId(null);

  return (
    <div className="page">
      <Navbar setEditNodeId={setEditNodeId} />
      <div className="workspace">
        <AutomationBuilder
          {...{
            nodes,
            onNodesChange,
            edges,
            onEdgesChange,
            onConnect,
            nodeTypes,
          }}
        />
        {editNode ? (
          <SettingsPanel
            setNodes={setNodes}
            editNode={editNode}
            closeSettings={closeSettings}
          />
        ) : (
          <NodePanel setNodes={setNodes} />
        )}
      </div>
    </div>
  );
}
