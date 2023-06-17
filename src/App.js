import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <h1>React App</h1>
        <Routes>
          <Route exact path="/" element={<AddUser />} />
          <Route path="/" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
