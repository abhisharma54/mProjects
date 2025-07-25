import { useEffect, useState } from "react";
import { Button, Input, ItemCard } from "../index";

function FoodItem() {
  const [foodData, setFoodData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFoodSearch = async () => {
    setError("");
    setInput("");
    setLoading(true);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.meals) {
        setError(`No result found ${input}. Please try a different search.`);
      }
      setFoodData(data.meals);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFoodSearch("");
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-2 py-5">
        <Input
          className="bg-white"
          type="text"
          placeholder="food"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleFoodSearch} className="py-[0px]">
          Search
        </Button>
      </div>

      {error && <h2 className="text-lg text-[var(--bgBtnColor)]">{error}</h2>}

      <div className="flex flex-wrap justify-center gap-8 items-center max-[550px]:gap-4">
        {loading ? (
          <h2 className="text-xl text-[var(--bgBtnColor)] dark:text-[var(--bgDarkCardColor)]">
            Searching food...
          </h2>
        ) : (
          foodData?.map((item) => (
            <ItemCard
              key={item.idMeal}
              imgSrc={item.strMealThumb}
              imgAlt={item.strMeal}
              itemName={item.strMeal}
              itemCategory={item.strCategory}
              itemId={item.idMeal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FoodItem;
