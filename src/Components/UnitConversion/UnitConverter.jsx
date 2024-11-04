import { useState } from "react";
import { unitParameter} from './Unit'

function UnitConverter() {
  const [type, setType] = useState('length');
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const unit = async () => {
    const url = `https://measurement-unit-converter.p.rapidapi.com/${type}?value=${value}&from=${from}&to=${to}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${import.meta.env.VITE_UNIT_KEY}`,
        "x-rapidapi-host": `${import.meta.env.VITE_UNIT_HOST}`,
      },
    };
    try {
      setError('')
      setValue('')
      setLoading(true)
      const response = await fetch(url, options);
      const result = await response.json();
      setResult(`${result.value.toFixed(2)} ${result.to.abbr}`);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnit = (e) => {
    e.preventDefault();
    if(value === '' || from === '' || to === '') {
      setError('Please enter value or select a parameter')
    } else {
      unit(type, value, from, to);
    }
  };

  return (
    <div className="w-full">
        <div className="flex flex-wrap max-[530px]:text-[0.8rem]">
          <button onClick={() => {setType('length'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'length' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Length</button>
          <button onClick={() => {setType('mass'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'mass' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Weight</button>
          <button onClick={() => {setType('temperature'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'temperature' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Temperature</button>
          <button onClick={() => {setType('area'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'area' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Area</button>
          <button onClick={() => {setType('volume'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'volume' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Volume</button>
          <button onClick={() => {setType('time'); setResult('')}} className={`px-3 py-2 text-[#202020] dark:text-yellow-400 border-[1px] border-[#202020] dark:border-yellow-400 ${type === 'time' ? 'bg-black text-white border-b-0 dark:text-yellow-400 font-semibold' : 'bg-zinc-200 dark:bg-transparent'} transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white border-[#202020] dark:focus:border-yellow-400 focus:bg-black focus:text-white`}>Time</button>
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
            <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="from">
              From
            </label>
            <select
              onChange={(e) => setFrom(e.target.value)}
              className="px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {type === 'length' ? unitParameter.length.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'mass' ? unitParameter.mass.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'temperature' ? unitParameter.temperature.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'area' ? unitParameter.area.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'volume' ? unitParameter.volume.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'time' ? unitParameter.time.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : null}
            </select>
            </div>
            <div className="w-full flex items-center gap-4">
            <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="from">
              To
            </label>
            <select
              onChange={(e) => setTo(e.target.value)}
              className="px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none cursor-pointer max-[550px]:w-full"
            >
              <option>Select a parameter</option>
              {type === 'length' ? unitParameter.length.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'mass' ? unitParameter.mass.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'temperature' ? unitParameter.temperature.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'area' ? unitParameter.area.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'volume' ? unitParameter.volume.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : type === 'time' ? unitParameter.time.map(prev => (
                <option key={prev.value} value={prev.value}>{prev.name}</option>
              )) : null}
            </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
          <label className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="value">Value</label>
          <input
            className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-200 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
            type="number"
            placeholder="enter a value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-[#202020] dark:text-white" htmlFor="result">
              Result :
            </p>
            <p className="text-lg font-medium text-[#202020] border-b-[1px] border-b-zinc-600 dark:text-yellow-400 dark:border-yellow-400">{loading ? <span className="font-normal text-[#202020] dark:text-white">converting...</span> : result ? result : null}</p>
          </div>
          <button className="text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400 max-[550px]:text-lg">
            Convert
          </button>
        </form>
        {error ? <p className="y-4 text-xl font-semibold text-[#202020] dark:text-yellow-400">{error}</p> : null}
      </div>
  );
}

export default UnitConverter;
