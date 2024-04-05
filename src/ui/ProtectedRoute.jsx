/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(() => {
    sessionStorage.getItem("accessToken");
  });

  useEffect(() => {
    const urlPharams = new URLSearchParams(window.location.search);
    const token =
      urlPharams.get("token") || sessionStorage.getItem("accessToken");
    // console.log(token);
    if (token) {
      sessionStorage.setItem("accessToken", token);
      setAuthenticated(true);
    } else {
      // console.log("redirecting to login because no token found");
      navigate("/login");
    }
  }, []);

  if (authenticated) return children;
}
