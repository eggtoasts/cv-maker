import WorkCard from "./WorkCard";

function WorkInfo({ expData }) {
  return (
    <div className="section">
      <div className="section-title">Experience</div>
      {expData.map((item) => (
        <WorkCard itemInfo={item} />
      ))}
    </div>
  );
}

export default WorkInfo;
