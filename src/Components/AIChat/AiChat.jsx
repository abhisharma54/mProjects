import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
import {
  arrowLightIcon,
  arrowDarkIcon,
  listAiLight,
  listAiDark,
} from "../../assets/index";
import { Input } from "../index";

function AiChat() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const theme = useSelector((state) => state.mode);
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleAiChat = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPrompt("");
    try {
      const result = await model.generateContent(prompt);
      const res = result.response.text().replace(/\*/g, "").replace("##", "");
      setData((prev) => [...prev, { question: prompt, message: res }]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] flex flex-col items-center max-[1024px]:w-full">
        <div className="w-full flex flex-col gap-4 mt-4 max-[550px]:px-1">
          {data?.length === 0 ? (
            <p className="text-3xl font-bold mt-20 text-[#202020] dark:text-white">
              How can I help you?
            </p>
          ) : (
            data.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="text-black font-semibold bg-zinc-200 self-end px-3 py-2 rounded-[var(--inputRadius)] text-right dark:text-white dark:bg-[#303030]">
                  {item.question}
                </p>
                <p className="text-black bg-zinc-100 self-start px-3 py-2 rounded-[var(--inputRadius)] text-justify dark:text-white dark:bg-zinc-700">
                  {item.message}
                </p>
              </div>
            ))
          )}
          {loading && (
            <div className="flex gap-2">
              <img
                className="w-[20px]"
                src={theme === "light" ? listAiLight : listAiDark}
                alt="listAi-icon"
              />
              <p className="text-[#202020] dark:text-yellow-400">wait...</p>
            </div>
          )}
          {error && (
            <p className="text-black bg-zinc-100 p-3 rounded-md dark:text-white dark:bg-zinc-700 overflow-auto">
              {error}
            </p>
          )}
          <div className="h-[50px]"></div>
        </div>
        <form
          onSubmit={handleAiChat}
          className="flex justify-center w-[50rem] px-10 gap-2 fixed bottom-0 pb-10 bg-white dark:bg-[#202020] max-[1024px]:w-full"
        >
          <Input
            type="text"
            placeholder="Ask..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" className="w-[40px] shadow-2xl">
            <img
              src={theme === "light" ? arrowLightIcon : arrowDarkIcon}
              alt="Send"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AiChat;
