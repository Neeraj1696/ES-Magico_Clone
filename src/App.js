import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Marketing from "./Pages/Marketing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finance" element={<Marketing />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </div>
  );
}

export default App;
