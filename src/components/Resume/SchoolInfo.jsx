import SchoolCard from "./SchoolCard";

function SchoolInfo({ eduData }) {
  return (
    <div className="section">
      <div className="section-title school">Education</div>

      {eduData.map((itemInfo) => {
        return <SchoolCard itemInfo={itemInfo} />;
      })}
    </div>
  );
}

export default SchoolInfo;
