import Resume from "./Resume";

function ResumeSection({ generalInfo, eduData, expData }) {
  return (
    <div className="resume-section">
      <Resume generalInfo={generalInfo} eduData={eduData} expData={expData} />
    </div>
  );
}

export default ResumeSection;
