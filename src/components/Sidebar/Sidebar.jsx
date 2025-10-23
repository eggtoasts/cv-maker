import InputField from "./InputField";
import { useState } from "react";

function EducationSection({
  addEduData,
  eduData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editEduData,
  editSpecificEduDataProperty,
}) {
  function EduItem({ item }) {
    return (
      <div
        className="edu-item"
        key={item.id}
        onClick={(e) => changeCurrentEditId(item.id)}
      >
        <div className="title">{item.universityName}</div>
        <div className="description">
          {item.startDate} - {item.endDate}
        </div>
      </div>
    );
  }

  return (
    <form className="sidebar-item">
      <div className="sidebar-title">
        Education
        <button type="button" onClick={() => setForm("edu")}>
          +
        </button>
      </div>

      {newForm === "edu" && (
        <EducationForm
          addEduData={addEduData}
          eduData={eduData}
          setForm={setForm}
        />
      )}

      {eduData.map((item) => {
        if (currentEditingId === item.id) {
          return (
            <EditEducationForm
              item={item}
              editEduData={editEduData}
              changeCurrentEditId={changeCurrentEditId}
              eduData={eduData}
              setEduData={addEduData}
              editSpecificEduDataProperty={editSpecificEduDataProperty}
            />
          );
        } else {
          return <EduItem item={item} />;
        }
      })}
    </form>
  );
}

function GeneralSection({ generalInfo, updateGeneralInfo }) {
  return (
    <form className="sidebar-item">
      <div className="sidebar-title"> General Information</div>

      <InputField
        label="Full Name"
        name="name"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <InputField
        label="Phone"
        name="phone"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />

      <InputField
        label="Email Address"
        name="email"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <InputField
        label="Address"
        name="address"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
    </form>
  );
}

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

function Sidebar({
  generalInfo,
  updateGeneralInfo,
  eduData,
  addEduData,
  editEduData,
  editSpecificEduDataProperty,
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
        addEduData={addEduData}
        eduData={eduData}
        setForm={setForm}
        newForm={newForm}
        currentEditingId={currentEditingId}
        changeCurrentEditId={changeCurrentEditId}
        editEduData={editEduData}
        editSpecificEduDataProperty={editSpecificEduDataProperty}
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
