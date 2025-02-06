import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background h-screen w-screen">
      {/* Header */}
      <div className="text-center space-y-4 bg-header h-1/4 figtree font-light">
        {/* Nav Bar */}
        <nav className="flex justify-between p-4 pe-64 ps-64 h-1/4 text-white">
          <button>GERPHIS Z29</button>
          <div className="space-x-4">
            <button>Home</button>
            <button>About</button>
          </div>
        </nav>

        {/* Title */}
        <div className="h-2/3 text-white flex justify-center items-center">
          <div>
            <h1 className="text-4xl">SOUTH EAST ASIA</h1>
            <h2 className="text-4xl italic">FULL COURSE FOODIES</h2>
          </div>
        </div>

      </div>

      {/* Main */}
      <div className="text-center space-y-4 h-3/4 p-8">
        <div>
          <p className="text-2xl">NIHAO WELCOME!</p>
          <p className="text-xl">South East Asia foodies are very yummy. In this website we present the the food from 4 sea countries that will make up a full course meal!</p>
        </div>

        <div className=" py-6 px-12">
          <div>
            <h1 className="text-2xl font-bold">CHOOSE COUNTRY</h1>
          </div>
          <div className="grid grid-cols-2 justify space-x-4">
            <div className=" flex justify-center">
              <Image src="/ph.png" alt="Philippines" className="" width={150} height={130} />
            </div>

            <div className=" flex justify-center">
              <Image src="/thailand.png" alt="Thailand" className="" width={230} height={130} />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-4">
            <div className=" flex justify-center">
              <Image src="/indonesia.png" alt="indonesia" className="" width={380} height={80} />

            </div>
            <div className=" flex justify-center">
              <Image src="/vietnam.png" alt="vietnam" className="" width={80} height={80} />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
