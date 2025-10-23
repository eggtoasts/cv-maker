import SkillsForm from "./SkillsForm";
export default function SkillsSection({
  skillsInfo,
  addSkill,
  setForm,
  newForm,
}) {
  return (
    <form className="sidebar-item">
      <div className="sidebar-title">
        Skills{" "}
        <button type="button" onClick={() => setForm("skills")}>
          +
        </button>
      </div>

      {newForm === "skills" && (
        <SkillsForm addSkill={addSkill} setForm={setForm} />
      )}
    </form>
  );
}
