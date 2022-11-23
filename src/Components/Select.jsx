import React from 'react';
import slackLogo from '../Images/slackLogo.png';
import Riotinto from '../Images/RioTinto.png';
import herokuLogo from '../Images/herokuLogo.png';
import google from '../Images/google.png';
import selectImg from '../Images/selectImg.png';
import selectEclipse from '../Images/selectE.png';
import selectArrow from '../Images/SelectA.png'

function Select() {
  return (
    <div className='bg-black min-h-screen flex flex-col justify-between'>
        <div className='flex justify-between p-4 lg:flex-row flex-col'>
            <ul className='text-white flex mt-10 lg:px-16 h-[50px] justify-between w-full md:w-4/5 md:self-center lg:w-[40%] items-center'>
                <li><a href="" className='text-[20px]'><img src={google} className='w-10 h-3 md:w-16 md:h-6'/></a></li>
                <li className='flex items-center w-20 h-12'><span><img src={slackLogo} className=' w-8 h-6 md:w-10 md:h-12'/></span><a href="" className='text-sm md:text-xl'>Slack</a></li>
                <li><a href=""></a><img src={Riotinto} className='w-16 h-4 md:w-24 md:h-4'/></li>
                <li className='flex items-center'><span><img src={herokuLogo} className=' w-3 h-3 md:w-6 md:h-6 bg-white'/></span><a href=""className='text-sm md:text-lg'>HEROKU</a></li>
            </ul>
            <div className='text-white items-center w-full text-[10px] p-2 border-solid border-[0.2px] border-[#ccc] flex mt-8 md:text-[15px] lg:mx-16 lg:w-2/5 lg:p-4 justify-between'>
                <p className='word-break lg:w-[60%] w-[40%] '>lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies</p>
                 <button className='border-solid border-[0.2px] border-[#ccc] p-2 md:p-4'>Decline</button>
                 <button className='bg-[#00FFA3] text-black p-2 md:p-4 font-bold'>Allow</button>
            </div>
        </div>
        <div className='prop mt-2 p-4 lg:px-16 '>
           <h1 className='text-[#00FFA3] text-xl lg:text-3xl'>Select Properties</h1>
           <h1 className='text-white text-lg md:text-2xl lg:text-7xl'>Browse Popular House Base On Their Features.</h1>
        </div>
        <div className='last h-[600px] flex-col w-full flex lg:flex-row lg:w-4/5'>
            <div className='selectImg h-[500px] w-full lg:w-1/2 relative md:px-4 lg:px-0'>
                   <img src={selectImg} className='w-full h-full' />
                    <h1 className='w-96 text-white absolute top-[50%] right-0 pl-4 lg:top-[20%] md:right-[45%] lg:-right-[30%] text-xl md:pl-0 md:text-2xl lg:text-5xl'>Compact Classic Summer House.</h1>
                    <div className='w-[88px] h-[88px] absolute right-4 lg:-right-3 bottom-12'>
                        <img src={selectEclipse} className='w-full h-full relative'/>
                        <img src={selectArrow} className='absolute top-[30%] w-1/2 h-1/2 right-5' />
                    </div>
            </div>
            <div className='h-[500px] items-center flex w-full lg:w-1/2 mt-8 lg:ml-4'>
               <p className=' text-[#828282] word-break w-full px-4 font-thin capitalize'>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis nunc urna. Feugiat neque, non, mi erat</p>
            </div>
        </div>
    </div>
  )
}

export default Select