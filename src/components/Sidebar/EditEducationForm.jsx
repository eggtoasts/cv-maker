import InputField from "./InputField";
import { useState } from "react";

function EditEducationForm({
  item,
  editEduData,
  changeCurrentEditId,
  eduData,
  editSpecificEduDataProperty,
}) {
  const index = eduData.findIndex((it) => it.id === item.id);

  const [originalData] = useState({ ...item });

  return (
    <div className="school-form">
      <InputField
        label="University Name"
        name="universityName"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        index={index}
      />

      <InputField
        label="Degree"
        name="degree"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        index={index}
      />

      <InputField
        label="Field of Study"
        name="field"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        index={index}
      />

      <InputField
        label="Location"
        name="location"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        index={index}
      />

      <InputField
        label="Start Date"
        name="startDate"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        type="month"
        index={index}
      />

      <InputField
        label="End Date"
        name="endDate"
        generalInfo={item}
        updateGeneralInfo={editSpecificEduDataProperty}
        type="month"
        index={index}
      />

      <div className="button-wrapper">
        <button
          className="submit-school cancel"
          type="button"
          onClick={() => {
            editEduData(originalData, index);
            changeCurrentEditId(null);
          }}
        >
          Cancel
        </button>
        <button
          className="submit-school submit"
          type="button"
          onClick={() => {
            editEduData(item, index);
            changeCurrentEditId(null);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditEducationForm;
