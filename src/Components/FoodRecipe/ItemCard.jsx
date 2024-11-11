import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function ItemCard({ imgSrc, imgAlt, itemName, itemCategory, itemId }) {
  const navigate = useNavigate();

  return (
    <div className="w-[340px] p-2 border-[1px] border-[#202020] dark:border-yellow-400 max-[780px]:w-[250px] max-[600px]:w-[350px] max-[435px]:w-full">
      <div className="bg-zinc-100 dark:bg-[#262626] p-3 max-[550px]:w-full">
      <div className="w-full h-[322px] rounded-md bg-zinc-300 dark:bg-[#303030] overflow-hidden max-[780px]:h-[230px] max-[600px]:h-[300px]">
        <img className="w-full h-full object-cover" src={imgSrc} alt={imgAlt} loading="lazy" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#202020] text-xl font-bold mt-2 dark:text-white max-[550px]:text-2xl">
          {itemName}
        </h1>
        <p className="text-[#202020] dark:text-white">({itemCategory})</p>
        <Button
          onClick={() => navigate(`${itemId}`)}
          className="my-3 text-nowrap max-[550px]:text-base"
        >
          Read Recipe
        </Button>
      </div>
      </div>
    </div>
  );
}

export default ItemCard;
