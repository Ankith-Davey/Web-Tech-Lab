// App.jsx
// Defines all routes for the site using react-router-dom.

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Leadership from "./pages/Leadership";
import Undergraduate from "./pages/Undergraduate";
import Postgraduate from "./pages/Postgraduate";
import Eligibility from "./pages/Eligibility";
import Application from "./pages/Application";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/leadership" element={<Leadership />} />

          <Route path="/academics/undergraduate" element={<Undergraduate />} />
          <Route path="/academics/postgraduate" element={<Postgraduate />} />

          <Route path="/admissions/eligibility" element={<Eligibility />} />
          <Route path="/admissions/application" element={<Application />} />

          <Route path="/research" element={<Research />} />

          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
