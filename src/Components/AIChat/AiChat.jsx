import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
import { arrowLightIcon, arrowDarkIcon } from '../../assets/index'

function AiChat() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const themeData = useSelector(state => state.mode)
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleAiChat = async (e) => {
    e.preventDefault();
    try {
        setError('')
        setPrompt('')
        const result = await model.generateContent(prompt);
        const res = result.response.text().replace(/\*/g, '');
        setData(prev => [...prev, {id: Date.now(), message: res}])
    } catch (error) {
        setError(error)
    }
  };

  return (
    <div className="w-full">
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-4 p-4 mb-4 overflow-auto">
          {data.length > 0 ? data.map(item => (
            <li key={item.id} className="text-black text-start dark:text-white">{item.message}</li>
          )) : <p className="text-3xl font-bold text-[#202020] dark:text-white">How can I help you?</p>}
          {error && <p className="text-black dark:text-white">{error}</p>}
        </div>
        <form onSubmit={handleAiChat} className="flex justify-center w-[50rem] px-10 gap-2 fixed bottom-0 pt-1 pb-10 bg-white dark:bg-[#202020] max-[1024px]:w-full">
          <input
            className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
            type="text"
            placeholder="Ask..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" className="flex items-center justify-center">
            <img className="w-[40px] rounded-full shadow-lg" src={themeData === 'light' ? arrowDarkIcon : arrowLightIcon} alt="Send" />
          </button>
        </form>
        </div>
    </div>
  );
}

export default AiChat;
