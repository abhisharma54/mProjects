import React from 'react'

function ProjectCard({
  imgSrc,
  imgAlt,
  projectName,
  description,
}) {
  return (
    <div className='w-[350px] h-[400px] flex flex-col gap-2 px-2 pt-2 pb-5 border-[1px] bg-zinc-100 border-[#202020] cursor-pointer hover:bg-zinc-200 hover:text-white dark:hover:bg-black hover:shadow-2xl transition duration-150 ease-in dark:bg-transparent dark:border-yellow-400 max-[550px]:w-full max-[550px]:h-[430px]'>
      <img className='w-full h-[250px] object-cover rounded-md border-[1px] border-[#202020] shadow-md max-[550px]:h-[300px]' src={imgSrc} alt={imgAlt} loading='lazy' />
      <h1 className='text-2xl font-semibold text-[#000] dark:text-yellow-400'>{projectName}</h1>
      <p className='text-[#000] dark:text-white'>{description}</p>
    </div>
  )
}

export default ProjectCard