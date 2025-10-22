import InputField from "./InputField";
import { useState } from "react";

function EducationForm({ updateEduData, eduData }) {
  const [formData, setFormData] = useState({
    universityName: "",
    degree: "",
    field: "",
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
      <div className="input-field">
        <label>University Name</label>
        <input
          type="text"
          name="universityName"
          value={formData.universityName}
          onChange={(e) => changeFormData(e)}
        />
      </div>

      <div className="input-field">
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={(e) => changeFormData(e)}
        />
      </div>

      <div className="input-field">
        <label>Field of Study</label>
        <input
          type="text"
          name="field"
          value={formData.field}
          onChange={(e) => changeFormData(e)}
        />
      </div>

      <div className="input-field">
        <label>Start Date</label>
        <input
          type="month"
          name="startDate"
          value={formData.startDate}
          onChange={(e) => changeFormData(e)}
        />

        <div className="input-field">
          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            value={formData.endDate}
            onChange={(e) => changeFormData(e)}
          />
        </div>
        <div className="button-wrapper">
          <button className="submit-school cancel" type="button">
            Cancel
          </button>
          <button
            className="submit-school submit"
            type="button"
            onClick={() => {
              updateEduData(formData);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ generalInfo, updateGeneralInfo, eduData, updateEduData }) {
  const [newForm, setNewForm] = useState("");
  const setForm = function (type) {
    if (newForm === type) {
      setNewForm("");
      return;
    }
    setNewForm(type);
  };
  return (
    <div className="sidebar">
      <div className="options">
        <button className="main"> </button>
        <button className="settings"></button>
      </div>

      <form className="sidebar-item">
        <div className="sidebar-title"> General Information</div>

        <InputField
          label="Full Name"
          propKey="name"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Phone"
          propKey="phone"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Email Address"
          propKey="email"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Address"
          propKey="address"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Education
          <button type="button" onClick={() => setForm("edu")}>
            +
          </button>
        </div>
        {newForm === "edu" && (
          <EducationForm updateEduData={updateEduData} eduData={eduData} />
        )}
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Skills <button type="button">+</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
