import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import useGeneralInfo from "./Hooks/useGeneralInfo";
import useEducationData from "./Hooks/useEducationData";
import useExperienceData from "./Hooks/useExperienceData";

function MainContent() {
  const { generalInfo, updateGeneralInfo } = useGeneralInfo();

  const { eduData, editSpecificEduDataProperty, editEduData, addEduData } =
    useEducationData();

  const { expData, editExpData, editSpecificExpDataProperty, addExpData } =
    useExperienceData();

  return (
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
        //experience
        expData={expData}
        addExpData={addExpData}
        editExpData={editExpData}
        editSpecificExpDataProperty={editSpecificExpDataProperty}
      />
      <ResumeSection
        generalInfo={generalInfo}
        eduData={eduData}
        expData={expData}
      />
    </div>
  );
}

export default MainContent;
