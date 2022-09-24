import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
