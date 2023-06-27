import { Route, Routes } from "react-router-dom";
import { CheckBox } from "./components/GoButton";
import { Operations } from "./components/Operations";
import { Home } from "./pages/Home";
import "./styles/app.css"
import { Game } from "./pages/Game";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="game" element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
