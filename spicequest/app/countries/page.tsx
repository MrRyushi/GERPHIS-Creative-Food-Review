'use client'
import Nav from '../Components/Nav';
import Image from 'next/image';

const CountryPage = () => {

  const countriesData = [{
    name: "Indonesia",
    backgroundFood: "/indonesia_food.png",
    flag: "/indonesia.png",
    shortDesc: "Explore the rich flavors of Indonesian cuisine, from spicy rendang to sweet martabak.",
  },
  {
    name: "Philippines",
    backgroundFood: "/philippines_food.png",
    flag: "/philippines.png",
    shortDesc: "Discover the diverse flavors of Filipino cuisine, from savory adobo to sweet halo-halo.",
  },
  {
    name: "Thailand",
    backgroundFood: "/thailand_food.png",
    flag: "/thailand.png",
    shortDesc: "Experience the vibrant flavors of Thai cuisine, from spicy tom yum to sweet mango sticky rice.",
  },
  {
    name: "Vietnam",
    backgroundFood: "/vietnam_food.png",
    flag: "/vietnam.png",
    shortDesc: "Savor the fresh flavors of Vietnamese cuisine, from savory pho to sweet che.",
  }

]

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 overflow-hidden xl:h-screen">
      {/* Header */}
      <Nav />
      <div className='pt-12 md:pt-24 xl:pt-16 pb-36 space-y-12 px-4 sm:px-0'>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textcolor1 figtree">
            Explore the Flavors of Southeast Asia
          </h1>
        </div>

        {/* Main */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center figtree md:px-20 lg:px-28 xl:px-36 gap-4 md:gap-4 lg:gap-4 xl:gap-8">
        {countriesData.map((country, index) => (        
          <div key={index} className="group relative">
            <div className="relative grid h-[35rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white transition-transform duration-300 transform group-hover:scale-105">
              <div 
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${country.backgroundFood})` }}
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative text-center p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 md:text-2xl xl:text-3xl font-medium text-alternative_white">
                  {country.shortDesc}
                </h2>
                <h5 className="mb-4 text-xl font-semibold text-alternative_white">
                  {country.name}
                </h5>
                <Image
                  alt="Flag"
                  src={country.flag}
                  width={128}
                  height={128}
                  className="relative inline-block h-32 w-32 rounded-full border border-white"
                />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default CountryPage