import React from 'react'
import { Facebook } from 'lucide-react';
import CourseDivs from './components/CourseDivs.jsx';

export default function App() {
  const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ top: document.getElementById(id).offsetTop , behavior: "smooth" })
    }
  const headerList = [
      {"li": "Main"},
      {"li": "Courses"}
    ]
  const reviews = [
      {"h1": "Best Academy in the world.Best Mentors and best Friends❣️💚" , "link": "https://www.facebook.com/share/p/18fHEhmzJK/"},
      {"h1": "მეგობრული გარემო, კარგი მენტორები და დახვეწილი მასალა" , "link": "https://www.facebook.com/share/p/1EAZmUUnXA/"},
      {"h1": "გოა არის ადგილი სადაც შეიძენ ცოდნას და გამოცდილებას პროგრამირების სფეროში." , "link": "https://www.facebook.com/share/p/1Fdx2cTNQJ/"},
      {"h1": "GOA არის მსოფლიოში საუკეთესო აკადემია!" , "link": "https://www.facebook.com/share/p/15HB56TKk8/"},
      {"h1": "ყველაზე მეგობრული გარემო სადაც შემოსვლას არ ინანებთ ეს გოაა ❤ ❤" , "link": "https://www.facebook.com/share/p/18nfXJCRCe/"},
  ]
  return (
    <div className='bg-black'>
      <header className='bg-black h-20 w-full *:text-xl *:text-emerald-800 flex items-center *:h-max overflow-hidden justify-between sticky top-0'>
        <img src="../assets/goaLogo.jpg" alt='Goa Logo' className='w-30 ml-10'/>
        <ul className='flex gap-5'>
          {
            headerList.map((item , index) => (
              <li onClick={() => scrollToSection(`section${index + 1}`)}>{item.li}</li>
            ))
          }
        </ul>
        <button className='mr-10' onClick={() => window.open('https://www.facebook.com/nika11keshelava/', '_blank')}>Join GOA</button>
      </header>
      <div className='flex flex-col md:flex-row items-center justify-around px-5 py-5 gap-10' id='section1'>
        <div className='w-full md:w-[45%] flex border-2 border-black p-5 md:p-10  rounded-4xl bg-black shadow-[0px_1px_20px_5px] shadow-green-800'>
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
      <div className='flex flex-col items-center gap-5 my-10 px-5'>
        <h1 className='text-xl text-green-800'>Reviews:</h1>
        <div className='flex flex-wrap gap-10 justify-center w-full *:shadow-[0px_1px_20px_5px] *:shadow-green-800'>
          {
              reviews.map((item , index) => (
                  <div className='border-2 h-auto w-full sm:w-[45%] md:w-[30%] lg:w-[20%] rounded-2xl bg-black *:text-green-800 flex flex-col items-center gap-2 *:text-xl p-5'>
                      <Facebook className='border-2 border-green-900 size-10 rounded-full p-2 self-start' onClick={() => window.open(item.link)}/>
                      <h1 className='text-lg mt-3'>{item.h1}</h1>
                  </div>
              ))
          }
        </div>
        
      </div>
      <div className='py-10 flex flex-col gap-10 items-center px-5 w-full' id='section2'>
        <h1 className='text-2xl text-green-800'>Courses:</h1>
        <div className='w-full flex flex-wrap justify-center md:justify-around gap-10'>
          <CourseDivs />
        </div>
      </div>
    </div>
  )
}
