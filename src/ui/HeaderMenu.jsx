import styled from "styled-components";
// import { Logout } from "../features/authentication/Logout";
// import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

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
const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  cursor: pointer;
`;
const Text = styled.span`
  color: ${(props) => (props.isDark ? "#fff" : "#1f1f1f")};
`;
export function HeaderMenu() {
  const navigate = useNavigate();
  const dark = useSelector((store) => store.darkModeSlice.isDark);
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
        <Profile>
          <Text isDark={dark}>Tim's Workspace</Text>
          <IoIosArrowDown color={dark ? "#fff" : "#1f1f1f"} />
        </Profile>
      </ListItems>
      {/* <li>
        <Logout />
      </li> */}
    </StyledHeaderMenu>
  );
}
