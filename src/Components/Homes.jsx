import React from 'react';
import homeImgOne from '../Images/homeImgOne.png';
import homeImgTwo from '../Images/homeImgTwo.png';
import alex from '../Images/alex.png';
import james from '../Images/james.png'

function Homes() {
  return (
<>
   <h1  className='text-[#00FFA3] text-lg font-medium mx-4 md:text-2xl lg:ml-16 mt-16 '>Primary Homes</h1>
    <div className='homes bg-black flex flex-col'>
        <p className='text-white text-2xl md:text-4xl lg:text-5xl w-4/5 break-word mx-4 lg:leading-[70px] lg:mx-16'>Sed nisi, sit ornare in faucibus sit id cursus urna. vitae mi</p>
        <div className='flex flex-col mx-4 md:flex-row justify-between md:ml-16 mt-10'>
            <div className='w-full md:w-4/6'>
                <img src={homeImgOne} className='w-full md:w-4/5 h-[500px]' />
                <div className='flex text-white items-center w-full justify-between mt-5 md:w-4/5'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>Loft House</h1>
                    <h1 className='text-sm md:text-lg font-thin'>san marcos, 2019</h1>
                </div>
                <div className='flex w-full items-center justify-between mt-5 md:w-4/5'>
                    <div className='text-white flex items-center'>
                      <img src={alex}/>
                      <h1 className='ml-2 text-sm lg:text-lg'>Alex</h1>
                    </div>
                    <button className='border-2 border-[#00ffa3] text-[#00ffa3]  h-12 px-2 lg:px-8'>Contact</button>
                </div>
            </div>
            <div className='flex flex-col text-white mt-6 md:mt-0'>
               <img src={homeImgTwo} className='w-[400px] h-[500px]'/>
                <h1 className='text-xl mt-4 md:text-2xl lg:text-3xl'>Mighty Quatre</h1>
                <div  className='mt-4 flex items-center'>
                    <img src={james}/>
                    <h1 className='ml-2 text-sm lg:text-lg'>James</h1>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Homes