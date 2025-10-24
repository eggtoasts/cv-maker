import { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
import ExperienceForm from "./ExperienceForm";
import EditExperienceForm from "./EditExperienceForm";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

export default function ExperienceSection({
  expData,
  addExpData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editExpData,
  editSpecificExpDataProperty,
  deleteExp,
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
        <button
          className="add-button"
          type="button"
          onClick={() => setForm("exp")}
        >
          <Icon path={mdiPlus} size={1} />
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
              editSpecificExpDataProperty={editSpecificExpDataProperty}
              deleteExp={deleteExp}
            />
          );
        } else {
          return <ExpItem key={item.id} item={item} />;
        }
      })}
    </form>
  );
}
