import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
});

const PostDetailPage = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-lg text-gray-600">Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 mt-8">
        <p className="text-xl font-semibold">Error: {error.message}</p>
        <p className="text-md">Could not fetch the post. Please try again later.</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-gray-600 mt-8">
        <p className="text-xl font-semibold">Post not found.</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 md:p-10 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-8">{post.body}</p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetailPage;
