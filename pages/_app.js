import "antd/dist/antd.less";
import "../styles/globals.less";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BackTop>
        <ArrowUpOutlined
          style={{
            color: "#fff",
            fontSize: 18,
          }}
        />
      </BackTop>
    </>
  );
}

export default MyApp;
