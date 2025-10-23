function TextField({
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
      <textarea
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

export default TextField;
