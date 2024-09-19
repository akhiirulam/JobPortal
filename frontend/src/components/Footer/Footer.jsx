import React from 'react';
import Logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='py-[60px]'>
        <div className='flex flex-col md:flex-row  md:p[0px]'>
        <div className='  p-[15px] md:w-[30%]'>
            <div className='mb-5'>
            <a href='#' ><img src={Logo} alt='Logo' /></a>
            </div>
            <div className='jost-medium text-[18px] '>Call us</div>
            <div className='jost-medium text-fontBlue text-[18px] mb-4'>123 456 7890</div>
            <div className='text-darkGray jost-regular text-sm leading-[30px]'>
            328 Queensberry Street, North Melbourne VIC
            <br/>
            3051, Australia.
            <br/>
            support@superio.com
            </div>
        </div>
        <div className=' md:w-[20.682%] p-[15px] '>
            <div className='jost-medium text-[18px] mb-[25px] '>For Candidates</div>
            <div className='text-dimGray text-sm jost-regular leading-[1.75]'>
                <ul>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Browse Jobs</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Browse Candidates</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Candidate Dashboard</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Job Alerts</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>My Bookmarks</a></li>

                </ul>
            </div>
        </div>
        <div className='md:w-[19.62%] p-[15px]'>
        <div className='jost-medium text-[18px] mb-[25px] '>For Employers</div>
            <div className='text-dimGray text-sm jost-regular leading-[1.75]'>
                <ul>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>All Employers</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Employer Dashboard</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Submit Job</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Job Packages</a></li>

                </ul>
            </div>
        </div>
        <div className='md:w-[14.698%] p-[15px]'>
        <div className='jost-medium text-[18px] mb-[25px] '>About Us</div>
            <div className='text-dimGray text-sm jost-regular leading-[1.75]'>
                <ul className='flex-col'>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Contact Us</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>About Us</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Terms</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Packages</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>FAQ</a></li>

                </ul>
            </div>
        </div>
        <div className='md:w-[15%] p-[15px]'>
        <div className='jost-medium text-[18px] mb-[25px] '>Helpful Resources</div>
            <div className='text-dimGray text-sm jost-regular leading-[1.75]'>
                <ul className='custom-list'>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Site Map</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Terms of Use</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Privacy Center</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Security Center</a></li>
                    <li className='w-fit pb-3 hover:list-disc hover:text-themeBlue'><a href='#'>Accessibility Center</a></li>

                </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;