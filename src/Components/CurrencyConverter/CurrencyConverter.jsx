import { useEffect, useState } from "react";
import { Input, Button } from "../index";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
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
        <h1 className="text-3xl text-nowrap font-semibold text-[#202020] dark:text-yellow-400 max-[550px]:text-2xl">
          CURRENCY CONVERTER
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
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a currency</option>
              {currencies.map((currency, index) => (
                <option
                value={currency.symbol}
                  key={index}
                >{`${currency.name} (${currency.symbol})`}</option>
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
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a currency</option>
              {currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.symbol}
                >{`${currency.name} (${currency.symbol})`}</option>
              ))}
            </select>
          </div>
        </div>
          <Input
            label="Amount"
            type="number"
            placeholder="enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium text-[#202020] dark:text-white">
            Result :
          </p>
          {loading ? (
            <span className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
              converting...
            </span>
          ) : result ? (
            <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
              {result}
            </p>
          ) : (
            <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020] dark:border-b-yellow-400"></div>
          )}
        </div>
        <Button>
          {`Convert ${from} to ${to}`}
        </Button>
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
