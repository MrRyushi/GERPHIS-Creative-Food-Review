"use client";
import Link from "next/link";
import Nav from "../Components/Nav";
import Image from "next/image";

const CountryPage = () => {
  const countriesData = [
    {
      name: "Indonesia",
      backgroundFood: "/indonesia_food.png",
      flag: "/indonesia.png",
      shortDesc:
        "Explore the rich flavors of Indonesian cuisine, from spicy rendang to sweet martabak.",
      link: "/indonesia",
    },
    {
      name: "Philippines",
      backgroundFood: "/philippines_food.png",
      flag: "/philippines.png",
      shortDesc:
        "Discover the diverse flavors of Filipino cuisine, from savory adobo to sweet halo-halo.",
      link: "/philippines",
    },
    {
      name: "Thailand",
      backgroundFood: "/thailand_food.png",
      flag: "/thailand.png",
      shortDesc:
        "Experience the vibrant flavors of Thai cuisine, from spicy tom yum to sweet mango sticky rice.",
      link: "/thailand",
    },
    {
      name: "Vietnam",
      backgroundFood: "/vietnam_food.png",
      flag: "/vietnam.png",
      shortDesc:
        "Savor the fresh flavors of Vietnamese cuisine, from savory pho to sweet che.",
      link: "/vietnam",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-gradient1 to-gradient2 overflow-hidden xl:h-screen">
      {/* Header */}
      <Nav />
      <div className="pt-12 md:pt-24 xl:pt-16 pb-36 space-y-12 px-4 sm:px-0">
        <div>
          <h1 className="text-2xl mx-12 md:mx-auto sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textcolor1 figtree">
            Explore the Flavors of Southeast Asia
          </h1>
        </div>

        {/* Main */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center figtree px-2 md:px-12 lg:px-auto xl:px-36 gap-4 md:gap-4 lg:gap-4 xl:gap-8 xl:pt-8">
          {countriesData.map((country, index) => (
            <Link
              key={index}
              href={country.link}
              className="group relative"
            >
              <div className="relative grid h-[35rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white transition-transform duration-300 transform md:group-hover:scale-105">
                <div
                  // added after:absolute after:inset-0 after:bg-black/20 to make the white text stand out
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover bg-center after:absolute after:inset-0 after:bg-black/25"
                  style={{
                    backgroundImage: `url(${country.backgroundFood})`,
                  }}
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative flex flex-col justify-between h-full text-center p-6 px-6 pb-12 md:px-12">
                  <h2 className="mt-32 md:mt-32 lg:mt-16 xl:mt-24 text-lg md:text-2xl lg:text-2xl xl:text-2xl font-medium text-alternative_white">
                    {country.shortDesc}
                  </h2>
                  <div className="flex flex-col items-center">
                    <h5 className="mb-4 text-xl font-semibold text-alternative_white">
                      {country.name}
                    </h5>
                    <Image
                      alt="Flag"
                      src={country.flag}
                      width={1000}
                      height={720}
                      className="inline-block h-32 w-32 rounded-full border border-white object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
