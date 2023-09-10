import React from "react";

const ourCategories = [
  {
    id: 1,
    name: "Medicine",
    image: "/assets/medicine.svg",
  },
  {
    id: 2,
    name: "Vitamins",
    image: "/assets/vitamins.svg",
  },
  {
    id: 3,
    name: "Moms & Babies",
    image: "/assets/moms-babies.svg",
  },
  {
    id: 4,
    name: "Fitness & Diet",
    image: "/assets/fitness-nutrition.svg",
  },
];

const OurCategories = () => {
  return (
    <div>
      <div className="container flex flex-col gap-16">
        <div>
          <h2 className="h2">Our Categories</h2>
        </div>
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            "
        >
          {ourCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#CFC4E7] aspect-square rounded-lg py-8 px-4 flex flex-col justify-center items-center gap-8"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <h3 className="h3">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
