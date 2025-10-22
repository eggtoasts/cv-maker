import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import { edu, experience, skills, gen } from "./Data/data";

function MainContent() {
  const [generalInfo, setGeneralInfo] = useState(gen);

  const [eduData, setEduData] = useState(edu);

  const updateGeneralInfo = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateEduData = (formData) => {
    const { universityName, degree, field, startDate, endDate } = formData;
    let newEduData = [...eduData];
    newEduData.push({
      universityName: universityName,
      degree: degree,
      field: field,
      startDate: startDate,
      endDate: endDate,
      id: crypto.randomUUID(),
    });

    setEduData(newEduData);
    console.log(eduData);
  };

  return (
    <div className="main-content">
      <Sidebar
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
        eduData={eduData}
        updateEduData={updateEduData}
      />
      <ResumeSection generalInfo={generalInfo} eduData={eduData} />
    </div>
  );
}

export default MainContent;
