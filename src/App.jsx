import React from 'react'
import { Facebook } from 'lucide-react';
import CourseDivs from './components/CourseDivs.jsx';
import Header from './components/Header.jsx'
import FooterDiv from './components/FooterDiv.jsx';

export default function App() {
  const reviews = [
      {"h1": "Best Academy in the world.Best Mentors and best Friends❣️💚" , "link": "https://www.facebook.com/share/p/18fHEhmzJK/"},
      {"h1": "მეგობრული გარემო, კარგი მენტორები და დახვეწილი მასალა" , "link": "https://www.facebook.com/share/p/1EAZmUUnXA/"},
      {"h1": "გოა არის ადგილი სადაც შეიძენ ცოდნას და გამოცდილებას პროგრამირების სფეროში." , "link": "https://www.facebook.com/share/p/1Fdx2cTNQJ/"},
      {"h1": "GOA არის მსოფლიოში საუკეთესო აკადემია!" , "link": "https://www.facebook.com/share/p/15HB56TKk8/"},
      {"h1": "ყველაზე მეგობრული გარემო სადაც შემოსვლას არ ინანებთ ეს გოაა ❤ ❤" , "link": "https://www.facebook.com/share/p/18nfXJCRCe/"},
  ]

  return (
    <div className='bg-black cursor-default selection:bg-teal-400'>
      
      <Header />
      {/* main section */}
      <div className='flex flex-col md:flex-row items-center justify-around px-5 py-5 gap-10' id='section1'>
        <div className='w-full md:w-[45%] flex border-2 border-black p-5 md:p-10  rounded-4xl bg-black shadow-[0px_1px_20px_5px] shadow-green-800 hover:scale-115 transition-all duration-500'>
          <p className='text-lg md:text-xl w-fit font-sans font-extrabold flex items-center text-emerald-800 '
          >
          GOA (Goal-Oriented Academy) isn't just the best place to learn programming—it’s where you become the best version of yourself. 
          At GOA, you don’t just master coding; you develop leadership skills, a strategic mindset, and the discipline to thrive in any challenge. 
          Whether you're building software or building yourself, GOA equips you with the skills, mindset, 
          and confidence to succeed as both a programmer and a person
          </p>
        </div>
        <div className='w-full md:w-[40%] ht-5 md:mt-2 h-full'>
        <iframe className='w-full h-60 md:h-80 lg:h-96'
        src="https://www.youtube.com/embed/APg-_0_K6dc?si=74ZfRDpdfWA3xTnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        </div>
      </div>
      {/* review section */}
      <div className='flex flex-col items-center gap-5 my-10 px-5'>
        <h1 className='text-xl text-green-800'>Reviews:</h1>
        <div className='flex flex-wrap gap-10 justify-center w-full *:shadow-[0px_1px_20px_5px] *:shadow-green-800'>
          {
              reviews.map((item , index) => (
                  <div className='border-2 h-auto w-full sm:w-[45%] md:w-[30%] lg:w-[20%] rounded-2xl bg-black *:text-green-800 flex flex-col items-start gap-2 *:text-xl p-5
                   hover:scale-125 transition-all duration-500 '>
                    <div className='group flex justify-start w-fit items-center gap-5 self-start hover:text-white' onClick={() => window.open(item.link)}>
                      <Facebook className='border-2 border-green-900 size-10 rounded-full p-2 self-start group group-hover:border-white'/>
                      <p className='select-none'>link</p>
                    </div>
                      <h1 className='text-lg mt-3'>{item.h1}</h1>
                  </div>
              ))
          }
        </div>
      </div>
      {/* course section */}
      <div className='py-10 flex flex-col gap-10 items-center px-5 w-full sm:h-[600px] pb-20' id='section2'>
        <h1 className='text-2xl text-green-800'>Courses:</h1>
        <div className='w-full flex flex-wrap justify-center md:justify-around gap-10 *:hover:scale-125 *:duration-500 transition-all'>
          <CourseDivs />
        </div>
      </div>
      <FooterDiv />
    </div>
  )
}
