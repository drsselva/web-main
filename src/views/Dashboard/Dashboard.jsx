import React from "react";
import Header from "../../component/DashboardModules/Header/Header";
import HeaderHero from "../../component/DashboardModules/HeaderHero/HeaderHero";
import ActiveSessions from "../../component/DashboardModules/ActiveSessions/ActiveSessions";
import Tracks from "../../component/DashboardModules/Tracks/Tracks";
import Footer from "../../component/DashboardModules/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <HeaderHero />
      <ActiveSessions />
      <Tracks />
      <Footer />
    </>
  );
};

export default Dashboard;
