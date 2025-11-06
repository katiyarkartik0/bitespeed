import "./Navbar.css";

export default function Navbar({
  setEditNodeId,
}: {
  setEditNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div className="navbar">
      <button className="savebtn" onClick={() => setEditNodeId(null)}>
        Save changes
      </button>
    </div>
  );
}
