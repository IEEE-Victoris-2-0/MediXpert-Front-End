import React from "react";
import DrugCard from "./DrugCard";

const DrugsGrid = () => {
  return (
    <div>
      <div className="container flex flex-col gap-16 py-16">
        <div>
          <h2 className="h2">Most Searched</h2>
        </div>
        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
            gap-8"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((drug, index) => (
            <DrugCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrugsGrid;
