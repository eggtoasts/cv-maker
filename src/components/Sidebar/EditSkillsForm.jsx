import InputField from "./InputField";
import TextField from "./TextField";
import { useState } from "react";

function EditSkillsForm({
  item,
  editSkillName,
  editSkillData,
  changeCurrentEditId,
  skillsInfo,
  deleteSkill,
}) {
  const index = skillsInfo.findIndex((it) => it.id === item.id);

  const [originalData] = useState({ ...item });

  return (
    <div className="skill-form">
      <InputField
        label="Skill Name"
        name="skill"
        generalInfo={item}
        updateGeneralInfo={editSkillName}
        index={index}
      />

      <div className="button-wrapper">
        <button
          type="button"
          className="delete"
          onClick={() => {
            deleteSkill(item, index);
            changeCurrentEditId(null);
          }}
        >
          Delete
        </button>
        <button
          className="submit-skill cancel"
          type="button"
          onClick={() => {
            editSkillData(originalData, index);
            changeCurrentEditId(null);
          }}
        >
          Cancel
        </button>
        <button
          className="submit-skill submit"
          type="button"
          onClick={() => {
            editSkillData(item, index);
            changeCurrentEditId(null);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditSkillsForm;
