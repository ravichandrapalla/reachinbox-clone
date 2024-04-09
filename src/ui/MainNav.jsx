import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import {
//   HiOutlineCalendarDays,
//   HiOutlineCog6Tooth,
//   HiOutlineHome,
//   HiOutlineHomeModern,
//   HiOutlineUsers,
// } from "react-icons/hi2";
import homeIcon from "../assects/HomeIcon.png";
import userIcon from "../assects/Usericon.png";
import mailIcon from "../assects/MailIcon.png";
import campaignIcon from "../assects/CampaignIcon.png";
import leadsIcon from "../assects/LeadsIcon.png";
import onebox from "../assects/OneBox.png";
import analytics from "../assects/Analytics.png";
import { useSelector } from "react-redux";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* gap: 1.2rem; */

    color: black;
    font-size: 1rem;
    font-weight: 500;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: white;
    background-color: #101113;
    border-radius: #f10505;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: white;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: blue;
  }
`;
const ListItems = styled.li`
  list-style: none;
  margin: 0;
`;
const ActiveTabContainer = styled.div`
  background-color: ${(props) => (props.isDark ? "#fff" : "#2f3030")};
  /* background-color: #2f3030; */
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;

function MainNav() {
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  return (
    <nav>
      <NavList>
        <ListItems>
          <StyledNavLink to="/home">
            <img src={homeIcon} height={32} width={32} alt="home" />
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/user">
            <img src={userIcon} height={25} width={25} alt="user" />
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/mail">
            <img src={mailIcon} height={24} width={24} alt="mail" />
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/campaign">
            <img src={campaignIcon} height={24} width={24} alt="campaign" />
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/leads">
            <img src={leadsIcon} height={30} width={30} alt="leads" />
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/oneBox">
            <ActiveTabContainer dark={dark}>
              <img
                src={onebox}
                height={26}
                width={26}
                alt="onebox"
                color="#AEAEAE"
              />
            </ActiveTabContainer>
          </StyledNavLink>
        </ListItems>
        <ListItems>
          <StyledNavLink to="/analytics">
            <img src={analytics} height={26} width={26} alt="analytics" />
          </StyledNavLink>
        </ListItems>
      </NavList>
    </nav>
  );
}

export default MainNav;
