import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";


import {ReactComponent as HostBeakIcon} from "../../../assets/Icons/HostBeakLogo.svg";
import {ReactComponent as BlueArrowIcon} from "../../../assets/Icons/BlueArrowIconOg.svg";
import {ReactComponent as WelcomeIcon} from "../../../assets/Icons/shuttleOg.svg";
import {ReactComponent as DashboardIcon} from "../../../assets/Icons/DashboardOg.svg";
import {ReactComponent as SalesIcon} from "../../../assets/Icons/SalesOg.svg";
import {ReactComponent as AccountingIcon} from  "../../../assets/Icons/AccountingOg.svg";
import {ReactComponent as BankIcon} from "../../../assets/Icons/BankOg.svg";
import {ReactComponent as PayrollIcon} from "../../../assets/Icons/PayrollOg.svg";
import {ReactComponent as ReportIcon} from "../../../assets/Icons/ReportsOg.svg";
import {ReactComponent as AnalyticsIcon} from "../../../assets/Icons/AnalyticsOg.svg";
import {ReactComponent as SettingsIcon} from "../../../assets/Icons/SettingsOg.svg";
import {ReactComponent as PurchaseIcon} from "../../../assets/Icons/PurchaseIconOg.svg";
import {ReactComponent as AcceptPaymentIcon} from "../../../assets/Icons/AcceptPaymentIconOg.svg";
import {ReactComponent as LogoutIcon} from "../../../assets/Icons/logout.svg";
function Sidebar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const gotoRoute = (route)=>{
      navigate(route)
    }
    const SidebarItems = [
        {
            name: "Welcome",
            icon: <WelcomeIcon/>,
            activeIcon:  <WelcomeIcon/>,
            path: "/welcome"
        },
        {
            name: "Dashboard",
            icon: <DashboardIcon/>,
            activeIcon: <DashboardIcon/>,
            path: "/dashboard"

        },
        {
            name: "Sales",
            icon: <SalesIcon/>,
            activeIcon: <SalesIcon/>,
            path: "/sales"
        },
        {
            name: "Purchases",
            icon: <PurchaseIcon/>,
            activeIcon: <PurchaseIcon/>,
            path: "/"
        },
        {
            name: "Account",
            icon: <AccountingIcon/>,
            activeIcon: <AccountingIcon/>,
            path: "/account"
        },
        {
            name: "Banking",
            icon: <BankIcon/>,
            activeIcon: <BankIcon/>,
            path: "/banking"
        },
        {
            name: "Payroll",
            icon: <PayrollIcon/>,
            activeIcon: <PayrollIcon/>,
            path: "/payroll"
        },
        {
            name: "Reports",
            icon: <ReportIcon/>,
            activeIcon: <ReportIcon/>,
            path: "/reports"
        },
        {
            name: "Analytics",
            icon: <AnalyticsIcon/>,
            activeIcon: <AnalyticsIcon/>,
            path: "/analytics"
        },
        {
            name: "Settings",
            icon: <SettingsIcon/>,
            activeIcon:  <SettingsIcon/>,
            path: "/settings"
        },
    ]
    const SideBarItem = ({Icon, Name, onClick, path}) => {
        return (
            <div className={`sidebar-item flex p-3 align-center mt-3  cursor-pointer ${pathname === path ? " ": ""}`} onClick={onClick}>
                <div className={`flex justify-center align-center mr-3  ${pathname === path ? "active-icon": ""}`}>{Icon}</div>
                <div className="flex align-center text-area">{Name}</div>
            </div>
        )
    }

    return (
        <SidebarView>
            <CompanyBadge>
                <HostBeakIcon/>
                HostBeak
                <div className="icon">
                    <BlueArrowIcon/>
                </div>
            </CompanyBadge>
            {SidebarItems.map((item, index) => (
                <SideBarItem key={index} Icon={item.icon} Name={item.name} path={item.path} pathname={pathname} onClick={()=> gotoRoute(item.path)} />
            ))}

            <div className="width-60 flex justify-between align-center mt-5 mb-4">
                <LogoutIcon/>
                <div className="sm-text"> Logout</div>
            </div>
            <AcceptPaymentButton>
                <AcceptPaymentIcon/>
                Accept Payments
            </AcceptPaymentButton>
        </SidebarView>
    );
}

export default Sidebar;

const SidebarView = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 370px;
    max-width: 370px;
    background: #F9F9F9;
    padding: 10px;
    .sidebar-item {
        font-family: 'Gilroy';
        height: 80px;
        max-width: 80%;
        min-width: 80%;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        justify-content: space-around;
        color: #C4C4C4;
        margin: auto;
        :hover{

        }
        .text-area {
            width: 100px;
            text-align: start
        }
        .active-icon {
            height: 80px;
            width: 80px;
            border-radius: 100%;
            background: #081494;
            >svg >path{
                fill: #ffffff;
            }
        }
    }
    .active {
        color: #000000
    }
    .sm-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }
    .width-60{
        width: 40% !important;
        margin: auto;
    }
`
const CompanyBadge = styled.div`
    min-width: 345px;
    max-width: 345px;
    height: 83px;
    padding: 14px 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #3A3A3A;
    font-style: normal;
    margin: auto;
    margin-top: 20px !important;
    margin-bottom: 0px !important;
    background: #ffffff;
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    
    .icon {
        > svg {
            height:18px;
            width: 9px;
        }
    }
`;

const AcceptPaymentButton = styled.div`
    padding: 20px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303.43px;
    margin: auto;
    height: 73px;
    background: #081494;
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    justify-content: space-between;
    position: bottom;
    margin-bottom: 60px;
`;
