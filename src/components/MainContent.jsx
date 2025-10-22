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

  const editEduData = (formData, item) => {
    const { universityName, degree, location, field, startDate, endDate, id } =
      formData;

    const currid = item.id;

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
    newEduData = newEduData.map((item) =>
      item.id === currid ? newItem : item
    );
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
    console.log(eduData);
  };

  return (
    <div className="main-content">
      <Sidebar
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
        eduData={eduData}
        updateEduData={updateEduData}
        editEduData={editEduData}
      />
      <ResumeSection generalInfo={generalInfo} eduData={eduData} />
    </div>
  );
}

export default MainContent;
