import Nav from "./Components/Nav";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 w-screen overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      {/* Main */}
<<<<<<< Updated upstream
      <div className="text-center flex justify-center items-center py-48 figtree">
        <div className="space-y-12 px-20">
          <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">WELCOME!</p>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-light ">Welcome to our Southeast Asian food review hub! 
            Explore delicious dishes from four SEA countries, carefully curated to create the perfect full-course meal. 
            Get ready to indulge in the rich flavors and culinary wonders of Southeast Asia! 🍜🍛🥢</p>
          <div>
            <Link href="/countries" className="px-12 py-4 bg-nav hover:bg-lime-800 rounded-xl text-center lg:text-lg xl:text-xl">Continue</Link>
=======
      <div className="text-center flex justify-center items-center py-48">
        <div className="space-y-4 px-20 dm-serif-text text-white">
          <p className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl">SpiceQuest</p>
          <p className="figtree text-lg md:text-lg lg:text-xl xl:text-2xl font-light pt-8 px-32">
            Welcome to our Southeast Asian food review hub! 
            Explore delicious dishes from four SEA countries, carefully curated to create the perfect full-course meal. 
            Get ready to indulge in the rich flavors and culinary wonders of Southeast Asia! 🍜🍛🥢
          </p>
          <div className="pt-12">
            <Link href="/countries" className="px-12 py-4 hover:bg-[#DC6C3A] bg-[#D65D26] rounded-xl text-center lg:text-lg xl:text-xl">
              Continue
            </Link>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  );
}