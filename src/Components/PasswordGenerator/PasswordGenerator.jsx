import { useCallback, useEffect, useState } from "react";
import { Input, Button } from "../index";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const handlePasswordGenerator = useCallback(() => {
    let pass = "";
    let passChar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!*@$-_&abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * passChar.length + 1);
      pass += passChar.charAt(char);
    }
    setPassword(pass);
  }, [length, setPassword]);

  return (
    <div className="flex flex-col bg-[var(--bgCardColor)] gap-4 mt-4 p-5 shadow-2xl border-[1px] border-[#202020] rounded-[var(--boxRadius)] dark:bg-[var(--bgDarkCardColor)]">
      <h1 className="text-3xl text-nowrap font-semibold text-[var(--bgColor)] mb-4 max-[550px]:text-2xl">
        PASSWORD GENERATOR
      </h1>
      <Input type="text" placeholder="password" readOnly value={password} />
      <div className="flex items-center gap-3">
        <label
          className="font-semibold text-[var(--bgColor)] dark:text-white"
          htmlFor="lenght"
        >
          Password Lenght
        </label>
        <input
          type="range"
          id="lenght"
          value={length}
          min={6}
          max={16}
          onChange={(e) => setLength(e.target.value)}
        />
        <p className="text-[var(--textColor)] font-medium">{length}</p>
      </div>
      <Button
        onClick={handlePasswordGenerator}
        className="text-xl font-semibold px-3 py-2"
      >
        Generate Unique Password
      </Button>
    </div>
  );
}

export default PasswordGenerator;
