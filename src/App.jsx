import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Apply from "./pages/Apply/Apply";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
