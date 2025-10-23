import Resume from "./Resume";

function ResumeSection({ generalInfo, eduData, expData, skillsInfo }) {
  return (
    <div className="resume-section">
      <Resume
        generalInfo={generalInfo}
        eduData={eduData}
        expData={expData}
        skillsInfo={skillsInfo}
      />
    </div>
  );
}

export default ResumeSection;
