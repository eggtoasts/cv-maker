import { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
import ExperienceForm from "./ExperienceForm";
import EditExperienceForm from "./EditExperienceForm";
export default function ExperienceSection({
  expData,
  addExpData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editExpData,
  editSpecificExpDataProperty,
}) {
  function ExpItem({ item }) {
    return (
      <div
        className="exp-item"
        key={item.id}
        onClick={(e) => changeCurrentEditId(item.id)}
      >
        <div className="title">{item.companyName}</div>
        <div className="description">
          {item.startDate} - {item.endDate}
        </div>
      </div>
    );
  }

  return (
    <form className="sidebar-item">
      <div className="sidebar-title">
        Experience{" "}
        <button type="button" onClick={() => setForm("exp")}>
          +
        </button>
      </div>

      {newForm === "exp" && (
        <ExperienceForm addExpData={addExpData} setForm={setForm} />
      )}

      {expData.map((item) => {
        if (currentEditingId === item.id) {
          return (
            <EditExperienceForm
              key={item.id}
              item={item}
              editExpData={editExpData}
              changeCurrentEditId={changeCurrentEditId}
              expData={expData}
              setEduData={addExpData}
              editSpecificExpDataProperty={editSpecificExpDataProperty}
            />
          );
        } else {
          return <ExpItem key={item.id} item={item} />;
        }
      })}
    </form>
  );
}
