import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Project from "./sections/Project";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
        <Home />
        <Project />

      <div className="pt-32 px-4">
        <section id="contact" className="min-h-screen bg-gray-100 p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
          <p className="text-center">Contact</p>
        </section>
      </div>
    </motion.div>
  );
}

export default App;
