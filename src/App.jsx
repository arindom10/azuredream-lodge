import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Room from "./Components/Room";
import Blog from "./Components/Blog";
import Page from "./Components/Page";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Routing Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
