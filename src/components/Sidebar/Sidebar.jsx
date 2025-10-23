import { useState } from "react";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";

function Sidebar({
  generalInfo,
  updateGeneralInfo,
  eduData,
  addEduData,
  editEduData,
  editSpecificEduDataProperty,
}) {
  const [newForm, setNewForm] = useState("");
  const [currentEditingId, setCurrentEditingId] = useState(null);

  const setForm = function (type) {
    if (currentEditingId != null) return;
    if (newForm === type) {
      setNewForm("");
      return;
    }
    setNewForm(type);
  };

  const changeCurrentEditId = function (id) {
    if (newForm != "") return;
    const currentId = id;
    setCurrentEditingId(currentId);
  };

  return (
    <div className="sidebar">
      <div className="options">
        <button className="main"> </button>
        <button className="settings"></button>
      </div>

      <GeneralSection
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />

      <EducationSection
        addEduData={addEduData}
        eduData={eduData}
        setForm={setForm}
        newForm={newForm}
        currentEditingId={currentEditingId}
        changeCurrentEditId={changeCurrentEditId}
        editEduData={editEduData}
        editSpecificEduDataProperty={editSpecificEduDataProperty}
      />

      <form className="sidebar-item">
        <div className="sidebar-title">
          Skills <button type="button">+</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
