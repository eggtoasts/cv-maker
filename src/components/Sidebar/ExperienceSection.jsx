import { useState } from "react";
import InputField from "./InputField";
import TextField from "./TextField";
import ExperienceForm from "./ExperienceForm";
export default function ExperienceSection({ addExpData, setForm, newForm }) {
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
    </form>
  );
}
