function WorkCard({ itemInfo }) {
  const {
    position,
    companyName,
    location,
    startDate,
    endDate,
    description,
    id,
  } = itemInfo;
  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="job-title title">{position}</div>
        <div className="job-address">{location}</div>
      </div>
      <div className="section-sub-info">
        <div className="left-info">{companyName}</div>
        <div className="right-info">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default WorkCard;
