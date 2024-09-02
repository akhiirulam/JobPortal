import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const BottomFooter = () => {
  return (
    <div className='flex py-5 md:flex-row flex-col text-darkGray jost-regular text-sm'>
      <div className='flex flex-1 p-[15px] md:justify-start justify-center '>© 2021 Superio. All Right Reserved.</div>
      <div className='flex flex-1 p-[15px] md:justify-end justify-center'>
        <div className='justify-between '>
        <FontAwesomeIcon icon={faFacebookF} className='mr-[35px] hover:text-socialMediaColor' />
        <FontAwesomeIcon icon={faTwitter} className='mr-[35px] hover:text-socialMediaColor' />
        <FontAwesomeIcon icon={faInstagram} className='mr-[35px] hover:text-socialMediaColor' />
        <FontAwesomeIcon icon={faLinkedinIn} className='hover:text-socialMediaColor' />
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;