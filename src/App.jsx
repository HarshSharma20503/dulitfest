import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import Speakers from "./Pages/Speakers/Speakers";
import Programme from "./Pages/Programme/Programme";
import Register from "./Pages/Register/Register";
import Sponsers from "./Pages/Sponsers/Sponsers";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import Loader from "./Components/Loader/Loader";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sponsers" element={<Sponsers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
};

export default App;
