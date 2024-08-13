import React from 'react';
import downloadAppImg from '../public/downloadAppImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faApple,faGooglePlay} from '@fortawesome/free-brands-svg-icons'

const AppDownload = () => {
  return (
    <div className='flex flex-col md:flex-row  pt-[70px] pb-[60px]'>
      <div className='flex-1 p-[15px] flex justify-start hidden md:block'>
        <img src={downloadAppImg} alt='downloadAppImg' className=''/>
      </div>
      <div className='flex-1 flex items-center py-[15px] pl-[50px] pr-[15px]'>
        <div className='md:w-[442.625px]'>
        <div className='text-miniHeadBlue text-lg jost-medium mb-5'>DOWNLOAD & ENJOY</div>
        <div className='jost-medium mb-5 text-[40px] leading-[1.3em]'>Get the Superio Job Search App</div>
        <div className='text-dimGray jost-regular text-[15px] mb-10'>Search through millions of jobs and find the right fit. Simply swipe right to apply.</div>
        <div className='flex flex-col md:flex-row' >
          <button className='flex bg-black hover:bg-themeBlue ease-in duration-300 rounded-md mr-5 py-[9px] px-[22px] items-center mb-2 md:mb-0'>
            <div className=''>
            <FontAwesomeIcon icon={faApple} style={{color: "#ffffff",}} className='jost-regular text-[28px]' />
            </div>
            <div className='text-white pl-[20px] jost-regular subpixel-antialiased'>
            <div className='text-sm'>Download on the</div>
            <div className='flex justify-start text-base jost-medium'>Apple Store</div>
            </div>
          </button>
          <button className='flex bg-black hover:bg-themeBlue ease-in duration-300 rounded-md mr-5 py-[9px] px-[22px] items-center'>
            <div className=''>
            <FontAwesomeIcon icon={faGooglePlay} style={{color: "#ffffff",}} className='jost-regular text-[28px]' />
            </div>
            <div className='text-white pl-[20px] jost-regular subpixel-antialiased'>
            <div className='flex justify-start text-sm'>Get it on</div>
            <div className='flex justify-start text-base jost-medium'>Google play</div>
            </div>
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default AppDownload;
