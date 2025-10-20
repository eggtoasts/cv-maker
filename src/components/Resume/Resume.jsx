import GeneralInfo from "./GeneralInfo";
import SchoolInfo from "./SchoolInfo";
import WorkInfo from "./WorkInfo";
import SkillInfo from "./SkillInfo";

function Resume({ generalInfo }) {
  return (
    <div className="resume">
      <GeneralInfo generalInfo={generalInfo} />
      <SchoolInfo />
      <WorkInfo />
      <SkillInfo />
    </div>
  );
}

export default Resume;
