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
  const [token, setToken] = useState(null);
  //1 . Load auth user
  //   const { user, isLoading, isAuthenticated } = useUser();

  //2 . While loading show spinner

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    setToken(token);
    if (!token) {
      navigate("/login");
    }
  }, []);

  if (!token)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (token) return children;
}
