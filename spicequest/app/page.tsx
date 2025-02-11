'use client'
import Nav from "./Components/Nav";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const element = <FontAwesomeIcon icon={faArrowDown} />
  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="h-auto 3xl:h-screen overflow-x-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/spicequest.png')" }}
    >
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="text-center flex justify-center items-center py-12 lg:py-12 xl:py-16 2xl:py-24 h-screen">
        <div className="space-y-4 px-12 md:px-20 lg:px-20 xl:px-24 2xl:px-48 dm-serif-text text-white">
          <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: { staggerChildren: 0.3 },
             },
           }}
          >
            <p className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
              SpiceQuest
            </p>
            <div className="figtree text-lg md:text-lg lg:text-xl xl:text-xl font-light pt-5">
              <p className="">
                Welcome to our Southeast Asian food review hub! Explore delicious
                dishes from four SEA countries, carefully curated to create the
                perfect full-course meal. Get ready to indulge in the rich flavors
                and culinary wonders of Southeast Asia!
              </p>
            </div>
          
            <div className="pt-10 lg:pt-12 xl:pt-8 2xl:-pt-12">
              <Link
                href="/countries"
                className="px-12 py-4 hover:bg-[#DC6C3A] bg-[#D65D26] rounded-xl text-center lg:text-lg xl:text-xl"
              >
                Continue
              </Link>
            </div>
          </motion.div>

          <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center">
            <button onClick={scrollToAboutUs}>
              <motion.div
                className="text-white text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                {element}
              </motion.div>
            </button>
          </div>

        </div>
      </div>

      <div
        id="about-us" ref={aboutUsRef} 
        className="px-12 md:px-20 lg:px-20 xl:px-24 2xl:px-48 py-20 lg:py-12 xl:py-16 2xl:py-24 text-alternative_white lg:h-screen flex justify-center items-center">
        <div>
          <div>
            <h1 className="font-bold figtree text-2xl">About SpiceQuest</h1>
          </div>
          <div className="figtree text-lg md:text-lg lg:text-xl xl:text-xl font-light pt-5">
            <p className="">
              This website is a creative food review made for GERPHIS (Readings
              in Philippine History). This project explores the rich and
              flavorful dishes of Southeast Asia, focusing on the spices that
              have shaped the {"region's"} culinary heritage. Inspired by the
              Magellan-Elcano Expedition, which sought the famed Spice Islands,
              we dive into the aromatic and vibrant world of Southeast Asian
              cuisine. Spices like nutmeg, cloves, cinnamon, and turmeric have
              played a crucial role in history, influencing trade, culture, and,
              most importantly, food. In this food review, we highlight various
              dishes that showcase these spices—appetizers, main courses, and
              desserts. Through our reviews, we use all five senses to bring the
              experience to life:{" "}
            </p>
            <br />
            <p className="">
              🥘 Sight – How does the dish look? Does it have rich colors,
              enticing textures, or an artistic presentation? <br />
              👃 Smell – What aromas stand out? Is it earthy, smoky, sweet, or
              spicy? <br />
              👂 Hearing – Does it sizzle, crunch, or make any other sounds that
              enhance the experience? <br />
              👅 Taste – What flavors dominate? Is it sweet, savory, tangy, or
              spicy?{" "}
            </p>

            <br />
            <p className="">
              We also explore the unique cooking methods and preparation
              techniques, breaking down what makes each dish special. Finally,
              we give our honest recommendations—would we encourage others to
              try it? Why or why not? This project is our way of blending
              history and cuisine, giving our audience a deeper appreciation for
              the flavors that have shaped Southeast Asia. Whether {"you're"} a
              foodie or a history buff, we invite you to embark on this
              flavorful adventure with us!{" "}
            </p>

            <p className="">🌿 Enjoy the journey and happy eating! 🍛</p>
          </div>
        </div>
      </div>
    </div>
  );
}
