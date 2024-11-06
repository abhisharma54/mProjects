import React, { useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightConvert, setHeightConvert] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [heightInCm, setHeightInCm] = useState("");
  const [heightConvertErr, setHeightConvertErr] = useState("");

  const handleBmi = (e) => {
    setError("");
    setHeight("");
    setWeight("");
    e.preventDefault();
    if (height.trim() === "" || weight.trim() === "") {
      setError("Please enter height or weight");
    } else {
      const bmiValue = ((weight / (height * height)) * 10000).toFixed(2);
      if (bmiValue < 18.5) {
        setResult(`Underweight: ${bmiValue}`);
      } else if (18.5 < bmiValue < 24.9) {
        setResult(`Normal Weight: ${bmiValue}`);
      } else if (25 < bmiValue < 29.9) {
        setResult(`Overweight: ${bmiValue}`);
      } else {
        setResult(`Obesity: ${bmiValue}`);
      }
    }
  };

  const handleHeightConvert = () => {
    setHeightConvertErr('')
    setHeightConvert('')
    if (heightConvert.trim() === "") {
      setHeightConvertErr("Please Enter Height");
    } else {
      const heightValue = (heightConvert * 12 * 2.54).toFixed(2);
      setHeightInCm(heightValue);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-zinc-200 dark:bg-yellow-100 text-black p-5">
        <h1 className="text-left text-3xl font-bold max-[550px]:text-2xl">Body Mass Index (BMI)</h1>
        <p className="text-left text-xl max-[550px]:text-lg">
          Body mass index (BMI) is a medical screening tool that measures the
          ratio of your height to your weight to estimate the amount of body fat
          you have, but does not differentiate muscle mass from fat mass.
        </p>
        <h1 className="text-left text-xl font-semibold mt-4">
          BMI Categories :
        </h1>
        <li className="text-left">{`Underweight: BMI < 18.5`}</li>
        <li className="text-left">{`Normal weight: BMI 18.5–24.9`}</li>
        <li className="text-left">{`Overweight: BMI 25–29.9`}</li>
        <li className="text-left">{`Obesity: BMI ≥ 30`}</li>
      </div>

      <div className="flex flex-col gap-20 mt-4">
        <form
          onSubmit={handleBmi}
          className="flex flex-col gap-4 mt-4 p-5 shadow-xl border-[1px] bg-zinc-100 dark:bg-[#202020] border-[#202020] dark:border-yellow-400"
        >
          <h1 className="text-3xl font-semibold text-[#202020] dark:text-yellow-400 max-[550px]:text-2xl">
            BMI CALCULATOR
          </h1>
          <div className="flex items-center gap-4">
            <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="height">
              Height
            </label>
            <input
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-100 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
              type="text"
              placeholder="cm"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="weight">
              Weight
            </label>
            <input
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-100 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
              type="text"
              placeholder="kg"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
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
            {result ? (
              result
            ) : <div className="w-20 pt-3 border-[0px] border-b-[#202020]"></div>}
          </p>
        </div>
          <button className="text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400">
            Calculate
          </button>
            {error && <p className="text-lg text-[#202020] dark:text-white">{error}</p>}
        </form>

        <div className="flex flex-col gap-4 mt-4 p-5 shadow-xl border-[1px] bg-zinc-100 dark:bg-[#202020] border-[#202020] dark:border-yellow-400">
          <h1 className="text-2xl font-semibold text-[#202020] dark:text-yellow-400  max-[550px]:text-xl">
            Convert Feet into Cm
          </h1>
          <div className="flex gap-4 max-[550px]:flex-col">
            <div className="w-full flex items-center gap-4">
              <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="heightConv">
                Height
              </label>
              <input
                className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-100 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
                type="text"
                placeholder="feet"
                id="heightConv"
                value={heightConvert}
                onChange={(e) => setHeightConvert(e.target.value)}
              />
            </div>
            <button
              onClick={handleHeightConvert}
              className="text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400 max-[550px]:w-full max-[550px]:text-lg"
            >
              Convert
            </button>
          </div>
          <div className="flex items-center gap-4">
          <p
            className="text-lg font-medium text-[#202020] dark:text-white"
            htmlFor="result"
          >
            Result :
          </p>
            {heightInCm ? (
              <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
                {`${heightInCm} cm`}
              </p>
            ) : <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020] dark:border-b-yellow-400"></div>}
        </div>
            {heightConvertErr && <p className="text-lg text-[#202020] dark:text-white">{heightConvertErr}</p>}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
