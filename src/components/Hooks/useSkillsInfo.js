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

  return {
    skillsInfo,
    addSkill,
  };
}
