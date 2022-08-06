import { Layout, Menu } from "antd";
import React from "react";
import Image from "next/image";

const { Header } = Layout;

const HeaderComp = (props) => {
  return (
    <Header className="header">
      <div className="logo">
        <Image
          src="/images/logo.jpg"
          alt="Vercel Logo"
          width={50}
          height={50}
        />
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        theme="dark"
        className="header-menu"
      >
        <Menu.Item key={"home"}>Home</Menu.Item>
        <Menu.Item key={"about-me"}>About me</Menu.Item>
        <Menu.Item key={"skills"}>Skills</Menu.Item>
        <Menu.Item key={"projects"}>Projects</Menu.Item>
        <Menu.Item key={"contact"}>Contact</Menu.Item>
        <Menu.Item key={"resume"}>Resume</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
