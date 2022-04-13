import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoute from "./Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Register from "./Pages/Auth/Register";

function App() {
  const state = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      <BrowserRouter>
        {state.token ? <Navbar /> : " "}
        <PrimaryRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
