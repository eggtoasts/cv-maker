import InputField from "./InputField";

function GeneralSection({ generalInfo, updateGeneralInfo }) {
  return (
    <form className="sidebar-item">
      <div className="sidebar-title"> General Information</div>

      <InputField
        label="Full Name"
        name="name"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <InputField
        label="Phone"
        name="phone"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <InputField
        label="Email Address"
        name="email"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <InputField
        label="Address"
        name="address"
        generalInfo={generalInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
    </form>
  );
}

export default GeneralSection;
