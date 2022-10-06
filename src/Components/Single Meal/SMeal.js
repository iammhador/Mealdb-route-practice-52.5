import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleMealShow from "../SingleMealShow/SingleMealShow";
const SMeal = () => {
  const meals = useLoaderData().meals;

  return (
    <div>
      {meals.map((meal) => (
        <SingleMealShow meal={meal}></SingleMealShow>
      ))}
    </div>
  );
};

export default SMeal;
