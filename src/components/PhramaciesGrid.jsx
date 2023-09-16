import React from "react";
import PhramacyCard from "./PhramacyCard";
import { PHARMACIES_DATA } from "../data/pharmacies";

const PhramaciesGrid = () => {
  return (
    <div>
      <div className="container flex flex-col gap-16 py-16">
        <div>
          <h2 className="h2">Let's find your pharmacy</h2>
        </div>
        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
            gap-8"
        >
          {PHARMACIES_DATA.map((pharmacy) => (
            <PhramacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhramaciesGrid;
