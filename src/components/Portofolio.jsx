import React, { useState } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { AiFillGithub } from 'react-icons/ai'

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "Website Kopi Kenangan Sejiwa",
        links: {
            site: "https://fajar-baihaqi-dev-kopi-kenangan-sejiwa.vercel.app/",
            github: "https://github.com/glizzard27/kedai-kopi-kenangan-sejiwa.git"
        }
    },
    {
        img: project2,
        title: "Project #2",
        description: "Website RT/RW",
        links: {
            site: "#",
            github: "#"
        }
    },
    {
        img: project3,
        title: "Project #3",
        description: "Aplikasi The Story App",
        links: {
            site: "#",
            github: "https://github.com/glizzard27/The-Story-App.git"
        }
    },
    {
        img: project4,
        title: "Project #4",
        description: "Aplikasi Github User",
        links: {
            site: "#",
            github: "https://github.com/glizzard27/Github-User-App.git"
        }
    },
    {
        img: project5,
        title: "Project #5",
        description: "Aplikasi Cryptopedia",
        links: {
            site: "#",
            github: "https://github.com/glizzard27/Cryptopedia.git"
        }
    },
    {
        img: project6,
        title: "Project #6",
        description: "Desain UI Website Tunggul Garageworks",
        links: {
            site: "https://www.figma.com/design/ckZoERxCVwWnG8Be8OaclB/Tunggul-GarageWorks?node-id=0-1&t=qBYz3hjmOnOnnStp-1",
            github: "#"
        }
    }
]


const Portofolio = () => {
    const [currentProject, setCurrentProject] = useState(0)


  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id="portofolio">
        <div className='glass p-6 w-full border-2 max-w-[600px]'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>
            <p className='text-gray-200 my-4'>
                {projects[currentProject].description}
            </p>
            <div className='flex space-x-4'>
                <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>Kunjungi Situs</a>
                <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub/></a>
            </div>
        </div>

        <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
            {projects.map((project, index) => (
            <li key={index} onClick={() => setCurrentProject(index)} className={'cursor-pointer text-gray-200 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : ""}'}>{project.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Portofolio