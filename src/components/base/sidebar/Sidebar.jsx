import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "./assets/profile.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Side = styled.div`
  top: 7.5rem;
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  position: relative;
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const menus = [
    { name: "👋 AID동아리에 오신 것을 환영합니다!", path: "/" },
    { name: "💻 스터디 안내", path: "/study" },
    { name: "📢 동아리 게시판", path: "/board" },
    { name: "💬 디스코드 & 오픈채팅방", path: "/chat" },
  ];
  return (
    <Side>
      <Profile src={profile}></Profile>
      <HamburgerMenu />
      <Menu>
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
