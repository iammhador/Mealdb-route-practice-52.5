import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const {
    strMeal,
    strArea,
    strInstructions,
    strCategory,
    idMeal,
    strMealThumb,
  } = meal;
  // const nevigate = useNavigate();
  // const handleNavigate = () => {
  //   nevigate(`./meal/${idMeal}`);
  // };
  return (
    <div>
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-5 mb-5">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src={strMealThumb}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {strMeal} ( {strArea} )
          </h5>
          <p class="text-sm font-bold text-gray-900 dark:text-gray-300 my-3">
            {strInstructions.slice(0, 160)}
          </p>

          <div class="flex justify-between items-center">
            <span class="text-xm font-bold text-gray-900 dark:text-gray-400">
              {strCategory ? strCategory : "Not Found"}
            </span>
            <Link
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to={`../meal/${idMeal}`}
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
