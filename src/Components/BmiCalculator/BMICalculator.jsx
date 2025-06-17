import { useState } from "react";
import { Input, Button } from "../index";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightConvert, setHeightConvert] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [heightInCm, setHeightInCm] = useState("");
  const [heightConvertErr, setHeightConvertErr] = useState("");
  const [showBmiInfo, setShowBmiInfo] = useState(false);
  console.log("bmi");
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
    setHeightConvertErr("");
    setHeightConvert("");
    if (heightConvert.trim() === "") {
      setHeightConvertErr("Please Enter Height");
    } else {
      const heightValue = (heightConvert * 12 * 2.54).toFixed(2);
      setHeightInCm(heightValue);
    }
  };

  return (
    <div className="w-full">
      {showBmiInfo ? (
        <div className="bg-zinc-200 dark:bg-[#303030] text-black dark:text-white p-6 rounded-[var(--boxRadius)]">
          <div className="flex justify-between">
            <h1 className="text-left text-3xl font-bold max-[550px]:text-2xl">
              Body Mass Index (BMI)
            </h1>
            <i
              onClick={() => setShowBmiInfo(false)}
              className="uil uil-multiply text-xl cursor-pointer transition duration-150 ease-in-out hover:text-[rgb(218,58,58)] active:text-[#00ff47] hover:[text-shadow:_0_0_30px_rgb(255_0_0)]"
            ></i>
          </div>
          <p className="text-left text-lg max-[550px]:text-lg">
            Body mass index (BMI) is a medical screening tool that measures the
            ratio of your height to your weight to estimate the amount of body
            fat you have, but does not differentiate muscle mass from fat mass.
          </p>
          <h1 className="text-left text-xl font-semibold mt-4">
            BMI Categories :
          </h1>
          <li className="text-left">{`Underweight: BMI < 18.5`}</li>
          <li className="text-left">{`Normal weight: BMI 18.5–24.9`}</li>
          <li className="text-left">{`Overweight: BMI 25–29.9`}</li>
          <li className="text-left">{`Obesity: BMI ≥ 30`}</li>
        </div>
      ) : (
        <button
          className="flex cursor-pointer"
          onClick={() => setShowBmiInfo(true)}
        >
          <i className="uil-question-circle text-[#202020] dark:text-white">
            <span className="text-sm underline text-[#202020] dark:text-white dark:hover:text-yellow-400">
              What is BMI?
            </span>
          </i>
        </button>
      )}

      <div className="flex flex-col gap-10 mt-4">
        <form
          onSubmit={handleBmi}
          className="flex flex-col gap-4 mt-4 p-5 shadow-xl border-[1px] bg-zinc-100 rounded-[var(--boxRadius)] dark:bg-[#202020] border-[#202020] dark:border-yellow-400"
        >
          <h1 className="text-3xl font-semibold text-[#202020] dark:text-yellow-400 max-[550px]:text-2xl">
            BMI CALCULATOR
          </h1>
          <Input
            label="Height"
            type="number"
            placeholder="cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <Input
            label="Weight"
            type="number"
            placeholder="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-[#202020] dark:text-white">
              Result :
            </p>
            {result ? (
              <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
                {result}
              </p>
            ) : (
              <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020] dark:border-b-yellow-400"></div>
            )}
          </div>
          <Button>Calculate</Button>
          {error && (
            <p className="text-lg font-medium text-[#202020] dark:text-yellow-400">
              {error}
            </p>
          )}
        </form>

        <div className="flex flex-col gap-4 mt-4 p-5 shadow-xl border-[1px] bg-zinc-100 rounded-[var(--boxRadius)] dark:bg-[#202020] border-[#202020] dark:border-yellow-400">
          <h1 className="text-2xl font-semibold text-[#202020] dark:text-yellow-400  max-[550px]:text-xl">
            Convert Feet into Cm
          </h1>
          <div className="flex gap-4 max-[550px]:flex-col">
            <Input
              label="Height"
              type="number"
              placeholder="feet"
              value={heightConvert}
              onChange={(e) => setHeightConvert(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-[#202020] dark:text-white">
              Result :
            </p>
            {heightInCm ? (
              <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">
                {`${heightInCm} cm`}
              </p>
            ) : (
              <div className="w-20 pt-3 border-[1px] border-transparent border-b-[#202020] dark:border-b-yellow-400"></div>
            )}
          </div>
          <Button onClick={handleHeightConvert}>Convert</Button>
          {heightConvertErr && (
            <p className="text-lg font-medium text-[#202020] dark:text-yellow-400">
              {heightConvertErr}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
