
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Title from './Title';

const Hero = () => {
  return (
    <>
      <section
        className="hero h-screen flex items-center justify-center text-black"
        style={{
          backgroundImage: "url('hero.jpg')",
          backgroundPosition: "center-2", // Positions the image at the center
          backgroundSize: "cover", // Scales the image to cover the entire section
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row flex-col absolute bottom-50 left-8 flex space-x-4 ">
            <div className='relative top-20 w-96 h-auto left-64'>
            <Title title="Committed to your Success" />
            </div>
            {/* Links for Readiness / Opportunities / Success */}
            
             
        <div className="bottom-14 text-black text-xl  font-medium relative h-62 w-32 ">
            <div className=" absolute h-11 w-11 start-0.5  -left-1 bottom-20  justify-top-10 flex space-x-4 ">
              <Link to="/readiness" className="text-black hover:underline">Readiness</Link>
              <span>|</span>
              <Link to="/opportunities" className="text-black  hover:underline ">Opportunities</Link>
              <span>|</span>
              <Link to="/success" className="text-black hover:underline">Success</Link>
            </div>
            </div>

            {/* Buttons for Personal, Corporate, Social Solutions */}
            <div className="flex-col  sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 relative h-1 w-42 -right-full
             ">
              <a href="https://conductivity.com.pk/" target="_blank" rel="noopener noreferrer">
              <div className='absolute -right-full 
              -top-80 h-1 w-80'>
              <button className="primary-btn bg-blue-950 text-white w-full sm:w-auto px-4 py-3 rounded hover:bg-blue-900 transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">Personal Solutions</button>
              </div>
              </a>
              <Link to="/corporate-solutions  ">
              <div className="absolute -right-72 -top-64 h-1 w-80">
                <button className="primary-btn bg-blue-950 text-white w-full sm:w-auto px-3 py-3 rounded hover:bg-blue-900 transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Corporate Solutions
                </button>
                </div>
              </Link>

              <Link to="/social-solutions">
              <div className="absolute -right-48 -top-48 h-1 w-80">
                <button className="primary-btn bg-blue-950 text-white w-full sm:w-auto px-3 py-3 rounded hover:bg-blue-900 transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Social Solutions 
                </button>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
