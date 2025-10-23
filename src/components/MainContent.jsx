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

  const editSpecificEduDataProperty = (e, index) => {
    const { name, value } = e.target;

    const newEduData = [...eduData];

    newEduData[index][name] = value;

    setEduData(newEduData);
  };

  const editEduData = (formData, index) => {
    const { universityName, degree, location, field, startDate, endDate, id } =
      formData;

    const newItem = {
      universityName: universityName,
      degree: degree,
      location: location,
      field: field,
      startDate: startDate,
      endDate: endDate,
      id: id,
    };

    let newEduData = [...eduData];
    newEduData[index] = newItem;
    setEduData(newEduData);
  };

  const updateEduData = (formData) => {
    const { universityName, degree, location, field, startDate, endDate } =
      formData;
    let newEduData = [...eduData];
    newEduData.push({
      universityName: universityName,
      degree: degree,
      location: location,
      field: field,
      startDate: startDate,
      endDate: endDate,
      id: crypto.randomUUID(),
    });

    setEduData(newEduData);
  };

  return (
    <div className="main-content">
      <Sidebar
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
        eduData={eduData}
        updateEduData={updateEduData}
        editEduData={editEduData}
        editSpecificEduDataProperty={editSpecificEduDataProperty}
      />
      <ResumeSection generalInfo={generalInfo} eduData={eduData} />
    </div>
  );
}

export default MainContent;
