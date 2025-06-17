import { useState } from "react";
import { unitParameter } from "./Unit";
import { Input, Button } from "../index";

function UnitConverter() {
  const [units, setUnits] = useState({
    from: "",
    to: "",
    unitType: "length",
    result: "",
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const unit = async () => {
    let { unitType, from, to } = units;
    const url = `https://measurement-unit-converter.p.rapidapi.com/${unitType}?value=${input}&from=${from}&to=${to}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${import.meta.env.VITE_UNIT_KEY}`,
        "x-rapidapi-host": `${import.meta.env.VITE_UNIT_HOST}`,
      },
    };
    setError("");
    setInput("");
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setUnits((prev) => ({
        ...prev,
        result: `${result.value.toFixed(2)} ${result.to.abbr}`,
      }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnit = (e) => {
    e.preventDefault();
    if (input === "" || units.from === "" || units.to === "") {
      setError("Please enter value or select a parameter");
      setTimeout(() => setError(""), 3000);
    } else {
      unit(units.unitType, input, units.from, units.to);
    }
  };

  const parameters = [
    "Length",
    "Weight",
    "Temperature",
    "Area",
    "Volume",
    "Time",
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap max-[530px]:text-[0.9rem]">
        {parameters.map((item) => (
          <button
            key={item}
            onClick={() => {
              setUnits((prev) => ({
                ...prev,
                result: "",
                unitType: item.toLowerCase(),
              }));
            }}
            className={`w-[7rem] py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${
              units.unitType === item.toLowerCase()
                ? "bg-black text-white border-b-0 dark:text-yellow-400 font-semibold"
                : "bg-zinc-200 dark:bg-transparent"
            } transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white max-[530px]:w-[7.5rem] `}
          >
            {item}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleUnit}
        className="flex flex-col gap-4 p-5 shadow-2xl bg-zinc-100 border-[1px] border-[#202020] dark:border-yellow-400 dark:bg-transparent"
      >
        <h1 className="text-3xl font-semibold text-[#202020] dark:text-yellow-400 max-[550px]:text-2xl">
          UNIT CONVERTER
        </h1>
        <div className="flex items-center gap-4 max-[550px]:flex-col">
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg text-nowrap font-medium text-[#202020] dark:text-white"
              htmlFor="from"
            >
              From :
            </label>
            <select
              onChange={(e) =>
                setUnits((prev) => ({ ...prev, from: e.target.value }))
              }
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 rounded-[var(--inputRadius)] dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {unitParameter[units.unitType]?.map((prev) => (
                <option key={prev.value} value={prev.value}>
                  {prev.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg text-nowrap font-medium text-[#202020] dark:text-white"
              htmlFor="from"
            >
              To :
            </label>
            <select
              onChange={(e) =>
                setUnits((prev) => ({ ...prev, to: e.target.value }))
              }
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 rounded-[var(--inputRadius)] dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {unitParameter[units.unitType]?.map((prev) => (
                <option key={prev.value} value={prev.value}>
                  {prev.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Input
          className="bg-zinc-200"
          label="Value"
          type="number"
          placeholder="enter a value"
          value={units.value}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium text-[#202020] dark:text-white">
            Result :
          </p>
          {loading ? (
            <span className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
              converting...
            </span>
          ) : units.result ? (
            <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
              {units.result}
            </p>
          ) : (
            <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020] dark:border-b-yellow-400"></div>
          )}
        </div>
        <Button className="max-[550px]:text-base">{`CONVERT ${units.unitType.toUpperCase()}`}</Button>
      </form>
      {error ? (
        <p className="py-4 text-xl font-semibold text-[#202020] dark:text-yellow-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default UnitConverter;
