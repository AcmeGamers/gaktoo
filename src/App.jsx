import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/404";
import CourseDetail from "./pages/Courses/CourseDetail";
import Roadmap from "./pages/Roadmap/Roadmap";
import ResultFullstack from "./pages/Roadmap/ResultFullstack";
import ResultFront from "./pages/Roadmap/ResultFront";
import ResultBack from "./pages/Roadmap/ResultBack";
//
import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";


export default function App() {
  // States
  const [connectedAccount] = useGlobalState("connectedAccount");

  // Readers
  useEffect(() => {
    isWallectConnected();
    checkIfTransactionExist();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login accountInfo={connectedAccount} />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/*" element={<CourseDetail />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/result-fullstack" element={<ResultFullstack />} />
          <Route path="/result-front" element={<ResultFront />} />
          <Route path="/result-back" element={<ResultBack />} />
          <Route path="/home" element={<Navigate to="/home" />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
