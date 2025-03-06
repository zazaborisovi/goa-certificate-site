import React, { useState } from 'react'

export default function CourseDivs() {
    const [active , setActive] = useState(null)
    const Courses = [
        {
            title: "Programming Course",
            listedItems: [
                "Programming Basics With Python",
                "Html & Css",
                "Git & Github",
                "Javascript",
                "React",
                "Django",
                "MYSQL",
            ],
        },
        {
            title: "Algorithms & AI",
            listedItems: [
                "Algorithms",
                "C++",
                "AI"
            ]
        },
        {
            title: "Game Development",
            listedItems: [
                "Roblox Studio",
                "Lua",
                "Scripts, Animations, and GUI",
                "Servers And Clients"
            ]
        },
        {
            title: "Graphic Design",
            listedItems: [
                "Adobe Photoshop and Adobe Illustrator",
                "Photoshop Interface",
                "Working With Photoshop Applications"
            ]
        }
    ]
    const handleActive = (index) => {
        setActive((prevActive) => {
            if (prevActive === index) {
                return null
            } else {
                return index
            }
        })
    }
    const details = (item , index) => {
        if (active === index){
            return(
                <div id={`detail${index}`} className='flex items-end flex-col'>
                    <ol className='text-lg list-decimal flex flex-col w-[80%] items-start' start={0}>
                    {
                    item.listedItems.map((i) => (
                        <li>{i}</li>
                    ))}
                    </ol>
                </div>
            )
        }
    }
    return (
        <>
        {
            Courses.map((item , index) => (
                <div 
                className='
                h-fit w-[60%] md:w-fit bg-black *:text-green-800 border-2 border-black rounded-2xl flex flex-col items-center gap-5 p-4 
                shadow-[0px_1px_20px_5px] shadow-green-800
                '>
                    <h1 className='text-2xl'>{item.title}</h1>

                    {details(item , index)}

                    <div className='border-t-2 w-fit border-b-2 hover:border-white hover:text-white cursor-default' id={`details${index}`}
                    onClick={() => handleActive(index) }>
                        {active === index ? 'Click to hide details' : 'Click to show details'}
                    </div>
                </div>
            ))
        }
        </>
  )
}
