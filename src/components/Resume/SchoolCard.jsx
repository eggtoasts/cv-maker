function SchoolCard({ itemInfo }) {
  const { universityName, degree, location, field, startDate, endDate } =
    itemInfo;

  console.log(itemInfo);
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
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
