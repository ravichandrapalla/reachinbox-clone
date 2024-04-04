import styled from "styled-components";
// import { Logout } from "../features/authentication/Logout";
// import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
`;
const ListItems = styled.li`
  list-style: none;
`;

export function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      {/* <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li> */}
      <ListItems>
        <DarkModeToggle />
      </ListItems>
      <ListItems>
        <span>My Name</span>
      </ListItems>
      {/* <li>
        <Logout />
      </li> */}
    </StyledHeaderMenu>
  );
}