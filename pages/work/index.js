import React, { useState, useEffect } from 'react'; // Import React and useState
import WorkSlider from '../../components/WorkSlider';
import Blub from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CircleLoader from '../../components/CircleLoader';

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds (You should replace this with actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='h-screen bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        {isLoading ? (
          // Display the CircleLoader component while loading
          <CircleLoader />
        ) : (
          // Once loading is complete, display the content
          <>
            <div className='flex flex-col xl:flex-row gap-x-8'>
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='text-2xl xl:mt-8 font-bold'>
                  My Work<span className='text-accent'>.</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                  Here are the projects I've worked on...
                </motion.p>
              </div>
            </div>
            <WorkSlider />
          </>
        )}
      </div>
      <Blub />
    </div>
  );
};

export default Work;
