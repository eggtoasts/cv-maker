import InputField from "./InputField";
import TextField from "./TextField";
import { useState } from "react";

function EditExperienceForm({
  item,
  editExpData,
  changeCurrentEditId,
  expData,
  editSpecificExpDataProperty,
}) {
  const index = expData.findIndex((it) => it.id === item.id);

  const [originalData] = useState({ ...item });

  return (
    <div className="school-form">
      <InputField
        label="Position"
        name="position"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        index={index}
      />

      <InputField
        label="Company Name"
        name="companyName"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        index={index}
      />

      <InputField
        label="Location"
        name="location"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        index={index}
      />

      <TextField
        label="Description"
        name="description"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        index={index}
      />

      <InputField
        label="Start Date"
        name="startDate"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        type="month"
        index={index}
      />

      <InputField
        label="End Date"
        name="endDate"
        generalInfo={item}
        updateGeneralInfo={editSpecificExpDataProperty}
        type="month"
        index={index}
      />

      <div className="button-wrapper">
        <button
          className="submit-exp cancel"
          type="button"
          onClick={() => {
            editExpData(originalData, index);
            changeCurrentEditId(null);
          }}
        >
          Cancel
        </button>
        <button
          className="submit-exp submit"
          type="button"
          onClick={() => {
            editExpData(item, index);
            changeCurrentEditId(null);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditExperienceForm;
