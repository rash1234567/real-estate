import React from 'react';
import logo from '../Images/logo.png';
import logo2 from '../Images/logo2.png';
import secondH from '../Images/secondH.png';
import playBtn from '../Images/playBtn.png'

function Hero() {
  return (
<>
    <div className='bg-black flex hero'>
        <div className='w-1/2 pl-[103.53px] h-[90vh] relative flex flex-col'>
            <div className='flex justify-between' >
                <div className='flex items-center mt-[30px]'>
                    <div className='relative w-[30px] h-[38px]'>
                        <img src={logo} className='w-[26.5px] h-[36px] absolute left-[3.5px]'/>
                        <img src={logo2} className='absolute top-[16px] left-[12px]'/>
                    </div>
                    <h1 className='text-white font-bold'>Uifry</h1>
                </div>
                <ul className='flex text-white mt-[30px] w-[80%] justify-around font-normal'>
                  <li>
                    <a href="">Explore</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">How it works</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>          
                </ul>
            </div>
            <img src={secondH} className='w-[505px] h-[170px] mt-[40px]' />
            <div className='w-[227px] h-[82px] mt-[30px] text-[28px] text-[#00FFA3] font-[serif]'>
                <h1>It's your life.</h1>
                <h1>Take the keys.</h1>
            </div>
            <h1 className='absolute text-white w-[779px] h-[102px] text-[50px] left-[275px] top-[310px]'>A Vision For Liveable </h1>
            <h1 className='absolute text-white w-[874px] top-[370px] text-[50px]'>And Affordable Homes.</h1>
            <div className='flex mt-[70px] justify-between w-4/5'>
                <button className='bg-[#00FFA3]  w-[100px] h-[100px] text-center text-xl font-semibold'>Get Started</button>
                <div className='text-white w-[100px] h-[100px] text-center'>
                    <h1 className='text-[32px] font-bold'>20%</h1>
                    <p className='text-[#ccc] text-sm'>Trusted by Companies</p>
                </div>
                <div className='text-white w-[100px] h-[100px] text-center'>
                    <h1 className='text-[32px] font-bold'>13k</h1>
                    <p className='text-[#ccc] text-sm'>Project Completed</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-[90vh] loginDiv flex flex-col'>
           <ul className='mt-4 mr-[100px] justify-end flex font-bold cursor-pointer'>
              <li className='mr-8'>Sign Up</li>
              <li>Login</li>
           </ul>
           <div className='flex bg-[#00FFA3] w-[145px] h-[145px] rounded-full mt-16 flex-col items-center justify-between self-center'>
             <h1 className='w-full rotate-45 '>Get Started</h1>
             <div className='bg-white rounded-full'>
                <img src={playBtn} className=''/>
             </div>
             <h1>.</h1>
          </div> 
       </div>
    </div>
    <div className='bg-[#00FFA3] text-black h-[10vh]'>
      <ul className='flex list-disc justify-around items-center h-full text-lg font-semibold'>
        <li>A vision for liveable and affordable homes</li>
        <li>A vision for liveable and affordable homes</li>
        <li>A vision for liveable and affordable homes</li>
      </ul>
    </div>
 </>   
  )
}

export default Hero;