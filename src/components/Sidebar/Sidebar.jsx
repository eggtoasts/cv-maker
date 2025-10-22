import InputField from "./InputField";
import { useState } from "react";

function EducationForm({ updateEduData, eduData }) {
  return (
    <div className="school-form">
      <div className="input-field">
        <label>University Name</label>
        <input type="text" />
      </div>

      <div className="input-field">
        <label>Degree</label>
        <input type="text" />
      </div>

      <div className="input-field">
        <label>Field of Study</label>
        <input type="text" />
      </div>

      <div className="input-field">
        <label>Start Date</label>
        <input type="month" />

        <div className="input-field">
          <label>End Date</label>
          <input type="month" />
        </div>
        <div className="button-wrapper">
          <button className="submit-school cancel" type="button">
            Cancel
          </button>
          <button
            className="submit-school button"
            type="button"
            onClick={() => {
              updateEduData();
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
          Experience{" "}
          <button type="button" onClick={() => setNewForm("edu")}>
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
