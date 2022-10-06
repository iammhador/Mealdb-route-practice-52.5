import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
const Meals = () => {
  const meals = useLoaderData().meals;
  return (
    <div className="grid lg:grid-cols-3 justify-items-center md:grid-cols-2 xm:grid-cols-1 gap-5 my-5 mx-5 py-5 px-5 ">
      {meals.map((meal) => (
        <Meal meal={meal} key={meal.idMeal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
