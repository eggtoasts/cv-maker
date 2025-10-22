import GeneralInfo from "./GeneralInfo";
import SchoolInfo from "./SchoolInfo";
import WorkInfo from "./WorkInfo";
import SkillInfo from "./SkillInfo";

function Resume({ generalInfo, eduData }) {
  return (
    <div className="resume">
      <GeneralInfo generalInfo={generalInfo} />
      <SchoolInfo eduData={eduData} />
      <WorkInfo />
      <SkillInfo />
    </div>
  );
}

export default Resume;
