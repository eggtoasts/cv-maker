import InputField from "./InputField";

function Sidebar({ generalInfo, updateGeneralInfo }) {
  return (
    <div className="sidebar">
      <div className="options">
        <button className="main"> </button>
        <button className="settings"></button>
      </div>

      <form className="sidebar-item">
        <div className="sidebar-title"> General Information</div>

        <InputField
          label="Full Name"
          propKey="name"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Phone"
          propKey="phone"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Email Address"
          propKey="email"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
        <InputField
          label="Address"
          propKey="address"
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
        />
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Education <button>v</button>
        </div>
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Experience <button>v</button>
        </div>
      </form>

      <form className="sidebar-item">
        <div className="sidebar-title">
          Skills <button>v</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
