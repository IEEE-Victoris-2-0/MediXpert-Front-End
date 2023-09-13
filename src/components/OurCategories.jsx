import React from "react";
import { Link } from "react-router-dom";

const ourCategories = [
  {
    id: 1,
    name: "Medicine",
    slug: "medicine",
    image: "/assets/medicine.png",
  },
  {
    id: 2,
    name: "Vitamins",
    slug: "vitamins",
    image: "/assets/vitamins.png",
  },
  {
    id: 3,
    name: "Mom & Baby",
    slug: "mom-baby",
    image: "/assets/moms-babies.png",
  },
  {
    id: 4,
    name: "Fitness & Diet",
    slug: "fitness-diet",
    image: "/assets/fitness-nutrition.png",
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
          className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
            gap-8
            "
        >
          {ourCategories.map((category) => (
            <Link
              to={`/category/${category.slug}`}
              key={category.id}
              className="hover:scale-105 transition-all duration-300 w-full h-full aspect-square"
            >
              <div
                key={category.id}
                className="bg-[#CFC4E7] rounded-lg p-4 flex flex-col w-full h-full justify-center items-center gap-8"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
