import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComp = (props) => {
  return (
    <Footer style={{ textAlign: "center", background: "#212529" }}>
      <h2 style={{ color: "#fff" }}>Thank You :)</h2>
    </Footer>
  );
};

export default FooterComp;
