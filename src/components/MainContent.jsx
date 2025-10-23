import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import { education, experience, skills, gen } from "./Data/data";

function MainContent() {
  const [generalInfo, setGeneralInfo] = useState(gen);

  const [eduData, setEduData] = useState(education);

  const [expData, setExpData] = useState(experience);

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

  const addEduData = (formData) => {
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

  const addExpData = (formData) => {
    const { position, companyName, location, startDate, endDate, description } =
      formData;
    let newExpData = [...expData];

    newExpData.push({
      position: position,
      companyName: companyName,
      location: location,
      startDate: startDate,
      endDate: endDate,
      description: description,
      id: crypto.randomUUID(),
    });

    setExpData(newExpData);
  };

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
