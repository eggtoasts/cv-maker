import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResumeSection from "./Resume/ResumeSection";
import { edu, experience, skills } from "./Data/data";

function MainContent() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [eduData, setEduData] = useState(edu);
  console.log(eduData);

  const updateGeneralInfo = (key, value) => {
    setGeneralInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="main-content">
      <Sidebar
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <ResumeSection generalInfo={generalInfo} />
    </div>
  );
}

export default MainContent;
