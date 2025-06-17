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
  const theme = useSelector((state) => state.mode);
  const dispatch = useDispatch();

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
    if (theme === "dark") {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    document.querySelector("html").className = theme;
  }, [theme]);

  return (
    <div className="w-full h-full">
      <div>
        <div className="flex justify-center absolute top-10 left-0 right-0 z-20">
          <header
            className={
              menu
                ? "flex flex-col items-center gap-10 bg-zinc-100 dark:bg-zinc-950 px-10 shadow-2xl py-2 rounded-full border border-[#202020] dark:border-[var(--bgDarkCardColor)] min-[550px]:flex-row max-[550px]:gap-0 max-[550px]:w-full max-[550px]:h-min max-[550px]:pb-10 max-[550px]:rounded-none max-[550px]:border-none max-[550px]:fixed max-[550px]:top-0"
                : "flex items-center gap-10 bg-zinc-100 dark:bg-zinc-900 px-10 shadow-2xl py-2 rounded-full border-[1px] border-[#202020] dark:border-[var(--bgDarkCardColor)] max-[550px]:hidden"
            }
          >
            <h1 className="text-2xl font-bold text-[var(--logoColor)] dark:text-[var(--logoDarkColor)] mb-1 max-[550px]:pt-10 max-[550px]:text-3xl">
              mProjects
            </h1>
            <ul className="flex gap-4 max-[550px]:flex-col max-[550px]:gap-8 max-[550px]:py-10">
              {navItem.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenu((prev) => !prev)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[var(--bgBtnColor)] font-semibold dark:text-[var(--bgDarkCardColor)]"
                          : "text-[#202020] dark:text-white"
                      } outline-none transition duration-150 ease-in max-[550px]:text-xl hover:text-[var(--bgBtnColor)] hover:border-b-[var(--bgCardColor)] hover:font-semibold dark:hover:text-[var(--bgDarkCardColor)] hover:border-b dark:hover:border-b-[var(--bgDarkCardColor)]`
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
              className="w-[30px] flex items-center justify-center gap-2 cursor-pointer transition duration-150 ease-in hover:scale-105"
            >
              <img
                src={theme === "light" ? darkModeIcon : lightModeIcon}
                alt="theme-mode-icon"
              />
              {menu && (
                <p className="hidden text-[#202020] dark:text-yellow-400 text-nowrap font-medium hover:underline max-[550px]:block max-[550px]:text-xl">
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </p>
              )}
            </button>
          </header>
          <button
            onClick={() => setMenu((prev) => !prev)}
            title="menu"
            className="w-[30px] hidden absolute top-0 right-20 cursor-pointer transition duration-150 ease-in focus:outline-none hover:scale-105 max-[550px]:flex max-[550px]:items-center max-[550px]:gap-1"
          >
            {menu ? (
              <p className="text-[1.5rem] cursor-pointer fixed mt-10 ml-10 transition duration-150 ease-in-out hover:[text-shadow:_0_0_20px_rgb(255_0_0)] dark:text-white">
                ❌
              </p>
            ) : (
              <>
                <img
                  src={theme === "light" ? menuLightIcon : menuDarkIcon}
                  alt="menu-icon"
                />
                <p className="text-xl text-[var(--bgBtnColor)] dark:text-[var(--textColor)] font-semibold">
                  Menu
                </p>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="h-24 max-[550px]:h-16"></div>
      <main className="pb-20" onClick={() => setMenu(false)}>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
