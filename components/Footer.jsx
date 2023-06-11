import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='h-20 flex items-center justify-around px-2 bg-gray-800'>
            <Link href={'https://www.linkedin.com/in/agustin-molina-994635138/'} target={'_blank'}>
            <h1 className='text-white font-principal text-center md:text-xl'>Developed by <span className='text-indigo-500 font-bold hover:text-indigo-400 duration-300'>AGUSTIN MOLINA</span></h1>
            </Link>
            <Link href='/admin' className='bg-indigo-500 border-2 border-black rounded-md px-4 py-2 font-principal font-semibold hover:bg-black hover:text-white duration-500' target={'_blank'}>
            <h1 className='text-white font-principal text-center md:text-xl'>Admin</h1>
            </Link>
        </div>
    </div>
  )
}

export default Footer