"use client";
import { useState } from "react";
import Browse from "./Browse";
import Post from "./Post";
import { motion } from "framer-motion";

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
    profile: string;
    foodPic: string;
  }>;
}

const CountryTemplate: React.FC<CountryTemplateProps> = ({
  countryData,
  posts,
  from,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on searchQuery (case-insensitive match)
  const filteredPosts = posts.filter((post) =>
    post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );


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
            placeholder="Search by username..."
            className="figtree rounded-full w-full p-2 outline-none pl-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Posts Section */}
      <motion.div
        className="flex flex-col items-center space-y-6 px-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Post post={post} />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No matching food reviews.</p>
        )}
      </motion.div>


      {/* Browse Other Countries */}
      <motion.div
        id="browse-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Browse from={from} />
      </motion.div>

      {/* Floating Browse More Button */}
      <div className="fixed bottom-3 right-3 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12">
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
