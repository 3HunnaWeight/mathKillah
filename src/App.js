import { CheckBox } from "./components/CheckBox";
import { Name } from "./components/Name";
import { Operations } from "./components/Operations";
import "./styles/app.css"
function App() {
  return (
    <div className="App">
      <Name/>
      <Operations/>
      <CheckBox/>
    </div>
  );
}

export default App;
