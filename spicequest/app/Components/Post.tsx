import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface PostProps {
  post: {
    username: string;
    date: string;
    body: string;
    tag1?: string;
    tag2?: string;
    likes: number;
    profile: string;
    foodPic: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full xs:w-full sm:w-3/4 md:w-1/2 lg:w-[600px] xl:w-[720px] h-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Image className="w-12 h-12 bg-gray-300 rounded-full image object-cover" src={post.profile} alt={"Profile"} width={720} height={720}></Image> {/* Profile Placeholder */}
          <div>
            <h3 className="font-semibold text-gray-800">@{post.username}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>

        {/* Post Content */}
        <div className="text-gray-700 mt-4 text-justify">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>

        {/* Image Placeholder */}
        <Image className="mt-4 w-full h-48 sm:h-64 md:h-72 bg-gray-200 rounded-lg object-cover" src={post.foodPic} alt={"Adobo"} width={1000} height={1000}></Image>
      </div>

      {/* Tags & Footer */}
      <div className="flex flex-wrap justify-between items-center mt-4">
        <div className="flex space-x-2">
          {post.tag1 && (
            <span className="bg-red-200 text-red-600 px-3 py-1 text-sm rounded-full">{post.tag1}</span>
          )}
          {post.tag2 && (
            <span className="bg-green-200 text-green-600 px-3 py-1 text-sm rounded-full">{post.tag2}</span>
          )}
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          <span className="text-lg">⭐</span>
          <span className="text-gray-700 font-semibold">{post.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;