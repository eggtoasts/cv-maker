import Icon from "@mdi/react";
import { mdiPhone, mdiEmail, mdiMapMarker } from "@mdi/js";

function GeneralInfo({ generalInfo }) {
  const { name, phone, email, address } = generalInfo;
  const gen = [phone, email, address];

  function GeneralIcons(g) {
    switch (g) {
      case 0:
        return <Icon className="icon" path={mdiPhone} size={0.7} />;
      case 1:
        return <Icon className="icon" path={mdiEmail} size={0.7} />;
      case 2:
        return <Icon className="icon" path={mdiMapMarker} size={0.7} />;
    }
  }

  return (
    <div className="general section">
      <h1 class="name">{name}</h1>
      <div className="section-sub-info gen">
        {gen.map(
          (g, i) =>
            g && (
              <h3 key={i}>
                {GeneralIcons(i)} {g}
              </h3>
            )
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
