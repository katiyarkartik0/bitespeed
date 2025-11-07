import AutomationBuilder from "../../components/AutomationBuilder";
import { NodePanel } from "../../components/nodePanel/NodePanel";

import { useReactFlow, type NodeTypes } from "@xyflow/react";

import "./Automation.css";
import SettingsPanel from "../../components/settingsPanel/SettingsPanel";
import { useCallback, useMemo } from "react";
import { useNodes } from "../../../../shared/hooks/useNodes";
import { useEdges } from "../../../../shared/hooks/useEdges";
import type { NodeDefinition } from "../../../../shared/types";

function constructNodeTypes(nodesDefs: NodeDefinition[]): NodeTypes {
  const nodeTypes: NodeTypes = Object.fromEntries(
    nodesDefs.map(({ type, component: NodeComponent }) => {
      console.log(NodeComponent)
      return [type, NodeComponent];
    })
  );
  return nodeTypes;
}

export default function Automation() {
  const {
    nodes,
    onNodesChange,
    setNodes,
    selectedNodeDef,
    selectedNode,
    nodesDefs,
    createNode,
  } = useNodes();
  const { edges, onEdgesChange, onConnect } = useEdges();
  const nodeTypes = useMemo(() => constructNodeTypes(nodesDefs), [nodesDefs]);
  const { screenToFlowPosition } = useReactFlow();

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!selectedNodeDef) {
        return;
      }
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((prev) => [
        ...prev,
        createNode({ def: selectedNodeDef, position }),
      ]);
    },
    [screenToFlowPosition, selectedNodeDef]
  );

  return (
    <div className="page">
      {/* <Navbar setEditNodeId={setEditNodeId} /> */}
      <div className="workspace">
        <AutomationBuilder
          {...{
            nodes,
            onNodesChange,
            edges,
            onEdgesChange,
            onConnect,
            nodeTypes,
            onDrop,
          }}
        />
        {selectedNode ? <SettingsPanel /> : <NodePanel />}
      </div>
    </div>
  );
}
