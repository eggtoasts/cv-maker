import { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
export default function SkillsForm({ addSkill, setForm }) {
  const [formData, setFormData] = useState({
    position: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    id: "",
  });

  const changeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    return;
  };

  return (
    <div className="exp-form">
      <InputField
        label="Skill Name"
        name="skill"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <div className="button-wrapper">
        <button
          className="submit-school cancel"
          type="button"
          onClick={() => {
            setForm("");
          }}
        >
          Cancel
        </button>
        <button
          className="submit-school submit"
          type="button"
          onClick={() => {
            addSkill(formData);
            setForm("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
