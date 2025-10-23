import { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
export default function ExperienceForm({ addExpData, setForm }) {
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
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    return;
  };
  return (
    <div className="exp-form">
      <InputField
        label="Position"
        name="position"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Company Name"
        name="companyName"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <InputField
        label="Location"
        name="location"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
      />

      <TextField
        label="Description"
        name="description"
        generalInfo={formData}
        updateGeneralInfo={changeFormData}
        type="textarea"
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
            addExpData(formData);
            setForm("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
