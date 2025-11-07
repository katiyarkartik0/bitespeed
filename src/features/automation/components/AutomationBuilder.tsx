import { useMemo } from "react";
import { ReactFlow, type NodeTypes } from "@xyflow/react";

import { useNodes } from "../../../shared/hooks/useNodes";
import { useEdges } from "../../../shared/hooks/useEdges";

import useDnd from "../hooks/useDnd";

import { nodesDefs } from "../utils";

import "@xyflow/react/dist/style.css";

import type { NodeDefinition } from "../../../shared/types";

function constructNodeTypes(nodesDefs: NodeDefinition[]): NodeTypes {
  const nodeTypes: NodeTypes = Object.fromEntries(
    nodesDefs.map(({ type, component }) => [type, component])
  );
  return nodeTypes;
}

export default function AutomationBuilder() {
  const { nodes, onNodesChange } = useNodes();
  const { edges, onEdgesChange, onConnect } = useEdges();
  const { onDrop, onDragOver } = useDnd();
  const nodeTypes = useMemo(() => constructNodeTypes(nodesDefs), [nodesDefs]);

  return (
    <div
      style={{ width: "80%", height: "100%", border: "1px solid black" }}
      className="reactflow-wrapper"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      />
    </div>
  );
}
