import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MainContent() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const updateGeneralInfo = (key, value) => {
    setGeneralInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="main-content">
        <Sidebar
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <ResumeSection generalInfo={generalInfo} />
      </div>
    </>
  );
}

function GeneralInfo({ generalInfo }) {
  const { name, phone, email, address } = generalInfo;

  const gen = [phone, email, address];

  return (
    <div className="general section">
      <h1>{name}</h1>
      <div className="section-sub-info gen">
        {gen.map((g) => (g ? <h3>{g}</h3> : null))}
      </div>
    </div>
  );
}

function SchoolCard() {
  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="school-title title">University Name</div>
        <div className="school-address">Orlando, FL</div>
      </div>

      <div className="section-sub-info">
        <div className="degree-info">Major Type Degree Type</div>

        <div className="year-info">Year - Year</div>
      </div>
    </div>
  );
}

function SchoolInfo() {
  return (
    <div className="section">
      <div className="section-title school">Education</div>
      <SchoolCard />
      <SchoolCard />
    </div>
  );
}

function BulletPoint() {}

function WorkCard() {
  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="job-title title">Designer</div>
        <div className="job-address">Alafaya, FL</div>
      </div>
      <div className="section-sub-info">
        <div className="left-info">Work Title</div>

        <div className="right-info">Year - Year</div>
      </div>

      <div className="descriptions">
        <div className="bullet-item">Designed ...</div>

        <div className="bullet-item">Developed ...</div>
      </div>
    </div>
  );
}
function WorkInfo() {
  return (
    <div className="section">
      <div className="section-title">Experience</div>
      <WorkCard />
      <WorkCard />
    </div>
  );
}

function SkillItem() {
  return <div className="skill-item">C++</div>;
}

function SkillInfo() {
  return (
    <div className="section skill">
      <div className="section-title">Skills</div>
      <div className="skills-container">
        <SkillItem />
        <SkillItem />
      </div>
    </div>
  );
}

function Resume({ generalInfo }) {
  return (
    <div className="resume">
      <GeneralInfo generalInfo={generalInfo} />
      <SchoolInfo />
      <WorkInfo />
      <SkillInfo />
    </div>
  );
}

function ResumeSection({ generalInfo }) {
  return (
    <div className="resume-section">
      <Resume generalInfo={generalInfo} />
    </div>
  );
}

function InputField({ label, propKey, generalInfo, updateGeneralInfo }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        value={generalInfo[propKey]}
        onChange={(e) => updateGeneralInfo(propKey, e.target.value)}
      />
    </div>
  );
}

function Sidebar({ generalInfo, updateGeneralInfo }) {
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
          Education <button> v</button>
        </div>
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Experience
          <button> v</button>
        </div>
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Skills
          <button> v</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
