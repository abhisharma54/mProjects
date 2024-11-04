import { Link } from "react-router-dom";
import { linkedInImg, githubDarkImg, githubLightImg, emailImg } from "../assets/index";
import { useSelector } from "react-redux";

function Contact() {
  const themeData = useSelector(state => state.mode);

  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-3xl font-semibold text-[#202020] dark:text-yellow-400">CONNECT</h1>
      <div className="flex flex-col gap-4">
        <Link
          className="w-full flex gap-4 items-center p-3 border-[1px] bg-zinc-100 transition duration-150 ease-in hover:bg-zinc-200 hover:border-[1px] hover:border-[#202020] hover:shadow-lg dark:bg-transparent dark:border-transparent dark:hover:bg-black dark:hover:border-yellow-400"
          target="_blank"
          to={"https://linkedin.com/in/abhishek-sharma-8317751b4"}
        >
          <img
            className="w-[40px]"
            src={linkedInImg}
            alt="linkedIn-img"
            loading="lazy"
          />
          <h1 className="text-xl font-semibold text-[#202020] dark:text-white">LinkedIn</h1>
        </Link>
        <Link
          className="w-full flex gap-4 items-center p-3 border-[1px] bg-zinc-100 transition duration-150 ease-in hover:bg-zinc-200 hover:border-[1px] hover:border-[#202020] hover:shadow-lg dark:bg-transparent dark:border-transparent dark:hover:bg-black dark:hover:border-yellow-400"
          target="_blank"
          to={"https://github.com/abhisharma54"}
        >
          <img
            className="w-[40px]"
            src={themeData === 'light' ? githubLightImg : githubDarkImg}
            alt="github-img"
            loading="lazy"
          />
          <h1 className="text-xl font-semibold text-[#202020] dark:text-white">Github</h1>
        </Link>
        <Link
          className="w-full flex gap-4 items-center p-3 border-[1px] bg-zinc-100 transition duration-150 ease-in hover:bg-zinc-200 hover:border-[1px] hover:border-[#202020] hover:shadow-lg dark:bg-transparent dark:border-transparent dark:hover:bg-black dark:hover:border-yellow-400"
          target="_blank"
          to={"mailto:abhisheksharma2920@gmail.com"}
        >
          <img
            className="w-[40px]"
            src={emailImg}
            alt="email-img"
            loading="lazy"
          />
          <h1 className="text-xl font-semibold text-[#202020] dark:text-white">Email</h1>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
