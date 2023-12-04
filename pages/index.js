import React, { useState, useEffect } from 'react'; // Import React and useState
import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircleLoader from '../components/CircleLoader'; // Import the CircleLoader component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds (You should replace this with actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-primary/60  ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {isLoading ? (
          // Display the CircleLoader component while loading
          <CircleLoader />
        ) : (
          // Once loading is complete, display the actual content
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            <h1 className="h1">
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </h1>
            {/* subtitle */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
              I am a passionate and experienced Next.js developer with a strong
              background in building modern and efficient web applications. My
              journey in web development has equipped me with a diverse skill set,
              allowing me to create dynamic and responsive user interfaces while
              optimizing performance and user experience. In this portfolio, I
              showcase some of my most significant projects and highlight the
              skills and technologies I bring to the table.
            </p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        )}
      </div>
      <div className="w-[1200px]  absolute right-0 bottom-0">
        {/* bg image */}
        {/* particles */}
        <div className="w-full h-full max-w-[739px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
