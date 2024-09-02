import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import CategoryBlogs from './pages/categoryBogs';
import BlogDetails from './pages/blogDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:category' element={<CategoryBlogs />} />
          <Route path='/blog/:id' element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
