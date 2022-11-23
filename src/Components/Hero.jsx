import React from 'react';
import logo from '../Images/logo.png';
import logo2 from '../Images/logo2.png';
import secondH from '../Images/secondH.png';
import playBtn from '../Images/playBtn.png'

function Hero() {
  return (
<>
    <div className='bg-black flex hero flex-col lg:flex-row'>
        <div className='lg:w-1/2 w-full lg:pl-16 p-4 md:p-8 relative flex flex-col'>
            <div className='flex justify-between' >
                <div className='flex items-center mt-[10px] md:mt-[20px]'>
                    <div className='relative w-[30px] h-[38px]'>
                        <img src={logo} className='w-[26.5px] h-[36px] absolute left-[3.5px]'/>
                        <img src={logo2} className='absolute top-[16px] left-[12px]'/>
                    </div>
                    <h1 className='text-white font-bold text-sm md:text-lg'>Uifry</h1>
                </div>
                <ul className='flex text-white items-center mt-[10px] md:mt-[20px] w-[80%] justify-around font-normal text-[12px] md:text-lg'>
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
            <img src={secondH} className='md:w-[505px] w-full h-[170px] md:self-center lg:self-start mt-[40px]' />
            <div className='md:w-[227px] w-4/12 h-[82px] mt-[40px] lg:mt-[30px] lg:text-[28px] text-lg text-[#00FFA3] font-[serif] md:text-2xl'>
                <h1>It's your life.</h1>
                <h1>Take the keys.</h1>
            </div>
            <h1 className='absolute text-white text-xl w-4/6 left-[35%] top-[330px] lg:w-[779px] lg:h-[102px] lg:text-[45px] lg:left-[275px] lg:top-[345px] md:text-2xl'>A Vision For Liveable </h1>
            <h1 className='absolute text-white lg:w-[874px] lg:left-[10%] top-[360px] lg:top-[398px] lg:text-[45px] text-xl self-center md:text-2xl'>And Affordable Homes.</h1>
            <div className='flex my-[70px] justify-between w-full lg:w-4/5'>
                <button className='bg-[#00FFA3] w-[70px] h-[70px] md:w-[100px] md:h-[100px] text-center text-md md:text-xl font-bold'>Get Started</button>
                <div className='text-white w-[70px] h-[70px] md:w-[100px] md:h-[100px] text-center'>
                    <h1 className='md:text-[32px] font-bold text-[25px]'>20%</h1>
                    <p className='text-[#ccc] text-[10px] md:text-sm'>Trusted by Companies</p>
                </div>
                <div className='text-white w-[70px] h-[70px] md:w-[100px] md:h-[100px] text-center'>
                    <h1 className='md:text-[32px] font-bold text-[25px]'>13k</h1>
                    <p className='text-[#ccc] text-[10px] md:text-sm'>Project Completed</p>
                </div>
            </div>
        </div>
        <div className='lg:w-1/2 h-[90vh] w-full loginDiv flex flex-col justify-between pt-6 pb-16'>
           <ul className='lg:mr-[100px] justify-center lg:justify-end flex font-bold cursor-pointer'>
              <li className='mr-8'>Sign Up</li>
              <li>Login</li>
           </ul>
           <div className='flex bg-[#00FFA3] w-[145px] h-[145px] rounded-full mt-16 flex-col items-center justify-between self-center'>
             <div className='mt-2 rounded-full get font-semibold'>
                <span class='w0'>G</span>
                <span class='w1'>e</span>
                <span class='w2'>t</span>
                <span class='w3'> </span>
                <span class='w4'>S</span>
                <span class='w5'>t</span>
                <span class='w6'>a</span>
                <span class='w7'>r</span>
                <span class='w8'>t</span>
                <span class='w9'>e</span>
                <span class='w10'>d</span>
             </div>
             <div className='bg-white rounded-full'>
                <img src={playBtn}/>
             </div>
             <h1 className='text-2xl font-black'>.</h1>
          </div>
          <p className='donec text-white w-full md:w-4/5 lg:w-4/6 p-4'>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis nunc urna. Feugiat neque, non, mi erat</p> 
       </div>
    </div>
    <div className='bg-[#00FFA3] text-black h-[5vh] md:h-[10vh]'>
      <ul className='flex list-disc justify-around items-center h-full text-[8px] md:text-[12px] lg:text-lg font-semibold whitespace-nowrap overflow-hidden'>
        <li>A vision for liveable and affordable homes</li>
        <li>A vision for liveable and affordable homes</li>
        <li>A vision for liveable and affordable homes</li>
      </ul>
    </div>
 </>   
  )
}

export default Hero;