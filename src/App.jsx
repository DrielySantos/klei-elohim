import { Routes, Route, Outlet } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Cards from "./pages/Cards";
// import Header from "./components/Header";

const AppLayout = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
    {/* <Header /> */}
    <main>
      <Outlet />
    </main>
  </div>
);


function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
