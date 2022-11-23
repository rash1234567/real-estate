import React from 'react';
import aboutArrow from '../Images/aboutArrow.png';
import aboutImgOne from '../Images/aboutImgOne.png';
import aboutImgTwo from '../Images/aboutImgTwo.png';
import aboutImgThree from '../Images/aboutImgThree.png'

function Liokotre() {
  return (
    <div className='bg-black flex flex-col'>
        <div className='flex flex-col ml-4 mt-12 lg:ml-16 lg:mt-10'>
            <h1 className='text-[#00FFA3] text-xl  md:text-2xl'>What is Likotre</h1>
            <p className='text-white text-2xl lg:text-5xl lg:w-4/5 break-word lg:leading-[70px]'>Tempus malesuada massa tempus sagittis, Faucibus dui</p>
        </div>
        <div className='flex flex-col mx-4 mt-4 lg:flex-row lg:mx-16 lg:mt-16 justify-between aboutOne'>
            <div className='flex flex-col lg:w-2/6'>
                <h1 className='text-[#00FFA3] text-lg md:text-2xl'>01</h1>
                <h1 className='text-white text-2xl mt-2 md:text-4xl lg:mt-4'>Browse</h1>
                <p className='text-sm md:text-lg font-thin text-[#828282] w-full break-word lg:mt-4'>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus,</p>
                <h1 className='text-[#00FFA3] mt-2 text-sm md:text-lg flex items-center lg:mt-4'>Browse All<span><img src={aboutArrow} className=' ml-1 md:ml-2 w-[10px] md:w-3 md:h-3' /></span></h1>
            </div>
            <img src={aboutImgOne} className='mt-4 md:w-4/5 md:self-center lg:mt-0 lg:w-1/2 lg:self-end'/>
        </div>
        <div className='flex flex-col-reverse mx-4 mt-4 lg:flex-row lg:mx-16 lg:mt-16 justify-between'>
            <img src={aboutImgTwo} className='mt-4 md:w-4/5 md:self-center lg:mt-0 lg:w-1/2 lg:self-end' />
            <div className='flex flex-col lg:w-2/6'>
                <h1 className='text-[#00FFA3] text-lg md:text-2xl'>02</h1>
                <h1 className='text-white text-2xl mt-2 md:text-4xl lg:mt-4'>Learn</h1>
                <p className='text-sm md:text-lg font-thin text-[#828282] w-full break-word lg:mt-4'>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus,</p>
                <h1 className='text-[#00FFA3] mt-2 text-sm md:text-lg flex items-center lg:mt-4'>Learn More<span><img src={aboutArrow} className='ml-2 w-3 h-3' /></span></h1>
            </div>
        </div>
        <div className='flex flex-col mx-4 mt-4 lg:flex-row lg:mx-16 lg:mt-16 justify-between'>
            <div className='flex flex-col lg:w-2/6'>
                <h1 className='text-[#00FFA3] text-lg md:text-2xl'>03</h1>
                <h1 className='text-white text-2xl mt-2 md:text-4xl lg:mt-4'>Estimate</h1>
                <p className='text-sm md:text-lg font-thin text-[#828282] w-full break-word lg:mt-4'>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus,</p>
                <h1 className='text-[#00FFA3] mt-2 text-sm md:text-lg flex items-center lg:mt-4'>Get an Estimate<span><img src={aboutArrow} className='ml-1 md:ml-2 w-[10px] md:w-3 md:h-3' /></span></h1>
            </div>
            <img src={aboutImgThree} className='mt-4 md:w-4/5 md:self-center lg:mt-0 lg:w-1/2 lg:self-end'/>
        </div>
    </div>
  )
}

export default Liokotre