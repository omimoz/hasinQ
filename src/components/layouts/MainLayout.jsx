import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import ContentHeader from "./Header";
import { css } from "@emotion/css";
const { Header, Content } = Layout;
function MainLayout() {
  return (
    <div className={style}>
      <Layout>
        <Header className="header">
          <ContentHeader />
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
}

export default MainLayout;
const style = css`
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .content {
    max-width: 1600px;
    margin: 30px auto;
    width: 100%;
    over-flow: hidden;
    @media (max-width: 1600px) {
      padding: 0 12px;
    }
  }
`;
