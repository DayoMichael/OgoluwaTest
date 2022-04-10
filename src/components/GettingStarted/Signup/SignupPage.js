import React from "react";
import styled from "styled-components";
import signupImage from "../../../assets/Img/OgSignupImage.png"

function SignupPage() {
  return (
    <SignupPageView>
        <div className="width-50 hide-mobile">
            <div>hiiii</div>
        </div>
        <div className="width">

        </div>
        
    </SignupPageView>
  )
}

export default SignupPage;

const SignupPageView = styled.div`
    height: 100vh;
    .width-50 {
        width: 50% !important;
        height: 100% !important;
    }
    .hide-mobile {
        background-image: url("../../../assets/Img/OgSignupImage.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100% !important;
    }

`;
