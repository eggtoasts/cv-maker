import SkillItem from "./SkillItem";

function SkillInfo({ skillsInfo }) {
  return (
    <div className="section skill">
      <div className="section-title">Skills</div>
      <div className="skills-container">
        {skillsInfo.map((item) => (
          <SkillItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default SkillInfo;
