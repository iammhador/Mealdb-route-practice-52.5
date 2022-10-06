import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Restaurant from "./Components/Restaurant/Restaurant";
import Home from "./Components/Home/Home";
import NF from "./Components/Not Found/NF";
import Main from "./Components/Main/Main";
import Meals from "./Components/Meals/Meals";
import SMeal from "./Components/Single Meal/SMeal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { index: true, element: <Home></Home>, errorElement: <NF></NF> },
        { path: "/home", element: <Home></Home> },
        { path: "/restaurant", element: <Restaurant></Restaurant> },
        {
          path: "/meal",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s"
            );
          },
          element: <Meals></Meals>,
        },
        { path: "*", element: <NF></NF> },
        {
          path: "meal/:id",
          loader: ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
            );
          },
          element: <SMeal></SMeal>,
        },

        { path: "*", element: <NF></NF> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
