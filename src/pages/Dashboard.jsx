import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Dashboard/Sidebar"; // Adjust the import path as necessary

import DashboardRoutes from "../Routes/DashboardRoutes";
import { Outlet } from "react-router-dom";
import Headerside from "../mocks/Headerside";
import "../styles/dashboard.css";
import DashboardHeader from "../components/SidebarHeading/DashboardHeader";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header1 = styled.header`
  color: #fff;

  text-align: center;
`;

const Footer1 = styled.footer`
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 25px 100px 50px 48px;
  background-color: #f0f0f0;
`;

const Dashboard = () => {

  return (
    <Layout>
      {/* <Header1>
        <Headerside />
      </Header1> */}
      <ContentWrapper>
        <DashboardHeader/>
        <Sidebar />
        {/* <MainContent> */}

        <div className="iUNkpW">
          <DashboardRoutes />
        </div>

        {/* </MainContent> */}
      </ContentWrapper>
      {/* <Footer1>
      <Footer/>
      </Footer1> */}
    </Layout>
  );
};

export default Dashboard;
