import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        
        <div className="w-full">
          <Navbar />
        </div>

        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route
              path="*"
              element={
                <div className="text-center text-xl mt-8">
                  <h2 className="text-3xl font-bold text-gray-700 mb-4">404 - Page Not Found</h2>
                  <Link to="/" className="text-blue-600 hover:underline">
                    Go back to Home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Ritesh Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
