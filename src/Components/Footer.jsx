import React from 'react'

function Footer() {
  return (
    <div className='bg-[#101010] p-4 md:p-8 lg:p-16 mt-16 flex flex-col justify-around'>
         <div className='flex flex-col md:flex-row md:justify-between'>
            <div>
                <h1 className='text-white text-2xl md:text-3xl lg:text-4xl capitalize'>it’s your life.</h1>
                <h1 className='mt-1 lg:mt-4 text-2xl md:text-3xl lg:text-4xl text-white capitalize'><span className='text-[#00FFA3] text-sm md:text-lg mr-1 items-center'>2020 lobro</span>Take the keys.</h1>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-around'>
                <div className='flex justify-between w-full items-center email'>
                    <h1 className='text-white'>lobro@gmail.com</h1>
                    <button className='bg-[#00FFA3] text-black mt-2 md:mt-0 px-2 py-2 md:py-4 md:px-7 font-semibold'>Get Started</button>
                </div>
                <div className='w-100px mt-4 md:mt-2 h-[2px] bg-[#00ffa3]'></div>
            </div> 
         </div>
         <hr  className='mt-8'/>
        <ul className='flex text-white w-full text-[10px] md:text-lg  md:w-4/5 justify-around mt-8 cursor-pointer '>
            <li>Explore</li>
            <li>About us</li>
            <li>How it works</li>
            <li>Community</li>
        </ul>
    </div>
  )
}

export default Footer