import { useNodes } from "../../../../shared/hooks/useNodes";
import "./Navbar.css";

export default function Navbar() {
  const { setSelectedNode } = useNodes();
  const closeSettings = () => setSelectedNode(null);
  return (
    <div className="navbar">
      <button className="savebtn" onClick={closeSettings}>
        Save changes
      </button>
    </div>
  );
}
