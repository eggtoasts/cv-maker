import SkillItem from "./SkillItem";

function SkillInfo() {
  return (
    <div className="section skill">
      <div className="section-title">Skills</div>
      <div className="skills-container">
        <SkillItem />
        <SkillItem />
      </div>
    </div>
  );
}

export default SkillInfo;
