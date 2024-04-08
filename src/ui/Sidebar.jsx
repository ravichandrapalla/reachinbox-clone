import styled from "styled-components";
import OneBoxLogo from "../assects/OneBoxLogo.png";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: #101113;
  /* padding: 3.2rem 2.4rem; */
  width: 3.5rem;

  border-right: 1px solid #343a40;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* gap: 3.2rem; */
`;
const LogoContainer = styled.div`
  margin-top: 1rem;
  height: 100px;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer>
        <img src={OneBoxLogo} width={32} height={32} alt="main logo" />
      </LogoContainer>

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
