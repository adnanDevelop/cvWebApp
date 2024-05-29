import "./index.css";
import { useSelector } from "react-redux";
import Home from "./modules/home/Home";

function App() {
  const { isAuthanticated } = useSelector((state) => state.authSlice);
  console.log(isAuthanticated);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
