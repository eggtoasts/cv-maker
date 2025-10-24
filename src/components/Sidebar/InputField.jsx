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
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      />
    </div>
  );
}

export default InputField;
