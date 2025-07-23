// src/components/PostCard.jsx

import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
        {post.title}
      </h3>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3"> {/* line-clamp for body preview */}
        {post.body}
      </p>
      <Link
        to={`/post/${post.id}`}
        className="text-blue-600 hover:underline self-end"
      >
        Read More &rarr;
      </Link>
    </div>
  );
};

export default PostCard;