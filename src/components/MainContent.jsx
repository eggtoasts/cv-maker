import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import { education, experience, skills, gen } from "./Data/data";
import useGeneralInfo from "./Hooks/useGeneralInfo";

function MainContent() {
  const { generalInfo, updateGeneralInfo } = useGeneralInfo();

  const [eduData, setEduData] = useState(education);

  const [expData, setExpData] = useState(experience);

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

  const editSpecificExpDataProperty = (e, index) => {
    const { name, value } = e.target;

    let newExpData = [...expData];

    newExpData[index][name] = value;

    setExpData(newExpData);
  };

  const editExpData = (formData, index) => {
    const {
      position,
      companyName,
      location,
      startDate,
      endDate,
      description,
      id,
    } = formData;

    console.log(formData);

    const newItem = {
      position: position,
      companyName: companyName,
      location: location,
      startDate: startDate,
      endDate: endDate,
      description: description,
      id: id,
    };

    let newExpData = [...expData];
    newExpData[index] = newItem;
    setExpData(newExpData);
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
