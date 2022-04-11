import React from "react";
import styled from "styled-components";

function HomePage() {
    return (
        <HomePageView>
            <div className="heading">
                Add bill
            </div>

        </HomePageView>
    )
}

export default HomePage;

const HomePageView = styled.div`
    min-height: 900px;
    padding: 72px 54px;
    .heading {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #0A043C;
    }
`;
