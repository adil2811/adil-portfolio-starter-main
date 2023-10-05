import React, { useState, useEffect } from 'react'; // Import React and useState
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import CircleLoader from '../../components/CircleLoader'; // Import the CircleLoader component

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds (You should replace this with actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-screen bg-primary/30 py-32 pt-0 text-center xl:text-left">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {isLoading ? (
          // Display the CircleLoader component while loading
          <CircleLoader />
        ) : (
          // Once loading is complete, display the content
          <>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="h2">
                Captivating <span>stories</span> birth magnificent design.
              </h2>
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                'In 2022, my journey into web development began while working as an
                SEO intern. Watching experienced developers use Visual Studio Code
                (VS Code) sparked my interest, and I completed my internship. I
                started learning web development through online courses and
                documentation. Now, I'm eager to deepen my skills under the guidance
                of an experienced developer. A good mentorship could provide
                insights that online resources can't match. I'm excited to learn
                from you and contribute to your projects.'
              </p>
              <div>
                <div className="flex flex-1 xl:gap-x-6">
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"></div>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={15} duration={15} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px leading-[1.4] max-w-[100px]">
                    Months of Experience
                  </div>
                </div>
              </div>
            </div>
            {/* Rest of your content */}
          </>
        )}
      </div>
      <Circles className='mb-[-50px]' />
    </div>
  );
};

export default About;
