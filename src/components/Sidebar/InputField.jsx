function InputField({ label, propKey, generalInfo, updateGeneralInfo }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        value={generalInfo[propKey]}
        onChange={(e) => updateGeneralInfo(propKey, e.target.value)}
      />
    </div>
  );
}

export default InputField;
