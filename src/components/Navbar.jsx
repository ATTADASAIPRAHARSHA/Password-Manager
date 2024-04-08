import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-blue-200 flex gap-x-3  p-5 px105 justify-between bprder rounded-lg'>
        <div className='md:text-3xl'>
            <span className='text-green-800'>&lt;</span>
           PassOp/
           <span className='text-green-600'>&gt;</span>
        </div>
    <div className='flex gap-5'>
      <a className='md:text-2xl hover:font-bold ' href='/'>Home</a>
      <a className='md:text-2xl hover:font-bold' href='/about'>About</a>
      <a className='md:text-2xl hover:font-bold'href='/contactus'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar