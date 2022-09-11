import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {


  return (
    <div className="App">
      
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>

     
    </div>
  );
}

export default App;
