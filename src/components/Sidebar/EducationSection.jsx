import EducationForm from "./EducationForm";
import EditEducationForm from "./EditEducationForm";

function EducationSection({
  addEduData,
  eduData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editEduData,
  editSpecificEduDataProperty,
}) {
  function EduItem({ item }) {
    return (
      <div
        className="edu-item"
        key={item.id}
        onClick={(e) => changeCurrentEditId(item.id)}
      >
        <div className="title">{item.universityName}</div>
        <div className="description">
          {item.startDate} - {item.endDate}
        </div>
      </div>
    );
  }

  return (
    <form className="sidebar-item">
      <div className="sidebar-title">
        Education
        <button type="button" onClick={() => setForm("edu")}>
          +
        </button>
      </div>

      {newForm === "edu" && (
        <EducationForm
          addEduData={addEduData}
          eduData={eduData}
          setForm={setForm}
        />
      )}

      {eduData.map((item) => {
        if (currentEditingId === item.id) {
          return (
            <EditEducationForm
              key={item.id}
              item={item}
              editEduData={editEduData}
              changeCurrentEditId={changeCurrentEditId}
              eduData={eduData}
              editSpecificEduDataProperty={editSpecificEduDataProperty}
            />
          );
        } else {
          return <EduItem key={item.id} item={item} />;
        }
      })}
    </form>
  );
}

export default EducationSection;
