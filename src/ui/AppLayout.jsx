import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: ${(props) => (props.isDark ? "#000000" : "#fff")};
  /* padding: 4rem 4.8rem 6.4rem; */
  overflow: scroll;
  position: relative;
`;

const Container = styled.div`
  /* max-width: 120rem; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const isDark = useSelector((store) => store?.darkModeSlice?.isDark);
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main isDark={isDark}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
