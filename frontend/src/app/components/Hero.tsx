import React from "react";
import Image from "next/image";
import Pdp from "../../../public/Images/noureddine.jpg"

const Hero = () => {
  return (
    <section id="Hero">
      <div className="flex flex-col justify-center gap-8 items-center mt-[3rem]">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={Pdp}
          alt="Image pdp"
        />
        <h1 className="font-bold text-white text-6xl title__page">
          Noureddine Maher
        </h1>
        <div className="flex  items-center gap-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64CCC5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
          </span>
          <p className="text-xs font-semibold text-gray-300 ">
            Working AT{" "}
            <span className="w-6 h-6 text-black rounded-full bg-[#64CCC5]  px-3 py-2  transition duration-300 ease-in-out cursor-pointer">
              STM TANGIER
            </span>{" "}
            as Frontend developper & Ui/Ux Designer
          </p>
        </div>
        <p className="w-max-content text-center text-gray-300 font-semibold text-sm">
          a versatile Full Stack Developer with a strong passion for creating
          digital experiences.
          <br /> My journey in the tech world began as a developer, specializing
          in the MERN stack,
          <br /> where I craft robust web applications.
        </p>
        <button className="title__page text-white border-2 border-[#64CCC5] rounded-md px-[5rem] py-[0.5rem]">
          <div className="flex gap-3">
          <p>Say Hello</p>
          <svg
            width={20}
            height={20}
            fill="#64CCC5"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M19.57 6.698a5.724 5.724 0 0 0-2.644 1.572c-.84-2.952-2.65-7.42-4.415-8.15a1.283 1.283 0 0 0-1.181.05c-1.104.643-1.823 2.709-1.194 6.624C7.71 2.353 6.863 2.36 6.472 2.353a.956.956 0 0 0-.873.597c-.263.584-.79 2.406.494 6.327C4.547 7.16 4.072 6.89 3.526 6.917a.969.969 0 0 0-.821.557c-.463.873-.41 3.068 1.027 6.34a2.946 2.946 0 0 0-1.773-.73 1.06 1.06 0 0 0-.853.544c-.584 1.073.642 4.083 2.157 6.124C4.49 21.427 6.947 24 10.515 24a8.047 8.047 0 0 0 1.489-.141.654.654 0 0 0-.25-1.284c-2.965.578-5.2-1.052-6.553-2.515-2.021-2.19-2.908-4.82-2.959-5.622.424.173 1.644.892 4.018 3.934a.65.65 0 0 0 1.059-.757c-3.337-5.066-3.664-8.132-3.555-9.166.982 1 3.433 4.671 5.28 7.445a.642.642 0 0 0 .88.199.642.642 0 0 0 .238-.873C6.312 8.16 6.446 4.952 6.67 3.874c.577.584 2.11 2.618 5.34 9.626a.642.642 0 0 0 .84.327.642.642 0 0 0 .366-.827c-3.132-8.504-1.772-11.385-1.252-11.712.674 0 2.567 3.247 3.748 7.502.07.263.141.52.205.77a4.094 4.094 0 0 0-.385.924c-.64 2.355-1.283 7.7-.045 9.17a1.194 1.194 0 0 0 1.04.444 1.688 1.688 0 0 0 1.232-.757c1.15-1.675.475-5.879-.443-9.557a4.832 4.832 0 0 1 2.567-1.84 1.283 1.283 0 0 1 1.284.307c.526.59 1.445 2.798-1.34 10.583a.654.654 0 0 0 1.231.436c2.22-6.206 2.568-10.204 1.084-11.886A2.528 2.528 0 0 0 19.57 6.7zm-2.888 11.918a.41.41 0 0 1-.218.186c-.48-.571-.48-3.953.045-6.727.995 4.795.417 6.2.173 6.54z"></path>
            </g>
          </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
