import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import { edu, experience, skills } from "./Data/data";

function MainContent() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [eduData, setEduData] = useState(edu);

  const updateGeneralInfo = (key, value) => {
    setGeneralInfo((prev) => ({
      ...prev,
      [key]: value,
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
