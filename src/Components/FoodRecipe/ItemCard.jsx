import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function ItemCard({ imgSrc, imgAlt, itemName, itemCategory, itemId }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 w-[340px] p-2 shadow-lg border-[1px] border-[#202020] bg-zinc-100 dark:border-yellow-400 dark:bg-[#262626] max-[780px]:w-[250px] max-[600px]:w-[350px] max-[425px]:w-[160px]">
      <div className="flex flex-col">
        <img
          className="rounded-md bg-zinc-200 dark:bg-[#303030]"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
        <h1 className="text-[#202020] text-lg font-semibold mt-2 dark:text-white">
          {itemName}
        </h1>
        <p className="text-[#202020] dark:text-white">({itemCategory})</p>
      </div>
      <Button
        onClick={() => navigate(`${itemId}`)}
        className="my-3 text-nowrap max-[425px]:text-base max-[425px]:my-0 max-[425px]:py-1"
      >
        Read Recipe
      </Button>
    </div>
  );
}

export default ItemCard;
