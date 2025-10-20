import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MainContent() {
  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [location, setLocation] = useState(" ");
  return (
    <>
      <div class="main-content">
        <Sidebar
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          location={location}
          setLocation={setLocation}
        />
        <ResumeSection
          name={name}
          phone={phone}
          address={address}
          location={location}
        />
      </div>
    </>
  );
}

function GeneralInfo({ name, phone, address, location }) {
  return (
    <div class="general section">
      <h1>{name}</h1>
      <div class="section-sub-info gen">
        <h3>{phone}</h3>
        <h3>{address}</h3>
        <h3>{location}</h3>
      </div>
    </div>
  );
}

function SchoolCard() {
  return (
    <div class="card">
      <div class="section-sub-info main">
        <div class="school-title title">University Name</div>
        <div class="school-address">Orlando, FL</div>
      </div>

      <div class="section-sub-info">
        <div class="degree-info">Major Type Degree Type</div>

        <div class="year-info">Year - Year</div>
      </div>
    </div>
  );
}

function SchoolInfo() {
  return (
    <div class="section">
      <div class="section-title school">Education</div>
      <SchoolCard />
      <SchoolCard />
    </div>
  );
}

function BulletPoint() {}

function WorkCard() {
  return (
    <div class="card">
      <div class="section-sub-info main">
        <div class="job-title title">Designer</div>
        <div class="job-address">Alafaya, FL</div>
      </div>
      <div class="section-sub-info">
        <div class="left-info">Work Title</div>

        <div class="right-info">Year - Year</div>
      </div>

      <div class="descriptions">
        <div class="bullet-item">Designed ...</div>

        <div class="bullet-item">Developed ...</div>
      </div>
    </div>
  );
}
function WorkInfo() {
  return (
    <div class="section">
      <div class="section-title">Experience</div>
      <WorkCard />
      <WorkCard />
    </div>
  );
}

function SkillItem() {
  return <div class="skill-item">C++</div>;
}

function SkillInfo() {
  return (
    <div class="section skill">
      <div class="section-title">Skills</div>
      <div class="skills-container">
        <SkillItem />
        <SkillItem />
      </div>
    </div>
  );
}

function Resume({ name, phone, address, location }) {
  return (
    <div class="resume">
      <GeneralInfo
        name={name}
        phone={phone}
        address={address}
        location={location}
      />
      <SchoolInfo />
      <WorkInfo />
      <SkillInfo />
    </div>
  );
}

function ResumeSection({ name, phone, address, location }) {
  return (
    <div class="resume-section">
      <Resume name={name} phone={phone} address={address} location={location} />
    </div>
  );
}

function Sidebar({
  name,
  setName,
  phone,
  setPhone,
  address,
  setAddress,
  location,
  setLocation,
}) {
  return (
    <div class="sidebar">
      <div class="options">
        <button class="main"> </button>
        <button class="settings"></button>
      </div>
      <form class="sidebar-item">
        <div class="sidebar-title"> General Information</div>

        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Address</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>

      <form class="sidebar-item">
        <div class="sidebar-title">
          Education <button> v</button>
        </div>
      </form>

      <form class="sidebar-item">
        <div class="sidebar-title">
          Experience
          <button> v</button>
        </div>
      </form>

      <form class="sidebar-item">
        <div class="sidebar-title">
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
