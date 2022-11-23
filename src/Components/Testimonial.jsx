import React from 'react'

function Testimonial() {
  return (
    <div className='testimonial mt-16 mx-4  md:mx-16 flex flex-col md:flex-row md:justify-between h-[40vh]'>
        <div className='flex flex-col w-full md:w-3/6'>
            <h1 className='text-[#00FFA3] text-lg md:text-xl'>Testimonials</h1>
            <h1 className='text-white text-lg md:text-xl mt-1 md:mt-4'>jonathan sawab</h1>
            <h1 className=' text-sm md:text-lg text-white font-thin capitalize'>the yamen group</h1>
        </div>
        <div className=' text-xl mx-8 md:text-3xl lg:text-4xl mt-4 md:mt-0 md:w-4/5 lg:w-1/2 flex'>
            <span className='text-[#00FFA3]'>“</span><p className='text-white'>Id viverra ultricies nascetur sed in. Magna sed ultricies risus nunc  vulputate sit. Et massa egestas amet neque quam.<span className='text-[#00FFA3]'>”</span></p>
        </div>
    </div>
  )
}

export default Testimonial