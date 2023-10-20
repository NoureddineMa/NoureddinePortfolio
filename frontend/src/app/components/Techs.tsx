import React from 'react'
import TechCard from './TechCard'
import techData from '../../stack.json'

const Techs = () => {
  return (
    <section className='px-[18rem]'  id="tech">
    <div className="flex flex-col items-center mt-[8rem] gap-5">
      <p className="font-extrabold title__page text-center text-3xl text-white">
        Techs
      </p>
      <p className="font-light text-center mt-[1rem] text-xs text-gray-300">
      "I excel in a wide range of modern web development technologies. With expertise in HTML, CSS, and JavaScript, I create visually appealing and interactive web designs. I'm adept at using Tailwind CSS for quick and responsive layouts, React and Redux for dynamic user interfaces, and Node.js and Express for scalable real-time applications. I'm also skilled in database management with MongoDB and maintain code integrity through seamless Git collaboration. As a Full Stack Developer, I deliver efficient and robust web solutions."
      </p>
    <div className='flex flex-col lg:flex-row mt-[1rem] md:flex-row gap-4 justify-center items-center  flex-wrap'>
    {techData.images.map((tech, index) => (
        <TechCard
          key={index}
          imageSrc={tech.imageSrc}
          altText={tech.altText}
          label={tech.label}
        />
      ))}     
    </div>
    </div>
  </section>
  )
}

export default Techs
