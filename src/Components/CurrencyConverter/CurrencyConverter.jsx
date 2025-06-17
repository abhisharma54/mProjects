import { useEffect, useState } from "react";
import { Input, Button } from "../index";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${import.meta.env.VITE_UNIT_KEY}`,
    "x-rapidapi-host": `${import.meta.env.VITE_CURRENCY_HOST}`,
  },
};

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState({
    from: "USD",
    to: "INR",
    result: "",
  });
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCurrency = async (e) => {
    e.preventDefault();
    let { from, to } = currencies;
    const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=${to}&amount=${amount}`;
    setError("");
    setLoading(true);
    setAmount("");
    try {
      if (amount === "" || from === "" || to === "") {
        setError("Please enter amount or select a currency");
        setTimeout(() => setError(""), 3000);
      } else {
        const response = await fetch(url, options);
        const data = await response.json();
        setCurrencies((prev) => ({
          ...prev,
          result: data.result.convertedAmount.toFixed(2),
        }));
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

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCurrencyList(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <form
        onSubmit={handleCurrency}
        className="flex flex-col gap-4 p-5 shadow-2xl bg-[var(--bgCardColor)] border border-[#202020] rounded-[var(--boxRadius)] dark:bg-[var(--bgDarkCardColor)]"
      >
        <h1 className="text-3xl text-nowrap font-semibold text-[var(--textColor)] max-[550px]:text-2xl">
          CURRENCY CONVERTER
        </h1>
        <div className="flex items-center gap-4 max-[550px]:flex-col">
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg text-nowrap font-medium text-[var(--textColor)] dark:text-white"
              htmlFor="from"
            >
              From :
            </label>
            <select
              onChange={(e) =>
                setCurrencies((prev) => ({ ...prev, from: e.target.value }))
              }
              value={currencies.from}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-[var(--bgColor)] rounded-[var(--inputRadius)] focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a currency</option>
              {currencyList.map((currency, index) => (
                <option
                  value={currency.symbol}
                  key={index}
                >{`${currency.name} (${currency.symbol})`}</option>
              ))}
            </select>
          </div>
          <div className="w-full flex items-center gap-4">
            <label
              className="text-lg text-nowrap font-medium text-[var(--textColor)] dark:text-white"
              htmlFor="from"
            >
              To :
            </label>
            <select
              onChange={(e) =>
                setCurrencies((prev) => ({ ...prev, to: e.target.value }))
              }
              value={currencies.to}
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-[var(--bgColor)] rounded-[var(--inputRadius)] focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a currency</option>
              {currencyList.map((currency, index) => (
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
          <p className="text-lg font-medium text-[var(--textColor)] dark:text-white">
            Result :
          </p>
          {loading ? (
            <span className="text-lg font-medium text-[var(--textColor)] border-b-[1px] border-b-zinc-600 dark:text-white">
              converting...
            </span>
          ) : currencies.result ? (
            <p className="text-lg font-medium text-[var(--textColor)] border-b-[1px] border-b-zinc-600 dark:text-white">
              {currencies.result}
            </p>
          ) : (
            <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020]"></div>
          )}
        </div>
        <Button>{`Convert ${currencies.from} to ${currencies.to}`}</Button>
        {error ? (
          <p className="py-2 text-xl font-semibold text-[var(--textColor)] dark:text-white">
            {error}
          </p>
        ) : null}
      </form>
    </div>
  );
}

export default CurrencyConverter;
