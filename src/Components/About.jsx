import React from "react";

function About() {
  const projects = [
    {
      name: "Password Generator",
      description: "Password Generator to generate unique and strong password.",
    },
    {
      name: "BMI Calculator",
      description: "A BMI calculator to help users track their health.",
    },
    {
      name: "Unit Converter",
      description:
        "Easily converts values across different units for length, weight, temperature, and more.",
    },
    {
      name: "Currency Converter",
      description:
        "Provides real-time currency conversion using up-to-date exchange rates.",
    },
    {
      name: "AI Chat(Gemini)",
      description:
        "An intelligent chatbot that answers questions and offers helpful information in real time.",
    },
    {
      name: "Food Recipe",
      description:
        "Explore and discover a variety of delicious food recipes with easy-to-follow instructions.",
    },
  ];

  return (
    <div className="w-full bg-[var(--bgCardColor)] p-5 pb-20 dark:bg-[var(--bgDarkCardColor)] rounded-[var(--boxRadius)]">
      <h1 className="text-3xl font-bold text-white">mProjects</h1>
      <p className="text-lg text-justify mt-2 font-medium text-[var(--textColor)]">
        <span className="text-[var(--logoColor)] dark:text-[var(--hoverBtnColor)] font-bold">
          mProjects
        </span>{" "}
        stands for Multiple Projects. This application includes various utility
        tools, such as a password generator, currency converter, BMI calculator,
        unit converter, and an AI chat interface powered by the Google
        Generative AI package.
      </p>
      <p className="text-lg text-left mt-5 font-bold text-white">Projects :</p>
      <ul className="list-disc ml-4 text-left">
        {projects.map((list) => (
          <li
            key={list.name}
            className="text-[var(--textColor)] font-medium mt-3 mb-3"
          >
            <span className="text-[var(--logoColor)] dark:text-[var(--hoverBtnColor)] font-bold">
              {list.name}
            </span>
            : {list.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
