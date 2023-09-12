import React from "react";
import PhramacyCard from "./PhramacyCard";

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
          justify-items-center
          align-items-center
            gap-8"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((drug, index) => (
            <PhramacyCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhramaciesGrid;
