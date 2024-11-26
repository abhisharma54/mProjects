import React from 'react'

function ProjectCard({
  imgSrc,
  imgAlt,
  projectName,
  description,
}) {
  return (
    <div className='group relative w-[350px] h-[400px] flex flex-col gap-2 px-2 pt-2 pb-5 border bg-zinc-100 border-[#202020] cursor-pointer hover:bg-zinc-200 hover:text-white dark:hover:bg-black hover:shadow-2xl transition duration-150 ease-in dark:bg-transparent dark:border-yellow-400 overflow-hidden max-[550px]:w-full max-[550px]:h-[430px]'>
      <img className='w-full h-[340px] object-cover rounded-md border border-[#202020] shadow-md max-[550px]:h-[370px]' src={imgSrc} alt={imgAlt} loading='lazy' />
      <div className='w-full h-[50px] absolute bottom-0 left-0 p-2 rounded-t-lg transition-all duration-150 ease-in-out group-hover:h-[120px] group-hover:bg-[#202020dc]'>
      <h1 className='text-2xl font-bold pb-2 text-[#202020] dark:text-yellow-400 group-hover:text-yellow-400'>{projectName}</h1>
      <p className='text-[#202020] font-medium dark:text-white group-hover:text-white'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard