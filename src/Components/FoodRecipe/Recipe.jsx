import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, FoodItem } from "../index";

function Recipe() {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([])

  const { foodId } = useParams();
  const navigate = useNavigate();

  const handleFoodRecipe = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    try {
      setLoading(true);
      setError("");
      const res = await fetch(url);
      const data = await res.json();

      const food = data.meals[0]
      const ingredients = [];

      for (let i = 1; i < 20; i++) {
        const ingredient = food[`strIngredient${i}`];
        const measure = food[`strMeasure${i}`]
        if(ingredient && measure) {
          ingredients.push({ingredient, measure})
        }
      }
      setFoodData({strMeal: food.strMeal, strCategory: food.strCategory, strInstructions: food.strInstructions, strMealThumb: food.strMealThumb, ingredients: ingredients})

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("food data : ", foodData);

  useEffect(() => {
    handleFoodRecipe();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center min-h-[80vh] h-auto rounded-md shadow-[0px_0px_20px_-12px] bg-zinc-100 dark:bg-[#303030]">
        {loading ? (
          <p className="text-3xl font-semibold text-[#202020] dark:text-yellow-400">
            Loading Food Recipe...
          </p>
        ) : error ? (
          <p className="text-xl font-semibold text-[#202020] dark:text-red-400">
            {error}
          </p>
        ) : (
          <div className="flex gap-5 px-6 py-4 min-h-[80vh] h-auto rounded-md shadow-[0px_0px_20px_-12px] bg-zinc-100 dark:bg-[#303030] max-[768px]:flex-col">
            <div className="food-img w-[430px] max-[550px]:w-full">
              <img
                className="rounded-md"
                src={foodData.strMealThumb}
                alt={foodData.strMeal}
              />
            </div>
            <div className="food-details w-full flex flex-col items-start">
              <h1 className="text-3xl font-bold tracking-wider text-nowrap text-[#202020] dark:text-yellow-400">
                {foodData.strMeal}
              </h1>
              <h3 className="text-xl text-[#202020] ml-1 dark:text-white">
                {foodData.strCategory}
              </h3>
              <h4 className="text-xl font-semibold tracking-wider text-nowrap text-[#202020] mt-4 dark:text-yellow-400">
                Ingredient
              </h4>
              <div className="flex flex-wrap">
                {foodData.ingredients?.map((item, index) => (
                  <p key={index} className="text-[#202020] dark:text-white ml-1">
                  {item.ingredient} ({item.measure}),
                </p>
                ))}
              </div>
              <h4 className="text-xl font-semibold tracking-wider text-nowrap text-[#202020] mt-4 dark:text-yellow-400">
                Recipe
              </h4>
              <p className="text-[#202020] ml-1 dark:text-white text-justify">
                {foodData.strInstructions}
              </p>
              <Button onClick={() => navigate("/food-item")} className="w-full my-5">Go Back</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;