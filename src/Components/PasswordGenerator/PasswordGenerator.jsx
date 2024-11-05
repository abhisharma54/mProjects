import { useCallback, useEffect, useState } from 'react'

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8)

  const handlePasswordGenerator = useCallback(() => {
    let pass = '';
    let passChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!*@$-_&abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * passChar.length + 1)
      pass += passChar.charAt(char);
    }
    setPassword(pass)
  }, [length, setPassword]);

  useEffect(() => {
    handlePasswordGenerator()
  }, [length, handlePasswordGenerator])

  return (
    <div className="w-full">
        <div
          className="flex flex-col gap-4 mt-4 p-5 shadow-2xl border-[1px] border-[#202020] dark:border-yellow-400"
        >
          <h1 className="text-3xl text-nowrap font-semibold text-[#202020] dark:text-yellow-400 mb-4 max-[550px]:text-2xl">
            PASSWORD GENERATOR
          </h1>
            <input
              className="w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-100 dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none"
              type="text"
              placeholder="password"
              readOnly
              value={password}
            />
            <div className='flex gap-3'>
            <label className='font-semibold text-[#202020] dark:text-white' htmlFor="lenght">Password Lenght</label>
            <input type="range" id="lenght" value={length} min={6} max={16} onChange={(e) => setLength(e.target.value)} />
            <p className='text-[#202020] font-medium dark:text-yellow-400'>{length}</p>
            </div>
          <button onClick={handlePasswordGenerator} className="text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400">
            Generate Unique Password
          </button>
        </div>
    </div>
  )
}

export default PasswordGenerator