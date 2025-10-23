import { experience } from "../Data/data";
import { useState } from "react";
export default function useExperienceData() {
  const [expData, setExpData] = useState(experience);

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

  return {
    expData,
    editExpData,
    editSpecificExpDataProperty,
    addExpData,
  };
}
