import InputField from "./InputField";
import { useState } from "react";

function EducationSection({
  updateEduData,
  eduData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editEduData,
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
          updateEduData={updateEduData}
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

function EditEducationForm({ item, editEduData, changeCurrentEditId }) {
  const [formData, setFormData] = useState(item);

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
            changeCurrentEditId("null");
          }}
        >
          Cancel
        </button>
        <button
          className="submit-school submit"
          type="button"
          onClick={() => {
            editEduData(formData, item);
            changeCurrentEditId("null");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function EducationForm({ updateEduData, setForm }) {
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
            updateEduData(formData);
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
  updateEduData,
  editEduData,
}) {
  const [newForm, setNewForm] = useState("");
  const [currentEditingId, setCurrentEditingId] = useState(null);
  const setForm = function (type) {
    if (newForm === type) {
      setNewForm("");
      return;
    }
    setNewForm(type);
  };

  const changeCurrentEditId = function (id) {
    console.log(id);
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
        updateEduData={updateEduData}
        eduData={eduData}
        setForm={setForm}
        newForm={newForm}
        currentEditingId={currentEditingId}
        changeCurrentEditId={changeCurrentEditId}
        editEduData={editEduData}
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
