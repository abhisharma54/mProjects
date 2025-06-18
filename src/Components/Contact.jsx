import { Link } from "react-router-dom";
import { linkedInImg, gitHubImg, emailImg } from "../assets/index";

function Contact() {
  const links = [
    {
      name: "LinkedIn",
      path: "https://linkedin.com/in/abhishek-sharma-8317751b4",
      imgSrc: linkedInImg,
      imgAlt: "linkedIn-image",
    },
    {
      name: "Github",
      path: "https://github.com/abhisharma54",
      imgSrc: gitHubImg,
      imgAlt: "github-image",
    },
    {
      name: "Email",
      path: "mailto:abhisheksharma2920@gmail.com",
      imgSrc: emailImg,
      imgAlt: "gmail-image",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-[var(--logoColor)] dark:text-[var(--logoDarkColor)]">
        CONNECT
      </h1>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            className="w-full flex gap-4 items-center p-3 border bg-[var(--bgCardColor)] rounded-[var(--boxRadius)] transition duration-150 ease-in hover:bg-[var(--bgBtnColor)] hover:border-[#202020] hover:shadow-lg dark:border-zinc-700 dark:bg-[var(--bgDarkCardColor)]"
            target="_blank"
            to={link.path}
          >
            <img
              className="w-[40px]"
              src={link.imgSrc}
              alt={link.imgAlt}
              loading="lazy"
            />
            <h1 className="text-xl font-semibold text-white">LinkedIn</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Contact;
