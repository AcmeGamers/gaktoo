import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/404";
import Roadmap from "./pages/Roadmap/Roadmap";
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
          <Route path="/" element={<Login accountInfo={connectedAccount} />}>
            <Route path="/course" index element={<Course />} />
            <Route path="/roadmap" index element={<Roadmap />} />
            <Route path="/home" element={<Navigate to="/home" />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}