function InputField({
  label,
  name,
  generalInfo,
  updateGeneralInfo,
  type,
  index,
}) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type || "text"}
        name={name}
        value={generalInfo[name]}
        onChange={(e) => {
          if (index != undefined) return updateGeneralInfo(e, index);
          return updateGeneralInfo(e);
        }}
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
