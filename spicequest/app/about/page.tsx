'use client'
import Nav from '../Components/Nav';

const AboutPage = () => {

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 w-screen overflow-hidden">
      {/* Header */}
      <Nav />
      {/* Main */}
      <div className="text-center flex justify-center items-center py-48 figtree">
        <div className="space-y-12 px-20">
          <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">ABOUT US</p>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-light ">SpiceQuest is a Southeast Asian food review hub that aims to introduce the rich flavors and culinary wonders of Southeast Asia to the world. Our platform features delicious dishes from four SEA countries, carefully curated to create the perfect full-course meal. Get ready to indulge in the vibrant flavors of Southeast Asia! 🍜🍛🥢</p>
        </div>
      </div>
      </div>
    );
  }

export default AboutPage;