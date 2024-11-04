import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCurrency = async (e) => {
    e.preventDefault();
    const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=${to}&amount=${amount}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${import.meta.env.VITE_UNIT_KEY}`,
        "x-rapidapi-host": `${import.meta.env.VITE_CURRENCY_HOST}`,
      },
    };

    try {
      setError("");
      setLoading(true);
      setAmount("");
      if (amount === "" || from === "" || to === "") {
        setError("Please enter amount or select a currency");
      } else {
        const response = await fetch(url, options);
        const result = await response.json();
        setResult(result.result.convertedAmount.toFixed(2));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const url =
        "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "904da6a5ccmsh9cf5236bad9b821p1fd718jsnb3727b2e94ff",
          "x-rapidapi-host": "currency-converter18.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCurrencies(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <form
        onSubmit={handleCurrency}
        className="flex flex-col gap-4 p-5 shadow-2xl bg-zinc-100 border-[1px] border-[#202020] dark:border-yellow-400 dark:bg-transparent"
      >
        <h1 className="text-3xl font-semibold text-[#202020] dark:text-yellow-400 max-[550px]:text-2xl">
          CURRENCY CONVERTER
        </h1>
        <div className="flex items-center gap-4 max-[550px]:flex-col">
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg font-medium text-[#202020] dark:text-white"
              htmlFor="from"
            >
              From
            </label>
            <select
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.symbol}
                >{`${currency.name} (${currency.symbol})`}</option>
              ))}
            </select>
          </div>
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg font-medium text-[#202020] dark:text-white"
              htmlFor="from"
            >
              To
            </label>
            <select
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.symbol}
                >{`${currency.name} (${currency.symbol})`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            className="text-lg font-medium text-[#202020] dark:text-white"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
            type="number"
            placeholder="enter a value"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="text-lg font-medium text-[#202020] dark:text-white"
            htmlFor="result"
          >
            Result :
          </p>
          <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
            {loading ? (
              <span className="font-normal text-[#202020] dark:text-white">
                converting...
              </span>
            ) : result ? (
              result
            ) : null}
          </p>
        </div>
        <button className="text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400 max-[550px]:text-lg">
          Convert
        </button>
      </form>
      {error ? (
        <p className="my-4 text-xl font-semibold text-[#202020] dark:text-yellow-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default CurrencyConverter;
