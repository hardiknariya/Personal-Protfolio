import { Layout } from "../components";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import { Avatar, Button, Col, Image, Row, Space } from "antd";
import {
  DownloadOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hardik Protfolio</title>
        <meta name="description" content="Created by Hardik Nariya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home">
        <div className="container mb-5">
          <div className="introduction py-5 mb-5">
            <h1
              style={{
                fontSize: "calc(1.375rem + 1.5vw)",
                color: "#00ff7f",
              }}
            >
              Hello! I am
            </h1>
            <h1 className="name">Hardik Nariya</h1>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#00ff7f",
                margin: 0,
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "React Developer",
                    "Django Developer",
                    "Front end Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: null,
                  delay: 100,
                  deleteSpeed: 100,
                }}
              />
            </h2>
            <h1
              style={{
                fontSize: "calc(1.325rem + .9vw)",
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              Follow me
            </h1>

            <div className="follow-btn-container">
              <Button icon={<GithubOutlined />} size={"large"}>
                Github
              </Button>
              <Button icon={<LinkedinOutlined />} size={"large"}>
                Linkedin
              </Button>
              <Button icon={<TwitterOutlined />} size={"large"}>
                Twitter
              </Button>
              <Button icon={<FacebookOutlined />} size={"large"}>
                Facebook
              </Button>
              <Button icon={<InstagramOutlined />} size={"large"}>
                Instagram
              </Button>
            </div>
          </div>

          <div className="about-me-container py-5">
            <div className="title">
              <Avatar size="large" icon={<UserOutlined />} />
              <h1 className="about-me">About me</h1>
            </div>

            <Row gutter={[12, 12]}>
              <Col sm={24} md={12} lg={12}>
                <p>
                  Hello! I'm Md Omar Faruk, a passionate web developer. I build
                  responsive websites using this modern technology. I am a web
                  developer with solid knowledge in different technologies and
                  enough experience in creating and designing super responsive
                  websites. I develop web applications and desktop applications.
                  My core skill is based on JavaScript and I love to do most of
                  the things using JavaScript. I love to make the web more open
                  to the world. I Completed Web Development Course online from
                  Programming-Hero. I am currently doing Kamil Masters in Quran
                  subject Govt. Madrasa-E-Alia Dhaka. I am available for any
                  kind of job opportunity that suits my interests.
                </p>
              </Col>
              <Col sm={24} md={12} lg={12}>
                <Image
                  src="images/my-photo.jpg"
                  preview={false}
                  className="my-photo"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  );
}
