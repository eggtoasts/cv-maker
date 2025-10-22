function GeneralInfo({ generalInfo }) {
  const { name, phone, email, address } = generalInfo;
  const gen = [phone, email, address];

  return (
    <div className="general section">
      <h1 class="name">{name}</h1>
      <div className="section-sub-info gen">
        {gen.map((g, i) => g && <h3 key={i}>{g}</h3>)}
      </div>
    </div>
  );
}

export default GeneralInfo;
