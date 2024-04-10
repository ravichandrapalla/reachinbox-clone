import styled from "styled-components";
import OneBoxLogo from "../assects/OneBoxLogo.png";
import MainNav from "./MainNav";
import { useSelector } from "react-redux";

const StyledSidebar = styled.aside`
  /* background-color: #101113; */
  background-color: ${(props) => (props.dark ? "#101113" : "#fff")};
  /* padding: 3.2rem 2.4rem; */
  width: 3.5rem;

  border-right: 1px solid #343a40;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* gap: 3.2rem; */
`;
const LogoContainer = styled.div`
  margin-top: 1rem;
  height: 100px;
  cursor: pointer;
`;
const UserIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
`;
const NameText = styled.span`
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", "sans-serif";
  color: white;
`;

function Sidebar() {
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  return (
    <StyledSidebar dark={dark}>
      <LogoContainer>
        <img src={OneBoxLogo} width={32} height={32} alt="main logo" />
      </LogoContainer>

      <MainNav />
      <UserIcon>
        <NameText>AS</NameText>
      </UserIcon>
    </StyledSidebar>
  );
}

export default Sidebar;
