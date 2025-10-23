import { useState } from "react";
import { education } from "../Data/data";

export default function useEducationData() {
  const [eduData, setEduData] = useState(education);

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

  return { eduData, editSpecificEduDataProperty, editEduData, addEduData };
}
