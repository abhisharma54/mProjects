import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  lightModeIcon,
  darkModeIcon,
  menuLightIcon,
  menuDarkIcon,
} from "../assets/index";
import { lightMode, darkMode } from "../store/themeModeSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [menu, setMenu] = useState(false);
  const themeData = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  console.log("theme mode::", themeData)
  const navItem = [
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const handleThemeMode = () => {
    if (themeData === "dark") {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add('light');
      dispatch(lightMode());
    } else {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add('dark');
      dispatch(darkMode());
    }
  };

  useEffect(() => {
    document.querySelector('html').classList.add(themeData)
  }, [])

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center">
          <header
            className={
              menu
                ? "flex flex-col items-center gap-10 bg-zinc-100 dark:bg-zinc-900 px-10 shadow-2xl py-2 rounded-full border-[1px] border-[#202020] dark:border-yellow-400 min-[550px]:flex-row max-[550px]:gap-1 max-[550px]:w-full max-[550px]:h-[400px] max-[550px]:rounded-none max-[550px]:border-none max-[550px]:absolute max-[550px]:top-0"
                : "flex items-center gap-10 bg-zinc-100 dark:bg-zinc-900 px-10 shadow-2xl py-2 rounded-full border-[1px] border-[#202020] dark:border-yellow-400 max-[550px]:hidden"
            }
          >
            <h1 className="text-2xl font-bold text-[#202020] dark:text-yellow-400 mb-1 max-[550px]:pt-10">
              mProjects
            </h1>
            <ul className="flex gap-4 max-[550px]:flex-col max-[550px]:gap-10 max-[550px]:py-10">
              {navItem.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenu(prev => !prev)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-orange-500 font-semibold dark:text-yellow-400 "
                          : "text-[#202020] dark:text-white"
                      } transition duration-150 ease-in hover:text-orange-500 hover:border-b-orange-500 dark:hover:text-yellow-400 hover:border-b-[1px] dark:hover:border-b-yellow-40`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              onClick={handleThemeMode}
              title="mode"
              className="w-[30px] flex cursor-pointer transition duration-150 ease-in hover:scale-105"
            >
              <img
                src={themeData === "light" ? darkModeIcon : lightModeIcon}
                alt="theme-mode-icon"
              />
            </button>
          </header>
          <button
            onClick={() => setMenu((prev) => !prev)}
            title="menu"
            className="w-[30px] hidden absolute top-5 right-20 cursor-pointer transition duration-150 ease-in hover:scale-105 max-[768px]:flex max-[768px]:items-center max-[768px]:gap-1"
          >
            <img
              src={themeData === "light" ? menuDarkIcon : menuLightIcon}
              alt="menu-icon"
            />
            <p className="text-xl text-[#202020] font-semibold dark:text-yellow-400">
              Menu
            </p>
          </button>
        </div>
      </div>
      <div className="h-8"></div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
