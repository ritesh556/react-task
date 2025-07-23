import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';

const POSTS_PER_PAGE = 12;

const HomePage = () => {
  const { posts, isLoading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts 
  useEffect(() => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
    setCurrentPage(1); 
  }, [searchTerm, posts]);

  // Pagination logic
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Loading and Error 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-lg text-gray-600">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 mt-8">
        <p className="text-xl font-semibold">Error: {error.message}</p>
        <p className="text-md">Could not fetch blog posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Latest Blog Posts</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts by title or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {currentPosts.length === 0 && (
        <div className="text-center text-gray-600 text-lg mt-8">
          No posts found matching your search.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination  */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
