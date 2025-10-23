import InputField from "./InputField";
import { useState } from "react";

function EducationForm({ addEduData, setForm }) {
  const [formData, setFormData] = useState({
    universityName: "",
    degree: "",
    field: "",
    location: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const changeFormData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    return;
  };

  return (
    <div className="school-form">
      <InputField
        label="University Name"
        name="universityName"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Degree"
        name="degree"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Field of Study"
        name="field"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Location"
        name="location"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Start Date"
        name="startDate"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
        type="month"
      />

      <InputField
        label="End Date"
        name="endDate"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
        type="month"
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
            addEduData(formData);
            setForm("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EducationForm;
