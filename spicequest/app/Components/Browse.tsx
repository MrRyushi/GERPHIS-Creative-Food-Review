'use client'
import Link from 'next/link';
import Image from 'next/image';

interface BrowseProps {
  from: {
    name: string;
  };
}

const Browse: React.FC<BrowseProps> = ({ from }) => {
  const countriesData = [
    {
      name: "Indonesia",
      backgroundFood: "/indonesia_food.png",
      flag: "/indonesia.png",
      shortDesc: "Explore the rich flavors of Indonesian cuisine, from spicy rendang to sweet martabak.",
      link: "/indonesia",
    },
    {
      name: "Philippines",
      backgroundFood: "/philippines_food.png",
      flag: "/philippines.png",
      shortDesc: "Discover the diverse flavors of Filipino cuisine, from savory adobo to sweet halo-halo.",
      link: "/philippines",
    },
    {
      name: "Thailand",
      backgroundFood: "/thailand_food.png",
      flag: "/thailand.png",
      shortDesc: "Experience the vibrant flavors of Thai cuisine, from spicy tom yum to sweet mango sticky rice.",
      link: "/thailand",
    },
    {
      name: "Vietnam",
      backgroundFood: "/vietnam_food.png",
      flag: "/vietnam.png",
      shortDesc: "Savor the fresh flavors of Vietnamese cuisine, from savory pho to sweet che.",
      link: "/vietnam",
    }
  ];

  // Filter out the country that matches from.name
  const filteredCountries = countriesData.filter(country => country.name !== from.name);

  return (
    <div className='xl:h-screen'>
      <div className='pt-6 md:pt-24 xl:pt-16 pb-6 space-y-6 px-4 sm:px-0'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textcolor1 figtree ">
          Browse Other Countries
        </h1>
      </div>

      {/* Main */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center figtree 
      w-full max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-12 gap-4 md:gap-6 lg:gap-8">
        {filteredCountries.map((country, index) => (
      <Link key={index} href={country.link} className="group relative">
        <div className="relative grid h-[28rem] flex-col items-end justify-center overflow-hidden 
            rounded-lg bg-white transition-transform duration-300 transform group-hover:scale-105 
            shadow-lg hover:shadow-2xl">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover 
                bg-center after:absolute after:inset-0 after:bg-black/25"
            style={{ backgroundImage: `url(${country.backgroundFood})` }}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t 
                from-black/80 via-black/50"></div>
          </div>
          <div className="relative text-center p-6 px-4 py-12 md:px-8">
            <h2 className="mb-4 md:text-xl xl:text-2xl font-medium text-alternative_white">
              {country.shortDesc}
            </h2>
            <h5 className="mb-2 text-lg font-semibold text-alternative_white">
              {country.name}
            </h5>
            <Image
                alt="Flag"
                src={country.flag}
                width={96}
                height={96}
                className="relative inline-block h-24 w-24 rounded-full border border-white 
                transition-all duration-300 ease-in-out"
                />
          </div>
        </div>
      </Link>
    ))}  
  </div>
</div>

    </div>
  );
};

export default Browse;
