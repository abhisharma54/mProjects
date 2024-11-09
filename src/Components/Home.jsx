import React from 'react'
import { ProjectCard } from './index'
import { bmiImg, currencyImg, unitImg, passwordImg, aiChatImg, FoodRecipeImg } from '../assets/index'
import { Link } from 'react-router-dom'

function Home() {
    const projectItem = [
        {
            name: 'Password Generator',
            description: 'Create strong and secure passwords effortlessly with our password generator.',
            src: passwordImg,
            alt: 'password-img',
            path: '/password-generator'
        },
        {
            name: 'BMI Calculator',
            description: 'Quickly determine your Body Mass Index (BMI) to assess your weight status.',
            src: bmiImg,
            alt: 'bmi-img',
            path: '/bmi-calculator'
        },
        {
            name: 'Units Converter',
            description: 'Simplify your measurements with our comprehensive units converter.',
            src: unitImg,
            alt: 'unit-img',
            path: '/unit-converter'
        },
        {
            name: 'Currency Converter',
            description: 'Effortlessly convert currencies with our easy-to-use tool.',
            src: currencyImg,
            alt: 'currency-img',
            path: '/currency-converter'
        },
        {
            name: 'AI Chat (Gemini)',
            description: 'Chat with Intelligent AI for quick answers and assistance. Whether you have questions or need support.',
            src: aiChatImg,
            alt: 'ai-img',
            path: '/ai-chat'
        },
        {
            name: 'Food Recipe',
            description: 'Find simple and tasty recipes for every occasion. Explore a variety of dishes to suit your taste and skill level.',
            src: FoodRecipeImg,
            alt: 'food-recipe-img',
            path: '/food-item'
        },
    ]
  return (
    <div>
        <div className='flex flex-wrap gap-10 justify-center'>
            {projectItem.map((project, index) => (
                <Link to={project.path} className='list-none' key={index}>
                    <ProjectCard imgSrc={project.src} imgAlt={project.alt} projectName={project.name} description={project.description} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home