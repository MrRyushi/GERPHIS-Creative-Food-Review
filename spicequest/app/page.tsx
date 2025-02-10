import Nav from "./Components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-screen h-auto xl:h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/spicequest.png')" }}
    >
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="text-center flex justify-center items-center py-12 lg:py-12 xl:py-16">
        <div className="space-y-4 px-12 md:px-20 dm-serif-text text-white">
          <p className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            SpiceQuest
          </p>
          <div className="figtree text-lg md:text-lg lg:text-xl xl:text-xl font-light pt-5 px-2 lg:px-8 xl:px-24">
            <p className="">
              Welcome to our Southeast Asian Spice Journey, a creative food review
              website made for GERPHIS (Readings in Philippine History). This
              project explores the rich and flavorful dishes of Southeast Asia,
              focusing on the spices that have shaped the {"region's"} culinary
              heritage. Inspired by the Magellan-Elcano Expedition, which sought the famed
              Spice Islands, we dive into the aromatic and vibrant world of
              Southeast Asian cuisine. Spices like nutmeg, cloves, cinnamon, and
              turmeric have played a crucial role in history, influencing trade,
              culture, and, most importantly, food. In this food review, we highlight various dishes that showcase these
              spices—appetizers, main courses, and desserts. Through our reviews,
              we use all five senses to bring the experience to life:{" "} 
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
              techniques, breaking down what makes each dish special. Finally, we
              give our honest recommendations—would we encourage others to try it?
              Why or why not?{" "} This project is our way of blending history and cuisine, giving our
              audience a deeper appreciation for the flavors that have shaped
              Southeast Asia. Whether {"you're"} a foodie or a history buff, we
              invite you to embark on this flavorful adventure with us!{" "}
            </p>
        
            <p className="">🌿 Enjoy the journey and happy eating! 🍛</p>
          </div>
          <div className="pt-10 lg:pt-12 xl:pt-8 2xl:-pt-12">
            <Link
              href="/countries"
              className="px-12 py-4 hover:bg-[#DC6C3A] bg-[#D65D26] rounded-xl text-center lg:text-lg xl:text-xl"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
