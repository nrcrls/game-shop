import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

const App = () => {
  const getGame = () => {
    axios.get(`https://api.rawg.io/api/platforms?key=${process.env.REACT_APP_PRIVATE_KEY}`).then(
      (response) => {
        console.log(response);
      });
  }

  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
