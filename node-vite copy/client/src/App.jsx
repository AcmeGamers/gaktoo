// Modules
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./components/Header";

import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/404";
import CourseDetail from "./pages/Courses/CourseDetail";
import Roadmap from "./pages/Roadmap/Roadmap";
import ResultFullstack from "./pages/Roadmap/ResultFullstack";
import ResultFront from "./pages/Roadmap/ResultFront";
import ResultBack from "./pages/Roadmap/ResultBack";
import CourseContent from "./pages/Courses/CourseContent/Content";

// Wallet
import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
  getAllTransactions,
  signMessage,
  disconnectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";
import SignUp from "./pages/SignUp";

export default function App() {
  // States
  const [connectedAccount, transactions] = useGlobalState("connectedAccount"),
    [data, setData] = useState();

  // Functions
  function requestData() {
    console.log(connectedAccount);
    axios
      .post("/api/user", {
        id: connectedAccount,
      })
      .then((res) => {
        console.log("test update");
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });

    // return data from server

    return;
  }

  // Readers
  useEffect(() => {
    isWallectConnected();
    checkIfTransactionExist();
  }, []);

  useEffect(() => {
    requestData();
  }, [connectedAccount]);

  return (
    <div>
      <Header
        data={data}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        connectedAccount={connectedAccount}
      />

      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Login accountInfo={connectedAccount} />} />

        {/* Course */}
        <Route path="/courses" element={<Course />} />
        <Route
          path="/course/*"
          element={
            <CourseDetail
              signMessage={signMessage}
              data={data}
              accountInfo={connectedAccount}
            />
          }
        ></Route>
        <Route
          path="/course/:course/:content"
          element={<CourseContent signMessage={signMessage} />}
        />

        {/* Roadmaps */}
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/result-fullstack" element={<ResultFullstack />} />
        <Route path="/result-frontend" element={<ResultFront />} />
        <Route path="/result-backend" element={<ResultBack />} />

        {/* Authentication */}
        <Route
          path="/signup"
          element={<SignUp accountInfo={connectedAccount} data={data} />}
        />

        {/* Home */}
        <Route path="/home" element={<Navigate to="/home" />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
//  <button onClick={() => { signMessage("Update"); }}> Access server using proxy </button>
