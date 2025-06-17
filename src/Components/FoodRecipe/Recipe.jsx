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
    setLoading(true);
    setError("");
    try {
      const res = await fetch(url);
      const data = await res.json();
      const food = data.meals[0];

      const ingredients = [];

      const separateIngredients = (i) => {
        data.meals.forEach((item) => {
          if (item[`strIngredient${i}`] && item[`strMeasure${i}`]) {
            ingredients.push({
              ingredient: item[`strIngredient${i}`],
              measure: item[`strMeasure${i}`],
            });
            separateIngredients(i + 1);
          }
        });
      };
      separateIngredients(1);

      setFoodData({
        strMeal: food.strMeal,
        strCategory: food.strCategory,
        strInstructions: food.strInstructions,
        strMealThumb: food.strMealThumb,
        ingredients: ingredients,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [foodId]);

  useEffect(() => {
    handleFoodRecipe();
  }, [handleFoodRecipe]);

  return (
    <div className="w-full min-h-[80vh] h-full flex justify-center items-center">
      {loading ? (
        <p className="text-2xl bg-[#202020] text-white rounded-full px-10 py-3 font-semibold dark:bg-yellow-400 dark:text-[#202020] max-[550px]:text-xl">
          Loading Food Recipe...
        </p>
      ) : error ? (
        <p className="text-2xl bg-[#202020] text-white rounded-full px-10 py-3 font-semibold dark:bg-yellow-400 dark:text-red-500 max-[550px]:text-xl">
          {error}
        </p>
      ) : (
        <div className="flex min-h-[80vh] max-w-[800px] bg-zinc-100 rounded-[var(--boxRadius)] dark:bg-[#303030] border border-[#303030] dark:border-yellow-400">
          <div className="flex flex-col gap-2 py-4">
            <div className="flex gap-2 justify-center text-3xl font-bold tracking-wider">
              <span className="text-[#555555] dark:text-yellow-400">
                {foodData.strMeal}
              </span>
              <span className="text-black dark:text-white">Food Recipe</span>
            </div>
            <div className="flex flex-col gap-5 px-6 py-4 max-[768px]:flex-col max-[550px]:px-3">
              <div className="flex gap-4 max-[768px]:flex-col">
                <div className="food-img w-[480px] h-[300px] bg-zinc-300  rounded-[var(--boxRadius)] dark:bg-[#242424] overflow-hidden max-[768px]:w-full max-[768px]:h-[400px] max-[550px]:h-[300px]">
                  <img
                    className="w-full h-full object-cover"
                    src={foodData.strMealThumb}
                    alt={foodData.strMeal}
                  />
                </div>
                <div className=" flex flex-col items-start">
                  <h1 className="text-4xl font-bold tracking-wider text-nowrap text-[#202020] dark:text-yellow-400">
                    {foodData.strMeal}
                  </h1>
                  <h3 className="text-xl font-medium text-[#202020] ml-1 dark:text-white">
                    {foodData.strCategory}
                  </h3>
                  <div className="flex items-start flex-col gap-1 flex-wrap">
                    <h4 className="text-xl font-semibold tracking-wider text-nowrap text-[#202020] mt-4 dark:text-yellow-400">
                      Ingredient :
                    </h4>
                    {foodData.ingredients?.map((item, index) => (
                      <p
                        key={index}
                        className="text-[#202020] dark:text-white ml-1"
                      >
                        {item.ingredient} ({item.measure})
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="food-details w-full flex flex-col items-start">
                <h4 className="text-xl font-semibold tracking-wider text-nowrap text-[#202020] mt-4 dark:text-yellow-400">
                  Recipe :
                </h4>
                <p className="text-[#202020] ml-1 dark:text-white text-justify">
                  {foodData.strInstructions}
                </p>
                <Button
                  onClick={() => navigate("/food-item")}
                  className="w-full my-5"
                >
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
