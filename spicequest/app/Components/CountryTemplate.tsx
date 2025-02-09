'use client'
import Post from "./Post";

interface CountryTemplateProps {
  countryData: {
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

const CountryTemplate: React.FC<CountryTemplateProps> = ({ countryData, posts }) => {
  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 w-screen min-h-screen overflow-hidden">
      {/* Header */}
      <div className="text-center flex justify-center items-center py-16">
        <div className="space-y-4 px-20">
          <p className="dm-serif-text text-4xl md:text-4xl lg:text-5xl xl:text-6xl">SpiceQuest</p>
          <p className="figtree text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            {countryData.name} Food Reviews
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="justify-center items-center flex mb-8">
        <div className="rounded-full bg-white flex justify-center items-center w-1/2 max-w-screen-md p-1 shadow-lg">
          <input
            type="text"
            placeholder={`Search ${countryData.name} dishes...`}
            className="figtree rounded-full w-full p-2 outline-none pl-5"
          />
        </div>
      </div>

      {/* Posts Section */}
      <div className="flex flex-col items-center space-y-6 px-4 mb-8">
        {posts.length > 0 ? (
          posts.map((post, index) => <Post key={index} post={post} />)
        ) : (
          <p className="text-gray-500">No food reviews available.</p>
        )}
      </div>
    </div>
  );
}

export default CountryTemplate;
