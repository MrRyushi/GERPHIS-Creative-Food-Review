"use client";
import Browse from "./Browse";
import Post from "./Post";

interface CountryTemplateProps {
  countryData: {
    name: string;
  };
  from: {
    name: string;
  };
  posts: Array<{
    username: string;
    date: string;
    body: string;
    tag1?: string;
    tag2?: string;
    likes: number;
  }>;
}

const CountryTemplate: React.FC<CountryTemplateProps> = ({
  countryData,
  posts,
  from,
}) => {
  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 w-screen min-h-screen overflow-hidden">
      {/* Header */}
      <div
        className="text-center flex justify-center items-center py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/ship.png')" }}
      >
        <div className="space-y-2 px-20 text-white">
          <p className="figtree-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">
            {countryData.name}
          </p>
          <p className="figtree text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
            Food Reviews
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="justify-center items-center flex m-8">
        <div className="rounded-full bg-white flex justify-center items-center w-1/2 max-w-screen-md p-1 shadow-lg">
          <input
            type="text"
            placeholder="Search for a dish..."
            className="figtree rounded-full w-full p-2 outline-none pl-5"
          />
        </div>
      </div>

      {/* Posts Section */}
      <div className="flex flex-col items-center space-y-6 px-4 mb-8">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        ) : (
          <p className="text-gray-500">
            No food reviews available.
          </p>
        )}
      </div>

      {/* Browse Other Countries */}
      <div id="browse-section">
        <Browse from={from} />
      </div>

      {/* Floating Browse More Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="#browse-section" // Adjust this ID to match the Browse component
          className="bg-[#D65D26] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        >
          <p>Browse more</p>
        </a>
      </div>
    </div>
  );
};

export default CountryTemplate;
