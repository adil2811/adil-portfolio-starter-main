import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<SiCanva />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Projects",
    info: [
      {
        title:
          "Developed a full-fledged e-commerce platform using Next.js,   User authentication, product catalog, shopping cart, payment integration, and order tracking.  Next.js, React, Redux, Stripe API, Styled-components and also a admin panel.",
        stage: "Ecommerce Website",
      },
      {
        title:
          "Created a blog platform that allows users to write and publish articles. User profiles, article CRUD operations, Markdown support, and comment functionality. Next.js, Node.js, MongoDB, Passport.js.",
        stage: "Blogging Platform",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor of Management Studies",
        stage: "2019 - 2022",
      },
      {
        title: "Internship at Azent (S.E.O)",
        stage: "2022",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 pt-0 text-center xl:text-left">
      <Circles />
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
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Captivating <span>stories</span> birth magnificent design.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          'In 2022, my journey into web development began while working as an
SEO intern. Watching experienced developers use Visual Studio Code
(VS Code) sparked my interest, and I completed my internship. I
started learning web development through online courses and
documentation. Now, I&apos;m eager to deepen my skills under the guidance
of an experienced developer. A good mentorship could provide
insights that online resources can&apos;t match. I&apos;m excited to learn
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
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8  mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex1) => {
  return (
    <div
      key={itemIndex1}
      className={`${
        index === itemIndex1 ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
      } cursor-pointer capitalized xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
      onClick={() => setIndex(itemIndex1)}
    >
      {item.title}
    </div>
  );
})}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex2) => {
              return (
                <div
                  key={itemIndex2}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex3) => {
                      return <div key={iconIndex3} className="text-2xl">
                        {icon}
                      </div>;
                    })}
                  </div> 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
