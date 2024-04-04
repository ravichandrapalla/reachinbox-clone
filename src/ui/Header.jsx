/* eslint-disable no-unused-vars */
import styled from "styled-components";
// import { Logout } from "../features/authentication/Logout";
import { HeaderMenu } from "./HeaderMenu";
// import { UserAvatar } from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  height: 4rem;
  background-color: #1f1f1f;
  /* padding: 1.5rem; */
  border-bottom: 1px solid #343a40;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      {/* <UserAvatar /> */}
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
