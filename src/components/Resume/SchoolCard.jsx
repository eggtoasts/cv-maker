import { conv } from "../Data/data";
function SchoolCard({ itemInfo }) {
  const { universityName, degree, location, field, startDate, endDate } =
    itemInfo;
  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="school-title title">{universityName}</div>
        <div className="school-address">{location}</div>
      </div>

      <div className="section-sub-info">
        <div className="degree-info">
          {degree} in {field}
        </div>
        <div className="year-info">
          {conv(startDate)} - {conv(endDate)}
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
