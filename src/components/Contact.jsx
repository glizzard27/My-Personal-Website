import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {

    const mobileNumber = "+6282213360779"
    const email = "muhammadfajarbaihaqi27@gmail.com"
    const workHours = "10.00 - 17.00 WIB"
  return (
    <div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center' id="contact">
            <ul className='my-auto pr-6'>
                <li className='flex'>
                    <AiFillLinkedin className='w-[70px], h-auto text-gray-300'/>
                    <div className='m-5'>
                        <h3 className='text-lg font-bold text-gray-200 text-start'>Kontak</h3>
                        <p className='text-gray-400 text-start text-sm md:text-base'>Telepon: {mobileNumber}</p>
                        <p className='text-gray-400 text-start text-sm md:text-base'>Email: {email}</p>
                    </div>
                </li>

                <li className='flex'>
                    <AiFillGithub className='w-[70px], h-auto text-gray-300'/>
                    <div className='m-5'>
                        <h3 className='text-lg font-bold text-gray-200 text-start'>Jam Kerja</h3>
                        <p className='text-gray-400 text-start text-sm md:text-base'>Senin - Jumat: {workHours}</p>
                    </div>
                </li>
            </ul>

            <form action='https://getform.io/f/pbmqweob' method='POST' className='max-w-6xl p-5 md:p-12 ' id="form">
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Nama Anda" 
                    name="nama" 
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Anda" 
                    name="email" 
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <textarea
                    name="textarea" 
                    id="textarea" 
                    cols="30"
                    rows="4"
                    placeholder="Pesan Anda" 
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <button type="submit" className='w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#05445E] via-[#189AB4] to-[#75E6DA]'>Kirim Pesan</button>
            </form>
    </div>
  )
}

export default Contact