import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counts = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [counts, setCounts] = useState({
        users: 0,
        jobs: 0,
        stories: 0,
    });

    useEffect(() => {
        if (inView) {
            const incrementCount = (target, key, suffix) => {
                let start = 0;
                const duration = 1000;
                const incrementStep = target / (duration / 16.66);

                const timer = setInterval(() => {
                    start += incrementStep;
                    if (start >= target) {
                        start = target;
                        clearInterval(timer);
                    }
                    setCounts(prevCounts => ({
                        ...prevCounts,
                        [key]: `${Math.floor(start)}${suffix}`,
                    }));
                }, 16.66);
            };

            incrementCount(4, 'users', 'M');
            incrementCount(12, 'jobs', 'k');
            incrementCount(20, 'stories', 'M');
        }
    }, [inView]);

    return (
        <div ref={ref} className='container mx-auto p-3 py-8 md:py-16'>
            <div className='flex flex-col md:flex-row items-center justify-evenly gap-8'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-5xl font-medium'>{counts.users}</h1>
                    <p className='text-secondary text-center'>4 million daily active users</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-5xl font-medium'>{counts.jobs}</h1>
                    <p className='text-secondary text-center'>Over 12k open job positions</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-5xl font-medium'>{counts.stories}</h1>
                    <p className='text-secondary text-center'>Over 20 million stories shared</p>
                </div>
            </div>
        </div>
    );
};

export default Counts;
