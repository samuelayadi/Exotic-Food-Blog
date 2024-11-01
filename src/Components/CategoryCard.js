import React from "react";

const CategoryCard = ({ strCategory, strCategoryThumb }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <img
          src={strCategoryThumb}
          alt=""
          className="object-cover w-32 h-32 rounded-full z-10"
        />
        <div className="flex justify-center items-center w-56 py-4 bg-[#FFCDBE] rounded-e-3xl -ml-4 px-6 z-0">
          <p className="text-black font-medium opacity-85 line-clamp-1">
            {strCategory}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
