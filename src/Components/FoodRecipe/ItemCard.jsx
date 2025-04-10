import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function ItemCard({ imgSrc, imgAlt, itemName, itemCategory, itemId }) {
  const navigate = useNavigate();

  return (
    <div className="group relative w-[340px] h-[450px] border border-[#202020] bg-zinc-100 dark:bg-[#262626] dark:border-yellow-400 hover:cursor-pointer overflow-hidden max-[780px]:w-[250px] max-[780px]:h-[350px] max-[550px]:w-[350px]">
      <div className="p-3 max-[550px]:w-full">
        <img
          className="w-full h-[370px] object-cover rounded-md bg-zinc-300 dark:bg-[#303030] max-[780px]:h-[270px]"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
        <div className="flex flex-col w-full h-[70px] px-4 absolute bottom-0 left-0 rounded-t-lg transition-all duration-150 ease-in-out group-hover:h-[140px] group-hover:bg-[#202020dc]">
          <h1 className="text-[#202020] text-2xl font-bold mt-2 dark:text-white max-[550px]:text-2xl group-hover:text-white">
            {itemName}
          </h1>
          <p className="text-[#202020] font-medium dark:text-white group-hover:text-white">
            ({itemCategory})
          </p>
          <Button
            onClick={() => navigate(`${itemId}`)}
            className="my-3 text-nowrap bg-zinc-800 border border-white text-white rounded-full max-[550px]:text-base"
          >
            Read Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ItemCard);
