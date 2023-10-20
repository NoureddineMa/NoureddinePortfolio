import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div className="flex flex-col items-center mt-[8rem] gap-5">
      <p className="font-extrabold title__page text-center text-white text-3xl">
        A little bit About <br />
        me
      </p>
      <p className="font-light text-gray-300 mt-[1rem] text-center text-xs mb-[2rem]">
      "I'm Noureddine Maher, a Full Stack Developer with MERN stack expertise, doubling as a UI/UX designer and graphic artist. <br /> My portfolio speaks to my technical skills, creativity, and dedication to growth.  <br />Let's connect to create something impactful."
        <span className="text-[#64CCC5]">
          Let's connect to create and make a meaningful impact.
        </span>
      </p>

      <div className="flex flex-row justify-center gap-7">
        <div className="flex flex-col gap-1 shadow-md p-3 border-2 border-[#a3eae5]">
          <p className="font-bold text-white border-b-2 border-[#64CCC5] mb-3">
            {" "}
            - About Me
          </p>
          <span className="text-xs font-light text-gray-400">
            - Passionate about technology and design
          </span>
          <span className="text-xs font-light text-gray-400">
            - Enthusiastic Full Stack Developer
          </span>
          <span className="text-xs font-light text-gray-400">
            - Expertise in MERN Stack
          </span>
          <span className="text-xs font-light text-gray-400">
            - Creative UI/UX and Graphic Designer
          </span>
          <span className="text-xs font-light text-gray-400">
            - Committed to continuous learning
          </span>
        </div>
        <div className="flex flex-col gap-1 shadow-md p-3 border-2 border-[#a3eae5]">
          <p className="font-bold border-b-2 text-white border-[#64CCC5] mb-3">
            {" "}
            - My Skills
          </p>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- Front-end:</span> HTML, CSS,
            JavaScript
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- UI Frameworks:</span> React,
            Redux
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- Back-end:</span> Node.js,
            Express
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- Database:</span> MongoDB
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- Version Control:</span> Git
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-1 shadow-md p-3 border-2 border-[#a3eae5]">
          <p className="font-bold border-b-2 border-[#64CCC5] mb-3 text-white">
            {" "}
            - Learning & Growth
          </p>
          <span className="text-xs font-light text-gray-400">
            - Constantly expanding my skill set
          </span>
          <span className="text-xs font-light text-gray-400">
            - Dedicated to building new projects
          </span>
          <span className="text-xs font-light text-gray-400">
            - Passionate about helping others through technology
          </span>
        </div>
        <div className="flex flex-col gap-1 shadow-md p-3 border-2 border-[#a3eae5]">
          <p className="font-bold border-b-2 border-[#64CCC5] text-white mb-3">
            {" "}
            - Get In Touch
          </p>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- Email:</span>{" "}
            noureddinemaher13@gmail.com
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- LinkedIn:</span> Noureddine
            Maher
          </span>
          <span className="text-xs font-light text-gray-400">
            <span className="text-[#64CCC5]">- GitHub: </span> NoureddineMa
          </span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
