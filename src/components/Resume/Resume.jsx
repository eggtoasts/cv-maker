import GeneralInfo from "./GeneralInfo";
import SchoolInfo from "./SchoolInfo";
import WorkInfo from "./WorkInfo";
import SkillInfo from "./SkillInfo";

function Resume({ generalInfo, eduData, expData }) {
  return (
    <div className="resume">
      <GeneralInfo generalInfo={generalInfo} />
      <SchoolInfo eduData={eduData} />
      <WorkInfo expData={expData} />
      <SkillInfo />
    </div>
  );
}

export default Resume;
