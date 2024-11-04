import React from 'react'

function About() {
  return (
    <div className='w-full bg-zinc-100 p-5 dark:bg-yellow-100'>
        <h1 className='text-3xl font-bold text-[#202020]'>mProjects</h1>
        <p className='text-justify mt-2 font-medium text-[#202020]'>mProjects stands for Multiple Projects. This application includes various utility tools, such as a password generator, currency converter, BMI calculator, unit converter, and an AI chat interface powered by the Google Generative AI package.</p>
        <div className='flex flex-col items-start gap-2 mt-5'>
        <p className='text-lg font-bold text-[#202020]'>Projects :</p>
        <li className='text-[#202020] font-medium'>Password Generator to generate unique and strong password.</li>
        <li className='text-[#202020] font-medium'>Currency conversion with real-time exchange rates</li>
        <li className='text-[#202020] font-medium'>A BMI calculator to help users track their health.</li>
        <li className='text-[#202020] font-medium'>A versatile unit converter for various measurements.</li>
        <li className='text-[#202020] font-medium'>An AI Chat that answers questions and provides information.</li>
        </div>
    </div>
  )
}

export default About