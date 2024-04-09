/* eslint-disable no-unused-vars */
import styled from "styled-components";
// import { Logout } from "../features/authentication/Logout";
import { HeaderMenu } from "./HeaderMenu";
// import { UserAvatar } from "../features/authentication/UserAvatar";
import { useSelector } from "react-redux";

const StyledHeader = styled.header`
  height: 4rem;
  background-color: ${(props) => (props.isDark ? "#1f1f1f" : "#fff")};
  /* padding: 1.5rem; */
  border-bottom: 1px solid #343a40;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  return (
    <StyledHeader isDark={dark}>
      {/* <UserAvatar /> */}
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
