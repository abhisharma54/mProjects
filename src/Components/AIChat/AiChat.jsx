import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
import {
  arrowLightIcon,
  arrowDarkIcon,
  listAiLight,
  listAiDark,
} from "../../assets/index";

function AiChat() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const themeData = useSelector((state) => state.mode);
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleAiChat = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setPrompt("");
      const result = await model.generateContent(prompt);
      const res = result.response.text().replace(/\*/g, "");
      setData((prev) => [...prev, { message: res }]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col gap-4 p-4 mb-4 max-[550px]:px-1">
          {data.length > 0 ? (
            data.map((item, index) => (
              <li
                key={index}
                className="text-black text-justify dark:text-white"
              >
                {item.message}
              </li>
            ))
          ) : loading ? (
            <div className="flex gap-2">
            <img className="w-[20px]" src={themeData === 'light' ? listAiLight : listAiDark} alt="listAi-icon" />
            <p className="text-[#202020] dark:text-yellow-400">wait...</p>
            </div>
          ) : (
            <p className="text-3xl font-bold mt-20 text-[#202020] dark:text-white">
              How can I help you?
            </p>
          )}
          {error && <p className="text-black dark:text-white">{error}</p>}
          <div className="h-[50px]"></div>
        </div>
        <form
          onSubmit={handleAiChat}
          className="flex justify-center w-[50rem] px-10 gap-2 fixed bottom-0 pt-1 pb-10 bg-white dark:bg-[#202020] max-[1024px]:w-full"
        >
          <input
            className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
            type="text"
            placeholder="Ask..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" className="w-[40px] shadow-2xl">
            <img
              src={themeData === "light" ? arrowLightIcon : arrowDarkIcon}
              alt="Send"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AiChat;
