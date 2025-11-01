import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import useGeneralInfo from "./Hooks/useGeneralInfo";
import useEducationData from "./Hooks/useEducationData";
import useExperienceData from "./Hooks/useExperienceData";
import useSkillsInfo from "./Hooks/useSkillsInfo";

function MainContent() {
  const { generalInfo, updateGeneralInfo } = useGeneralInfo();

  const {
    eduData,
    editSpecificEduDataProperty,
    editEduData,
    addEduData,
    deleteEdu,
  } = useEducationData();

  const {
    expData,
    editExpData,
    editSpecificExpDataProperty,
    addExpData,
    deleteExp,
  } = useExperienceData();

  const { skillsInfo, addSkill, editSkillName, editSkillData, deleteSkill } =
    useSkillsInfo();

  return (
    <>
      <div class="nav">
        <div class="page-title">CV Maker</div>
      </div>
      <div className="main-content">
        <Sidebar
          // general
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
          // education
          eduData={eduData}
          addEduData={addEduData}
          editEduData={editEduData}
          editSpecificEduDataProperty={editSpecificEduDataProperty}
          deleteEdu={deleteEdu}
          //experience
          expData={expData}
          addExpData={addExpData}
          editExpData={editExpData}
          editSpecificExpDataProperty={editSpecificExpDataProperty}
          deleteExp={deleteExp}
          //skills
          skillsInfo={skillsInfo}
          addSkill={addSkill}
          editSkillName={editSkillName}
          editSkillData={editSkillData}
          deleteSkill={deleteSkill}
        />
        <ResumeSection
          generalInfo={generalInfo}
          eduData={eduData}
          expData={expData}
          skillsInfo={skillsInfo}
        />
      </div>
    </>
  );
}

export default MainContent;
