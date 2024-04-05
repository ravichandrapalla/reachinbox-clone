import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import Login from "./pages/Login";
import OneBox from "./pages/OneBox";
import { useEffect } from "react";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <Provider store={store}>
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            </Provider>
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
