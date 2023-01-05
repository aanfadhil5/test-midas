import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<HomePage />} path="/home" />
    </Routes>
  );
}

export default App;
