import EducationForm from "./EducationForm";
import EditEducationForm from "./EditEducationForm";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

function EducationSection({
  addEduData,
  eduData,
  setForm,
  newForm,
  currentEditingId,
  changeCurrentEditId,
  editEduData,
  editSpecificEduDataProperty,
  deleteEdu,
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
        <button
          className="add-button"
          type="button"
          onClick={() => setForm("edu")}
        >
          <Icon path={mdiPlus} size={1} />
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
              deleteEdu={deleteEdu}
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
