import React from 'react'
import {FaGithubSquare, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Fajar Baihaqi</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/glizzard27" className='hover:text-white'><FaGithubSquare/></a>
                <a href="https://www.instagram.com/fjrbhq03?igsh=MWV3aWhvY2YyZXZ2NQ==" className='hover:text-pink-500'><FaInstagram/></a>
                <a href="https://www.youtube.com/channel/UCyrA7W10FyByT10-M0Ru7NQ" className='hover:text-red-500'><FaYoutube/></a>
            </div>
        </div>
        
        <p className='text-gray-400'>@ 2024 | Fajar Baihaqi</p>
    </div>
  )
}

export default Footer