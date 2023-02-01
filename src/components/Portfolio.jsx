
import React from "react";
import reactEcommerce from "../assets/portfolio/reactEcommerce.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactEcommerce,
      demo: "https://magnificent-puppy-b6037d.netlify.app/#/",
      code: "https://github.com/ang3lcr/ecommerce2",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "www.google.com",
      code: "www.google.com",
    },
    {
      id: 3,
      src: navbar,
      demo: "www.google.com",
      code: "www.google.com",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "www.google.com",
      code: "www.google.com",
    },
    {
      id: 5,
      src: installNode,
      demo: "www.google.com",
      code: "www.google.com",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "https://sensational-torrone-83132d.netlify.app/",
      code: "https://github.com/ang3lcr/weatherAppV2",
    },
  ];

  return (
    <div
      name="proyectos"
      className="bg-gradient-to-b from-gray-900 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Proyectos
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Codigo</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Portfolio;