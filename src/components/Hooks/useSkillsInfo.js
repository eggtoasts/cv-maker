import { useState } from "react";

import { skills } from "../Data/data";

export default function useSkillsInfo() {
  const [skillsInfo, setSkillsInfo] = useState(skills);

  const addSkill = (formData) => {
    setSkillsInfo((prev) => [
      ...prev,
      {
        skill: formData.skill,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const editSkillName = (e, index) => {
    const { name, value } = e.target;

    let newSkillData = [...skillsInfo];

    newSkillData[index][name] = value;

    setSkillsInfo(newSkillData);
  };

  const editSkillData = (formData, index) => {
    const { skill, id } = formData;

    const newItem = {
      skill,
      id,
    };

    let newSkillData = [...skillsInfo];
    newSkillData[index] = newItem;
    setSkillsInfo(newSkillData);
  };

  return {
    skillsInfo,
    editSkillName,
    editSkillData,
  };
}
