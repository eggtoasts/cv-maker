import { useState } from "react";

import { skills } from "../Data/data";

export default function useSkillsInfo() {
  const [skillsInfo, setSkillsInfo] = useState(skills);
  const updateSkillsInfo = (e) => {
    const { name, value } = e.target;
    setSkillsInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = (e) => {
    setSkillsInfo((prev) => [
      ...prev,
      {
        skill: e.value,
        id: crypto.randomUUID(),
      },
    ]);
  };

  return {
    skillsInfo,
    updateSkillsInfo,
  };
}
