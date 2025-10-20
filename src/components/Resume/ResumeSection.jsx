import Resume from "./Resume";

function ResumeSection({ generalInfo }) {
  return (
    <div className="resume-section">
      <Resume generalInfo={generalInfo} />
    </div>
  );
}

export default ResumeSection;
