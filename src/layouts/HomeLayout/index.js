import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import Sidebar from "../../components/ReusableComponents/SideBar/Sidebar";
import NavBar from "../../components/NavBars/OnboardingNavBar";

export default function HomeLayout() {
  return (
    <HomeLayoutView>
        <Sidebar/>
        <MainView>
            <NavBar/>
            <div className="inner-container">
                
                <Outlet/>
            </div>
        </MainView>
    </HomeLayoutView>
  );
};

const HomeLayoutView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const MainView = styled.div`
    background: #F9F9F9;
    width: 100%;
    .inner-container {
        border-radius: 20px;
        background: #E2E8F0;
        padding: 44px 34px;
    }
`;
