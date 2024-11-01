import React from "react";
import EfoRiro from "../Assets/Images/Efo.webp";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

const RecipeCard = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <>
      <div className="pb-5 w-72 rounded-t-2xl shadow-xl">
        <img
          src={strMealThumb}
          alt=""
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="flex flex-col mt-4 space-y-3 w-[90%] mx-auto">
          <p className="font-medium text-lg line-clamp-1">{strMeal}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center space-x-2">
              <FaStar className="text-2xl text-[red]" />
              <p className="text-sm opacity-70">4.7</p>
            </div>
            <Link
              to={`/recipie/${idMeal}`}
              className="bg-primary text-white px-4 py-2 rounded-2xl"
            >
              <GoChevronRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
