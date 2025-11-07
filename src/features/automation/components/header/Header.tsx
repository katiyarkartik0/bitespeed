import useHeader from "../../hooks/useHeader";

import "./Header.css";

export default function Header() {
  const { handleSave, canSave } = useHeader();
  return (
    <div className="header">
      <div className="header-right">
        <div>
          {!canSave && <div className="header-errorMsg">Cannot save flow</div>}
        </div>
        <button className="savebtn" onClick={handleSave}>
          Save changes
        </button>
      </div>
    </div>
  );
}
