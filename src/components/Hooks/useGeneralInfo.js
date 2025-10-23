import { useState } from "react";

import { gen } from "../Data/data";

export default function useGeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState(gen);
  const updateGeneralInfo = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    generalInfo,
    updateGeneralInfo,
  };
}
