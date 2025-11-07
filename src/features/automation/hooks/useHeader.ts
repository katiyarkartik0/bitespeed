import { useSelectedNode } from "../../../shared/hooks/useSelectedNode";

export default function useHeader() {
  const { setSelectedNode } = useSelectedNode();
  const closeSettings = () => setSelectedNode(null);
  return { closeSettings };
}