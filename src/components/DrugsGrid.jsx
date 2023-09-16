import React from "react";
import DrugCard from "./DrugCard";
import { DRUGS_DATA } from "../data/drugs";

const DrugsGrid = ({ title }) => {
  return (
    <div>
      <div className="container flex flex-col gap-16 py-16">
        <div>
          <h2 className="h2">{title}</h2>
        </div>
        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
            gap-8"
        >
          {DRUGS_DATA.map((drug, index) => (
            <DrugCard key={index} drug={drug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrugsGrid;
