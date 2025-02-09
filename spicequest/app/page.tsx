import Nav from "./Components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/spicequest.png')" }}
    >
      {/* Header */}
      <div className="text-center space-y-4 font-light">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="text-center flex justify-center items-center py-48">
        <div className="space-y-4 px-20 dm-serif-text text-white">
          <p className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            SpiceQuest
          </p>
          <p className="figtree text-lg md:text-lg lg:text-xl xl:text-2xl font-light pt-5 px-10">
            Welcome to our Southeast Asian food review hub!
            Explore delicious dishes from four SEA
            countries, carefully curated to create the
            perfect full-course meal. Get ready to indulge
            in the rich flavors and culinary wonders of
            Southeast Asia!
          </p>
          <div className="pt-16">
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
