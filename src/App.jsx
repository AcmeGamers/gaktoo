import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route index element={<Course />} />
            <Route index element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
