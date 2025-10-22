function SchoolCard({ itemInfo }) {
  const { universityName, degree, field, startDate, endDate } = itemInfo;

  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="school-title title">{universityName}</div>
        <div className="school-address">Orlando, FL</div>
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
