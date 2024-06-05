import { useEffect } from "react";
import "./index.css";
import Aos from "aos"; // aos library animation
import "aos/dist/aos.css";
import Home from "./modules/home/Home";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
