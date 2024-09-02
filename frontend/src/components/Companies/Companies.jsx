import React, { useState, useEffect, useRef } from 'react';
import AmazonImg from '../../public/amazone.jpg';
import AirbnbImg from '../../public/airbnb.jpg';
import SlackImg from '../../public/slack.jpg';
import PaypalImg from '../../public/paypal.jpg';
import SpotifyImg from '../../public/spotify.jpg';
import FigmaImg from '../../public/figma.jpg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import './Companies.css';

const Companies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRefDesktop = useRef(null);
    const containerRefMobile = useRef(null);
    const images = [AmazonImg, AirbnbImg, SlackImg, PaypalImg, SpotifyImg, AmazonImg, FigmaImg];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const screenSize = window.innerWidth;
            if (screenSize <= 640) {
                return prevIndex === 0 ? images.length - 2 : prevIndex - 2;
            } else if (screenSize <= 1024) {
                return prevIndex === 0 ? images.length - 4 : prevIndex - 4;
            } else {
                return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            }
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const screenSize = window.innerWidth;
            if (screenSize <= 640) {
                return prevIndex === images.length - 2 ? 0 : prevIndex + 2;
            } else if (screenSize <= 1024) {
                return prevIndex === images.length - 4 ? 0 : prevIndex + 4;
            } else {
                return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const getVisibleImages = () => {
        const screenSize = window.innerWidth;
        if (screenSize <= 640) {
            return [images[currentIndex], images[(currentIndex + 1) % images.length]];
        } else if (screenSize <= 1024) {
            return [
                images[currentIndex],
                images[(currentIndex + 1) % images.length],
                images[(currentIndex + 2) % images.length],
                images[(currentIndex + 3) % images.length]
            ];
        } else {
            return images;
        }
    };

    const visibleImages = getVisibleImages();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );
    
        // Copy ref values to local variables
        const desktopRef = containerRefDesktop.current;
        const mobileRef = containerRefMobile.current;
    
        if (desktopRef) {
            observer.observe(desktopRef);
        }
        if (mobileRef) {
            observer.observe(mobileRef);
        }
    
        return () => {
            if (desktopRef) {
                observer.unobserve(desktopRef);
            }
            if (mobileRef) {
                observer.unobserve(mobileRef);
            }
        };
    }, []);

    return (
        <div className='container bg-white p-3 py-10 mx-auto'>
            {/* Desktop view */}
            <div ref={containerRefDesktop} className={`hidden lg:flex items-center justify-center gap-24 my-4 ${isVisible ? 'animate-slide-in' : ''}`}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt="company" className='hover:scale-105 transition duration-200' />
                ))}
            </div>

            {/* Mobile and iPad view */}
            <div className='lg:hidden relative flex items-center justify-center'>
                <button onClick={prevSlide} className='absolute left-0 p-1 bg-blue-50 text-primary rounded-md'>
                    <MdKeyboardArrowLeft size={28} />
                </button>
                <div ref={containerRefMobile} className={`flex items-center justify-evenly overflow-hidden w-full px-2 ${isVisible ? 'animate-slide-in' : ''}`}>
                    {visibleImages.map((img, index) => (
                        <img key={index} src={img} alt="company" className='hover:scale-105 transition duration-200 max-w-[60px] sm:max-w-[70px] md:max-w-[100px]' />
                    ))}
                </div>
                <button onClick={nextSlide} className='absolute right-0 p-1 bg-blue-50 text-primary rounded-md'>
                    <MdKeyboardArrowRight size={28} />
                </button>
            </div>
        </div>
    );
};

export default Companies;
