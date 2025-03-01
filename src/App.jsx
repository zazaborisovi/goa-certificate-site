import React, { useEffect } from 'react'
import { Facebook } from 'lucide-react';

export default function App() {
  const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ top: document.getElementById(id).offsetTop-80 , behavior: "smooth" });
    };
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
  const programmingCourse = [
    {"li": "Programming Basics With Python"},
    {"li": "Html & Css"},
    {"li": "Git & Github"},
    {"li": "Javascript"},
    {"li": "React"},
    {"li": "Django"},
    {"li": "MYSQL"},
    {"li": "AI(Artificial Inteligence) & Algorithms"}
  ]
  return (
    <div className='bg-slate-800'>
      <header className='bg-black h-20 w-full *:text-xl *:text-emerald-800 flex items-center *:h-max overflow-hidden justify-between sticky top-0'>
        <img src="c:/Users/x/Desktop/goa/GOA CERTIFICATE PROJECT/src/assets/goa logo.jpg" className='w-30 ml-10'/>
        <ul className='flex gap-5'>
          {
            headerList.map((item , index) => (
              <li onClick={() => scrollToSection(`section${index + 1}`)}>{item.li}</li>
            ))
          }
        </ul>
        <button className='mr-10' onClick={() => window.open('https://www.facebook.com/nika11keshelava/', '_blank')}>Join GOA</button>
      </header>
      <div className='h-auto pt-20 pb-20 flex justify-around' id='section1'>
        <div className='w-[35%] h-[400px] flex border-2 border-black p-10 rounded-4xl bg-black'>
          <p className='text-2xl w-fit font-sans font-extrabold flex items-center text-emerald-800'>
          GOA (Goal-Oriented Academy) isn't just the best place to learn programming—it’s where you become the best version of yourself. 
          At GOA, you don’t just master coding; you develop leadership skills, a strategic mindset, and the discipline to thrive in any challenge. 
          Whether you're building software or building yourself, GOA equips you with the skills, mindset, 
          and confidence to succeed as both a programmer and a person
          </p>
        </div>
        <div className='w-[35%]'>
        <iframe className='w-full h-full'
        src="https://www.youtube.com/embed/APg-_0_K6dc?si=74ZfRDpdfWA3xTnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        </div>
      </div>
      <div className='h-[250px] flex items-center flex-col gap-5 m-[50px]'>
        <h1 className='text-xl'>Reviews:</h1>
        <div className='flex gap-5 overflow-hidden justify-center w-full ScrollingDivs'>
          {
              reviews.map((item , index) => (
                  <div className='border-2 h-[200px] w-[20%] rounded-2xl bg-black *:text-green-800 flex flex-col items-center gap-2 *:text-xl p-5'>
                      <Facebook className='border-2 border-green-900 size-10 rounded-full p-2 self-start justify-self-start' onClick={() => window.open(item.link)}/>
                      <h1>{item.h1}</h1>
                  </div>
              ))
          }
        </div>
        
      </div>
      <div className='h-auto pt-20 flex flex-col gap-10 items-center pb-20' id='section2'>
        <h1 className='text-2xl'>Courses</h1>
        <div className='w-[100%] flex pl-10 pr-10'>
          <div className='h-[450px] border-2 border-black w-[25%] *:text-xl flex items-center flex-col p-10 gap-7 rounded-2xl bg-black text-green-800'>
            <h1 className='text-2xl border-b-2 w-[100%] text-center pb-4'>Programming Course</h1>
            <ol className='list-decimal flex flex-col gap-3' start={0}>
            {
              programmingCourse.map((item , index) => (
                <li>{item.li}</li>
              ))
            }
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
