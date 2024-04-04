import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import Login from "./pages/Login";
import OneBox from "./pages/OneBox";
import { useEffect } from "react";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const urlPharams = new URLSearchParams(window.location.search);
    const token = urlPharams.get("token");
    console.log(token);
    if (token) {
      sessionStorage.setItem("accessToken", token);
      navigate("/oneBox");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {console.log("inside private routes")}
          <Route index element={<Navigate replace to="oneBox" />} />
          <Route path="oneBox" element={<OneBox />} />
        </Route>
        {/* <Route path="oneBox" element={<OneBox />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
