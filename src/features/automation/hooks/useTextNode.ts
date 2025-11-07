import { useNodes } from "../../../shared/hooks/useNodes";
import { useSelectedNode } from "../../../shared/hooks/useSelectedNode";

export default function useTextNode() {
  const { nodes } = useNodes();
  const { setSelectedNode } = useSelectedNode();

  const handleClick = (id: string) => {
    const selectedNode = nodes.find((node) => node.id === id) || null;
    setSelectedNode(selectedNode);
  };
  return { handleClick };
}
