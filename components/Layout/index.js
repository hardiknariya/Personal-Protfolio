import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "antd";

const LayoutComp = (props) => {
  return (
    <Layout>
      <Header />
      {props?.children}
      <Footer />
    </Layout>
  );
};

export default LayoutComp;
