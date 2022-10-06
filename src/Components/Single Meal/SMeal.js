import React from "react";
import { useLoaderData } from "react-router-dom";
const SMeal = () => {
  const data = useLoaderData().meals[0];
  console.log(data);
  const { strMeal, strArea, strCategory, strInstructions, strMealThumb } = data;
  return (
    <div className="w-3/5 mx-auto my-5">
      <a href="#" className="block overflow-hidden rounded-2xl">
        <img
          alt="Office"
          src={strMealThumb}
          className="h-96 w-full object-cover"
        />

        <div className="bg-gray-900 p-4">
          <p className="text-xs text-gray-500">{strCategory}</p>

          <h5 className="text-sm text-white">
            {strMeal} {strArea}
          </h5>

          <p className="mt-1 text-xs text-gray-500">{strInstructions}</p>
        </div>
      </a>
    </div>
  );
};

export default SMeal;
