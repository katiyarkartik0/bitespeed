import { Handle, Position, type NodeProps } from "@xyflow/react";
import "./TextNode.css";
import type { AutomationNode, NodeType } from "../../../types";

interface TextNodeProps extends NodeProps {
  data: AutomationNode["data"];
  type: NodeType;
  setEditNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TextNode({ id, data, setEditNodeId }: TextNodeProps) {

  return (
    <div className="text-node" onClick={() => setEditNodeId(id)}>
      <div className="text-node-navbar">Navbar</div>
      <div className="text-node-content">{data.prompt}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
