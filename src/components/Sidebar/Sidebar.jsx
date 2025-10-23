import { useState } from "react";
import GeneralSection from "./GeneralSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function Sidebar({
  generalInfo,
  updateGeneralInfo,
  eduData,
  addEduData,
  editEduData,
  editSpecificEduDataProperty,
  expData,
  addExpData,
  editExpData,
  editSpecificExpDataProperty,
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
        eduData={eduData}
        addEduData={addEduData}
        setForm={setForm}
        newForm={newForm}
        currentEditingId={currentEditingId}
        changeCurrentEditId={changeCurrentEditId}
        editEduData={editEduData}
        editSpecificEduDataProperty={editSpecificEduDataProperty}
      />

      <ExperienceSection
        expData={expData}
        addExpData={addExpData}
        setForm={setForm}
        newForm={newForm}
        currentEditingId={currentEditingId}
        changeCurrentEditId={changeCurrentEditId}
        editExpData={editExpData}
        editSpecificExpDataProperty={editSpecificExpDataProperty}
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
