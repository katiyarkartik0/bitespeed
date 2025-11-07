import useHeader from "../../hooks/useHeader";
import "./Header.css";

export default function Header() {
  const { closeSettings } = useHeader();
  return (
    <div className="header">
      <button className="savebtn" onClick={closeSettings}>
        Save changes
      </button>
    </div>
  );
}
