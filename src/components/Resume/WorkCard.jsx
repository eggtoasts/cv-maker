import { conv } from "../Data/data";
import { useEffect, useState } from "react";
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
  const bulletPoints = description.split("\n");

  return (
    <div className="card">
      <div className="section-sub-info main">
        <div className="job-title title">{position}</div>
        <div className="job-address">{location}</div>
      </div>
      <div className="section-sub-info">
        <div className="left-info">{companyName}</div>
        <div className="right-info">
          {conv(startDate)} - {conv(endDate)}
        </div>
      </div>
      <div className="description">
        {bulletPoints.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default WorkCard;
