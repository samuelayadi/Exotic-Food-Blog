import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Assets/Images/banner.png";
import Banner2 from "../Assets/Images/Spaghetti.webp";
import CategoryCard from "../Components/CategoryCard";
import { categoryData } from "../Data/categoryData";
import RecipeCard from "../Components/RecipeCard";
import Footer from "../Components/Footer";
import axios from "axios";

const Home = () => {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [popularRecipe, setPopularRecipe] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const res = await axios.get(url);
        console.log(res.data);
        setRecipeCategories(res.data.categories);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    const fetchPopularData = async () => {
      try {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        const res = await axios.get(url);
        console.log(res.data);
        setPopularRecipe(res.data.meals);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPopularData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="gradient h-screen">
        <div className="mx-auto container py-10 px-4 max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex lg:pt-14 text-white flex-col space-y-10 w-full lg:w-1/2">
            <p className="text-3xl lg:text-5xl font-semibold">
              Explore your Culinary Horizon
            </p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              perferendis delectus dolorum! Facere natus consectetur ad commodi
              eaque! Dignissimos eveniet architecto, enim porro nam dolorem unde
              beatae sequi modi aliquid!
            </p>
            <button className="bg-black w-56 py-2 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out">
              Explore Now
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={Banner} alt="" className="object-cover w-full" />
          </div>
        </div>
      </section>

      <section className="mt-16" id="about">
        <div className="flex flex-col mx-auto px-4 container max-w-[1200px] justify-between lg:flex-row-reverse gap-20 lg:items-center">
          <div className="flex flex-col space-y-4 w-full lg:w-1/2">
            <p className="text-2xl font-semibold opacity-85">
              Know More About Us
            </p>
            <p className="opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              perferendis delectus dolorum! Facere natus consectetur ad commodi
              eaque! Dignissimos eveniet architecto, enim porro nam dolorem unde
              beatae sequi modi aliquid! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. At odio nisi laboriosam ratione molestiae
              repellendus rem totam impedit beatae asperiores.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={Banner2}
              alt=""
              className="object-cover rounded-xl h-96 w-full"
            />
          </div>
        </div>
      </section>

      <section
        className="mt-10 w-full h-32 bg-[#FFCDBE]"
        id="category"
      ></section>

      {/* Category Section Starts */}
      <section>
        <div className="flex flex-col my-10 space-y-3 px-4 mx-auto container max-w-[1200px]">
          <p className="text-2xl font-semibold opacity-85">
            Explore Our Categories
          </p>
          <p className="opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            fuga commodi ab sunt ducimus dolorum?
          </p>

          <div className="flex flex-col flex-wrap  gap-x-20 gap-y-5 sm:flex-row">
            {recipeCategories.map((item, index) => (
              <CategoryCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* Category Section Ends  */}

      {/* Popular Section starts */}
      <section className="my-20">
        <div className="mx-auto container px-4 max-w-[1200px] flex flex-col space-y-5">
          <p className="text-2xl font-semibold opacity-85">Popular Recipe</p>
          <div className="flex flex-col gap-x-10 gap-y-5 mx-auto flex-wrap sm:flex-row">
            {popularRecipe.map((item, index) => (
              <RecipeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* Popular Section Ends  */}

      {/* Footer Section start */}
      <Footer />
      {/* Footer Section Ends  */}
    </>
  );
};

export default Home;
