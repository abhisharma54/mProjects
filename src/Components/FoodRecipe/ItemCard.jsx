import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function ItemCard({ imgSrc, imgAlt, itemName, itemCategory, itemId }) {
  const navigate = useNavigate();

  return (
    <div className="group relative w-[340px] h-[450px] border border-[#202020] bg-[var(--bgCardColor)] rounded-[var(--boxRadius)] dark:bg-[var(--bgDarkCardColor)] cursor-pointer overflow-hidden max-[780px]:w-[250px] max-[780px]:h-[350px] max-[550px]:w-[350px]">
      <div className="p-3 max-[550px]:w-full">
        <img
          className="w-full h-[370px] object-cover rounded-[var(--boxRadius)] bg-[var(--bgColor)] border border-[#202020] shadow-lg dark:bg-[#303030] max-[780px]:h-[270px]"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
        <div className="flex flex-col w-full h-[70px] px-4 absolute bottom-0 left-0 rounded-t-3xl transition-all duration-150 ease-in-out group-hover:h-[140px] group-hover:bg-[var(--bgCardColor)] dark:group-hover:bg-[var(--bgDarkCardColor)]">
          <h1 className="text-white text-2xl font-bold mt-2 max-[550px]:text-2xl">
            {itemName}
          </h1>
          <p className="text-[var(--textColor)] font-medium">{itemCategory}</p>
          <Button
            onClick={() => navigate(`${itemId}`)}
            className="my-3 text-nowrap bg-[var(--bgBtnColor)] border border-white text-white rounded-full max-[550px]:text-base"
          >
            Read Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ItemCard);
