import SkillsForm from "./SkillsForm";
import EditSkillsForm from "./EditSkillsForm";
export default function SkillsSection({
  skillsInfo,
  addSkill,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editSkillName,
  editSkillData,
  deleteSkill,
}) {
  function SkillItem({ item }) {
    return (
      <div
        className="exp-item"
        key={item.id}
        onClick={(e) => changeCurrentEditId(item.id)}
      >
        <div className="title">{item.skill}</div>
      </div>
    );
  }
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

      {skillsInfo.map((item) => {
        if (currentEditingId === item.id) {
          return (
            <EditSkillsForm
              key={item.id}
              item={item}
              editSkillName={editSkillName}
              editSkillData={editSkillData}
              changeCurrentEditId={changeCurrentEditId}
              skillsInfo={skillsInfo}
              deleteSkill={deleteSkill}
            />
          );
        } else {
          return <SkillItem key={item.id} item={item} />;
        }
      })}
    </form>
  );
}
