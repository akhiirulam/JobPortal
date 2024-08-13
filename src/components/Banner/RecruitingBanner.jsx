import React from 'react';

const RecruitingBanner = () => {
  return (
    <div className=' p-[15px]'>
    <div className='bg-softSkyBlue flex flex-col md:flex-row  rounded-md'>
      <div className=' w-full md:w-[46.974%] p-6 md:px-[60px] md:py-[45px]'>
      <div className='text-2xl md:text-3xl jost-medium mb-2 md:mb-5'>Recruiting?</div>
      <div className='text-dimGray jost-regular mb-5 text-[15px] leading-7'>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</div>
      <div className='w-full'>
      <button className='px-3 md:px-10 py-3 border border-[#1967d2] text-white rounded-md jost-regular bg-[#1967d2] hover:text-[#1967d2] hover:bg-white ease-in duration-150'>Start Recruiting Now</button>
      </div>
      </div>
      <div className='flex-1 hidden md:block'>
        
      </div>
      </div>
    </div>
  );
}

export default RecruitingBanner;
