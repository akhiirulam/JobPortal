import React, { useEffect, useState } from 'react';
import './NewsArticles.css';
import { articles } from '../../data/articles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { RxDotFilled } from "react-icons/rx";

const NewsArticles = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateOnScroll, setAnimateOnScroll] = useState(false);

    const prevSlide = () => {
        const screenSize = window.innerWidth;
        let maxIndex;

        if (screenSize <= 640) { // Mobile
            maxIndex = articles.length - 1;
        } else if (screenSize <= 1024) { // iPad
            maxIndex = articles.length - 2;
        } else {
            return; // No sliding for desktop
        }

        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    const nextSlide = () => {
        const screenSize = window.innerWidth;
        let maxIndex;

        if (screenSize <= 640) { // Mobile
            maxIndex = articles.length - 1;
        } else if (screenSize <= 1024) { // iPad
            maxIndex = articles.length - 2;
        } else {
            return; // No sliding for desktop
        }

        setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    };

    const getVisibleArticles = () => {
        const screenSize = window.innerWidth;

        if (screenSize <= 640) { // Mobile
            return [articles[currentIndex]];
        } else if (screenSize <= 1024) { // iPad
            return [
                articles[currentIndex],
                articles[(currentIndex + 1) % articles.length]
            ];
        } else { // Desktop
            return articles;
        }
    };

    const visibleArticles = getVisibleArticles();

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top + scrollTop;
            const viewportHeight = window.innerHeight;

            if (scrollTop + viewportHeight > elementTop + 100) { // Trigger animation if element is within 100px from the viewport
                element.classList.add('animate-slide-up');
            }
        });
    };

    useEffect(() => {
        // Ensure animation triggers on page load
        setAnimateOnScroll(true);

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container mx-auto p-3 py-14 bg-ashGray news-articles-container'>
            <div className='flex flex-col items-center gap-3 py-6'>
                <h1 className={`text-3xl font-medium animate-on-scroll ${animateOnScroll ? 'animate-slide-up' : ''}`}>Recent News Articles</h1>
                <p className={`text-secondary animate-on-scroll ${animateOnScroll ? 'animate-slide-up' : ''}`}>Fresh job related news content posted each day.</p>
            </div>

            {/* Slider for Mobile and iPad */}
            <div className='lg:hidden relative flex items-center justify-center'>
                <button onClick={prevSlide} className='absolute left-0 p-1 bg-blue-50 text-primary rounded-md'>
                    <MdKeyboardArrowLeft size={28} />
                </button>
                <div className='flex items-center justify-evenly overflow-hidden w-full px-2'>
                    {visibleArticles.map((article, index) => (
                        <article
                            key={index}
                            className={`bg-white p-4 card flex flex-col gap-3 max-w-[410px] mx-2 transition duration-300 animate-on-scroll ${animateOnScroll ? 'animate-slide-up' : ''}`}
                        >
                            <div className='overflow-hidden'>
                                <img src={article.img} alt="article" className='rounded-md w-full object-cover card-img cursor-pointer' />
                            </div>
                            <div className='flex flex-col gap-3 p-5 max-w-xs px-5'>
                                <ul className='flex flex-wrap text-sm text-secondary'>
                                    <li className='flex items-center'>
                                        <span className='ml-2'>{article.date}</span>
                                    </li>
                                    <li className='flex items-center'>
                                        <span><RxDotFilled /></span>
                                        <span className='ml-2'>{article.type}</span>
                                    </li>
                                    <li className='flex items-center'>
                                        <span><RxDotFilled /></span>
                                        <span className='ml-2'>{article.comments}</span>
                                    </li>
                                </ul>
                                <a href='/' className="font-medium text-lg hover:text-link transition duration-300">{article.title}</a>
                                <p className='text-secondary text-sm leading-6'>{article.desc}</p>
                                <a href='/' className='read-more-link link'><span className='text-sm'> Read More </span> <MdKeyboardArrowRight className='icon' size={24} /></a>
                            </div>
                        </article>
                    ))}
                </div>
                <button onClick={nextSlide} className='absolute right-0 p-1 bg-blue-50 text-primary rounded-md'>
                    <MdKeyboardArrowRight size={28} />
                </button>
            </div>

            {/* Desktop view */}
            <div className='hidden lg:flex items-center justify-center gap-8 py-10'>
                {articles.map((article, index) => (
                    <article
                        key={index}
                        className={`bg-white p-4 card flex flex-col gap-3 max-w-[410px] animate-on-scroll ${animateOnScroll ? 'animate-slide-up' : ''}`}
                    >
                        <div className='overflow-hidden'>
                            <img src={article.img} alt="article" className='rounded-md w-full object-cover card-img cursor-pointer' />
                        </div>
                        <div className='flex flex-col gap-3 p-5 max-w-xs px-5'>
                            <ul className='flex gap-2 text-sm text-secondary'>
                                <li className='flex items-center'>
                                    <span className='list-disc'></span>
                                    <span className='ml-1'>{article.date}</span>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <span><RxDotFilled /></span>
                                    <span className='ml-1'>{article.type}</span>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <span><RxDotFilled /></span>
                                    <span className='ml-1'>{article.comments}</span>
                                </li>
                            </ul>
                            <a href='/' className="font-medium text-lg hover:text-link transition duration-300">{article.title}</a>
                            <p className='text-secondary text-sm leading-6'>{article.desc}</p>
                            <a href='/'
                                className='read-more-link link flex gap-1 items-center'
                            >
                                <span className='text-sm'>
                                    Read More
                                </span>
                                <MdKeyboardArrowRight className='icon' size={24} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default NewsArticles;
