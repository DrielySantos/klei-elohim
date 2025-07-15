import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Cards from "./pages/Cards";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
