import Resume from "./Resume";

function ResumeSection({ generalInfo, eduData }) {
  return (
    <div className="resume-section">
      <Resume generalInfo={generalInfo} eduData={eduData} />
    </div>
  );
}

export default ResumeSection;
