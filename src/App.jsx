import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Make this a grid
function MainContent() {
  return (
    <>
      <div class="main-content">
        <Options />
        <Sidebar />
        <ResumeSection />
      </div>
    </>
  );
}

function Options() {
  return <div class="options"></div>;
}

function GeneralInfo() {
  return (
    <div class="general section">
      <h1>Full Name</h1>
      <div class="section-sub-info gen">
        <h3>Email</h3>
        <h3>Phone Number</h3>
        <h3>Address</h3>
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

function SkillCard() {
  return (
    <div class="skill-item">
      <div class="skill">C++</div>
    </div>
  );
}

function SkillInfo() {
  return (
    <div class="section skill">
      <div class="section-title">Skills</div>
      <div class="skills-container">
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div class="resume">
      <GeneralInfo />
      <SchoolInfo />
      <WorkInfo />
      <SkillInfo />
    </div>
  );
}

function ResumeSection() {
  return (
    <div class="resume-section">
      <Resume />
    </div>
  );
}

function Sidebar() {
  return <div class="sidebar"></div>;
}

function App() {
  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
