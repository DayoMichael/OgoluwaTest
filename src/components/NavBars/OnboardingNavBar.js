import React from "react";
import styled from "styled-components";
import {ReactComponent as SwitchaLogoHeader} from '../../assets/Icons/SwitchaHeaderLogo.svg';
import {ReactComponent as NotificationIcon} from "../../assets/Icons/NavbarNotificationOg.svg";
import {ReactComponent as DownArrowIcon} from "../../assets/Icons/DownArrowOg.svg";

function NavBar() {
  return (
    <NavbarView>
      <div className="flex">
        <div className="notification-icon mr-4">
          <NotificationIcon/>
        </div>
        <div className="justify-between flex align-center profile">
          <div className="image-icon"></div>
          <div className="profile-name"> Ogoluwa</div>
          <div className="icon"> <DownArrowIcon/> </div>
        </div>

      </div>
      
    </NavbarView>
  )
}

export default NavBar;

const NavbarView = styled.div`
    min-height: 65px;
    min-width: 100%;
    display: flex;
    align-items: center;
    z-index: 20;
    padding: 35px 185px;
    justify-content: flex-end;

    .notification-icon {
      width: 54.8px;
      height: 54.8px;
      border-radius: 100%;
      border: 1px solid #E9E9E9;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-icon {
      width: 54.8px;
      height: 54.8px;
      border-radius: 100%;
      background: #091E46;
      border-radius: 100px;
    }
    .profile-name {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #091E46;
    }
    .profile {
      width: 208px;
    }
`;