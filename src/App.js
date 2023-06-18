import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Menu from "./components/menu";
import ShowUser from "./components/ShowUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <h1>React App</h1>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/all-users" element={<ShowUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
