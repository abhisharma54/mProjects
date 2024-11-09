import React from 'react'

function About() {
  return (
    <div className='w-full bg-zinc-100 p-5 pb-20 dark:bg-[#303030]'>
        <h1 className='text-3xl font-bold text-[#202020] dark:text-white'>mProjects</h1>
        <p className='text-lg text-justify mt-2 font-medium text-[#202020] dark:text-white'>mProjects stands for Multiple Projects. This application includes various utility tools, such as a password generator, currency converter, BMI calculator, unit converter, and an AI chat interface powered by the Google Generative AI package.</p>
        <p className='text-lg text-left mt-5 font-bold text-[#202020] dark:text-white'>Projects :</p>
        <ul className='list-disc ml-4 text-left'>
        <li className='text-[#202020] font-medium mt-3 mb-3 dark:text-white'>Password Generator to generate unique and strong password.</li>
        <li className='text-[#202020] font-medium mb-3 dark:text-white'>Currency conversion with real-time exchange rates</li>
        <li className='text-[#202020] font-medium mb-3 dark:text-white'>A BMI calculator to help users track their health.</li>
        <li className='text-[#202020] font-medium mb-3 dark:text-white'>A versatile unit converter for various measurements.</li>
        <li className='text-[#202020] font-medium mb-3 dark:text-white'>An AI Chat that answers questions and provides information.</li>
        </ul>
    </div>
  )
}

export default About