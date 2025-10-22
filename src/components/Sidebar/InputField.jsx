function InputField({ label, name, generalInfo, updateGeneralInfo, type }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type || "text"}
        name={name}
        value={generalInfo[name]}
        onChange={(e) => updateGeneralInfo(e)}
      />
    </div>
  );
}

export default InputField;

//  <div className="input-field">
//           <label>End Date</label>
//           <input
//             type= {type}
//             name= {name}
//             value={formData[name]}
//             onChange={(e) => func(e)}
//           />
//         </div>
