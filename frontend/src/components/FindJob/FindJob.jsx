import React, { useEffect, useState, useRef } from 'react';
import WorkImg from '../../public/work.jpg';
import EmployersImg from '../../public/employers.png';
import { FaCheck } from "react-icons/fa6";
import './FindJob.css'; // Ensure this import path is correct

const FindJob = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const animated = sessionStorage.getItem('findJobAnimated');
        if (animated) {
            setHasAnimated(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    sessionStorage.setItem('findJobAnimated', 'true');
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="container bg-white px-4 py-12 sm:py-12 lg:py-24 mx-auto">
            <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-28">
                <div
                    className={`relative hidden lg:block ${hasAnimated ? 'animate-slide-in-left' : ''}`}
                >
                    <img src={WorkImg} alt="work" className="w-full h-auto object-cover" />
                    <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
                        <img src={EmployersImg} alt="employers" className="h-auto" />
                    </div>
                </div>
                <div
                    className={`p-3 max-w-[520px] flex flex-col gap-6 ${hasAnimated ? 'animate-slide-in-right' : ''}`}
                >
                    <h1 className="text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] font-medium leading-tight">
                        Millions of Jobs. Find the one that suits you.
                    </h1>
                    <p className="text-sm text-secondary leading-6 max-w-sm">
                        Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.
                    </p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2"><FaCheck />Bring to the table win-win survival</li>
                        <li className="flex items-center gap-2"><FaCheck />Capitalize on low hanging fruit to identify</li>
                        <li className="flex items-center gap-2"><FaCheck />But I must explain to you how all this</li>
                    </ul>
                    <button className="bg-primary text-white py-3 px-12 rounded-lg w-fit border hover:text-primary hover:border-primary hover:bg-white transition duration-300">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FindJob;
