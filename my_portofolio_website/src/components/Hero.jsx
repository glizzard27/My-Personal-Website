import React from 'react'
import profilepic from '../assets/profilepic.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'

const Hero = () => {
    
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
        <div className='max-w-[800px] text-center md:text-start'>
           <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
             <span className='font-light italic'>Halo Saya,</span><br />
             <span className='font-bold italic'>MUHAMMAD FAJAR BAIHAQI</span><br />
             <TypeAnimation sequence={[
                "Front-End Developer",2000,
                "Android Developer",2000,
                "UI Designer",2000
            ]}
                wrapper='span'
                speed={25}
                repeat={Infinity}
                className='font-medium italic text-[#98f5e1]'
                />
           </p>
           {/* <h2 className='text-gray-300'>Dengan Pengalaman 5 Tahun</h2>  */}
           <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#05445E] via-[#189AB4] to-[#75E6DA] rounded-xl'>Lihat CV Saya</button>
                <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl'>Lihat Pekerjaan Saya</button>
           </div>
        </div>
        
        {/* Shiny Effect */}
        <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
            <div className='hidden md:block'>
                <ShinyEffect left={100} top={200} size={1400}/>
            </div>
            <ShinyEffect left={-100} top={0} size={1200}/>
        </div>

        <img src={profilepic} alt="Gambar Profil Saya" className='w-[250px] md:w-[500px]'/>
    </div>
  )
}

export default Hero