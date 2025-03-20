import React from 'react'
import { Instagram, LucideFacebook, LucideYoutube } from 'lucide-react'

export default function FooterDiv() {
    const Socials = [
        { icon: <LucideFacebook className="text-blue-500 hover:text-white transition" />, link: "https://www.facebook.com/nika11keshelava/" },
        { icon: <LucideYoutube className="text-red-600 hover:text-white transition" />, link: "https://www.youtube.com/channel/UCRjoMwrWoD8_KNioRwWlq8g" },
        { icon: <Instagram className="text-purple-700 hover:text-white transition" />, link: "https://www.instagram.com/goal_oriented_academy__goa/?hl=en" }
    ];
    return (
    <div className='bg-slate-900 h-auto p-15 gap-10 text-gray-500 flex flex-col items-center justify-center '>
        <h1 className='text-xl'>Goal Oriented Academy Socials:</h1>
        <div className='*:size-10 flex gap-4'>
            {
                Socials.map((item) => (
                   <a href={item.link} className='*:size-10'> {item.icon} </a>
                ))
            }
        </div>
    </div>
  )
}
