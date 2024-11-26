import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../index";

function Recipe() {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { foodId } = useParams();
  const navigate = useNavigate();

  const handleFoodRecipe = useCallback(async () => {
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
      setFoodData({
        strMeal: food.strMeal, 
        strCategory: food.strCategory, 
        strInstructions: food.strInstructions, 
        strMealThumb: food.strMealThumb, 
        ingredients: ingredients
      })

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [foodId])

  useEffect(() => {
    handleFoodRecipe();
  }, [handleFoodRecipe]);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center min-h-[80vh] h-auto bg-zinc-100 dark:bg-[#303030] border border-[#303030] dark:border-yellow-400">
        {loading ? (
          <p className="text-3xl bg-[#202020] text-white rounded-full px-10 py-3 font-semibold dark:text-yellow-400 max-[550px]:text-xl">
            Loading Food Recipe...
          </p>
        ) : error ? (
          <p className="text-xl font-semibold text-[#202020] dark:text-red-400">
            {error}
          </p>
        ) : (
          <div className="flex gap-5 px-6 py-4 min-h-[80vh] h-auto max-[768px]:flex-col max-[550px]:px-3">
            <div className="food-img w-[450px] h-[300px] bg-zinc-300 rounded-md dark:bg-[#242424] overflow-hidden max-[768px]:w-[400px] max-[550px]:w-full">
              <img
                className="w-full h-full object-cover"
                src={foodData.strMealThumb}
                alt={foodData.strMeal}
              />
            </div>
            <div className="food-details w-full flex flex-col items-start">
              <h1 className="text-3xl font-bold tracking-wider text-nowrap text-[#202020] dark:text-yellow-400">
                {foodData.strMeal}
              </h1>
              <h3 className="text-xl font-medium text-[#202020] ml-1 dark:text-white">
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
