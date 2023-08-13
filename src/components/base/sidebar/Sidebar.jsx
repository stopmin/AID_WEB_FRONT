import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "./assets/profile.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Side = styled.div`
  top: 7.5rem;
  padding-top: 2rem;
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isOpen ? "18%" : "0")};
  position: fixed;
  transition: width 0.3s linear;
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
  position: fixed;
  top: 8.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? "10.5rem" : "1.5rem")});
`;

const Profile = styled.img`
  height: 10rem;
  border-radius: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-10rem")});
`;

const Menu = styled.div`
  margin-top: 2rem;
  width: 13rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-13rem")});
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    { name: "👋 AID동아리에 오신 것을 환영합니다!", path: "/" },
    { name: "💻 스터디 안내", path: "/study" },
    { name: "📢 동아리 게시판", path: "/board" },
    { name: "💬 디스코드 & 오픈채팅방", path: "/chat" },
  ];

  return (
    <Side isOpen={isOpen}>
      <Profile isOpen={isOpen} src={profile}></Profile>
      <HamburgerMenu isOpen={isOpen} onClick={toggleSidebar} />
      <Menu isOpen={isOpen}>
        {menus.map((menu, index) => {
          return (
            <NavLink exact style={{ color: "gray", textDecoration: "none" }} to={menu.path} key={index} activeStyle={{ color: "black" }}>
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
