import React, { useState } from 'react'
import goaLogo from '../assets/goaLogo.jpg'
import { AlignJustify } from 'lucide-react'

export default function Header() {
  const [menu , setMenu] = useState(false)

  const handleActive = () =>{
    setMenu(!menu)
  }

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ top: document.getElementById(id).offsetTop , behavior: "smooth" })
  }
  const headerList = [
    {"li": "Main"},
    {"li": "Courses"}
  ]
  const sandwich = () => {
    return(
      <div className='flex sm:hidden mr-10 w-10 justify-center'>
        <AlignJustify className='size-20' onClick={() => handleActive()} />
      </div>
    )
  }
  const popup = () =>{
    if (menu == true){
      return(
        <div className='text-emerald-800 fixed bg-black rounded-4xl top-[15%] left-[10%] w-[80%] h-[70%] flex items-center flex-col shadow-slate-700 shadow-[0px_2px_200px_150px] border-4 border-green-950'>
          <h1 className='relative h-fit text-4xl text-red-700 self-end p-5' onClick={() => handleActive()}>X</h1>
          <div className='flex flex-col justify-start w-full h-[75%] gap-30'>
            <ul className='text-4xl flex flex-col items-center  *:border-green-600 *:border-b-2 gap-1 *:w-full *:text-center *:p-10'>
              {
                headerList.map((item , index) => (
                  <li onClick={() => scrollToSection(`section${index + 1}`)}>{item.li}</li>
                ))
              }
            </ul>
            <button className='text-3xl' onClick={() => window.open('https://www.facebook.com/nika11keshelava/', '_blank')}>Join GOA</button>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      {popup()}
      <header className='bg-black h-20 w-full *:text-xl *:text-emerald-800 flex items-center *:h-max overflow-hidden justify-between sticky top-0'>
        <img src={goaLogo} alt='Goa Logo' className='w-30 ml-10'/>
        <ul className='sm:flex gap-5 hidden '>
        {
            headerList.map((item , index) => (
            <li onClick={() => scrollToSection(`section${index + 1}`)}>{item.li}</li>
            ))
        }
        </ul>
        <button className='mr-10 hidden sm:block' onClick={() => window.open('https://www.facebook.com/nika11keshelava/', '_blank')}>Join GOA</button>
        {sandwich()}
      </header>
    </>

  )
}
