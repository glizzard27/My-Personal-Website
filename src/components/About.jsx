import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import {
    DiJsBadge,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiAndroid,
    DiBootstrap,
    DiJava,
    DiSqllite,
    DiGithubBadge
} from 'react-icons/di'
import {
    SiTailwindcss,
    SiKotlin,
    SiFigma,
    SiAdobeillustrator
} from 'react-icons/si'

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id="about">
        {/* Skills in Mobile Screen View or Below Medium Screen */}
        <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
            <DiHtml5 className='text-orange-600'/>
            <DiCss3 className='text-blue-600'/>
            <DiJsBadge className='text-yellow-500'/>
            <DiBootstrap className='text-purple-600'/>
            <DiReact className='text-blue-500'/>
            <SiTailwindcss className='text-cyan-500'/>
            <DiNodejsSmall className='text-green-500'/>
            <DiAndroid className='text-lime-600'/>
            <SiKotlin className='text-violet-500'/>
            <DiJava className='text-orange-500'/>
            <DiSqllite className='text-blue-400'/>
            <DiGithubBadge className='text-white'/>
            <SiFigma className='text-pink-500'/>
            <SiAdobeillustrator className='text-orange-400'/>
        </div>

        {/* Section 1 */}
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project1} alt="project 1" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Development</h2>
            <p className='text-gray-300 mb-4'>
                Sebagai seorang Front-end developer dengan pengalaman +- 3 tahun, Saya sudah membuat berbagai projek website yang baik secara visual dan responsif, Seperti Website Kedai Kopi Kenangan Sejiwa, Website RT/RW, dan lain-lain.
            </p>

            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className='text-orange-500'/>
                <DiCss3 className='text-blue-500'/>
                <DiJsBadge className='text-yellow-500'/>
                <DiBootstrap className='text-purple-500'/>
                <DiReact className='text-blue-500'/>
                <SiTailwindcss className='text-cyan-500'/>
                <DiNodejsSmall className='text-green-500'/>
            </div>
        </div>

        {/* Section 2 */}
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-lime-600 via-violet-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project3} alt="project 3" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Android Development</h2>
            <p className='text-gray-300 mb-4'>
                Sebagai seorang Android developer dengan pengalaman +- 6 Bulan, Saya sudah membuat beberapa projek aplikasi android dengan menggunakan bahasa pemrograman Kotlin dan Java, Seperti aplikasi Cryptopedia, Github User, The Story App dan KidLink.
            </p>

            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiAndroid className='text-lime-600'/>
                <SiKotlin className='text-violet-500'/>
                <DiJava className='text-orange-500'/>
                <DiSqllite className='text-blue-400'/>
                <DiGithubBadge className='text-white'/>
            </div>
        </div>

        {/* Section 3 */}
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project6} alt="project 6" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>UI Design</h2>
            <p className='text-gray-300 mb-4'>
                Sebagai seorang UI Designer dengan pengalaman +- 9 Bulan, Saya sudah membuat projek desain website & mobile yang menarik secara visual dan memperhatikan prinsip desain.
            </p>

            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <SiFigma className='text-pink-500'/>
                <SiAdobeillustrator className='text-orange-400'/>
            </div>
        </div>
    </div>
  )
}

export default About