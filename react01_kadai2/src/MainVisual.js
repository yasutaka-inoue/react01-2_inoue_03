import React from "react";
import styled from "styled-components";
import BgImg from "./img/mainbg.png";

const MainVisual = styled.div`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 450px;
  width: 100%;
`;

const TitleCatch = styled.h1`
    color: white;
    font-size: 40px;
    font-weight: bold;
    padding: 175px 0 30px 0;
    text-align: center;
`;

const PageTitle = styled.h2`
    color: white;
    font-size:30px;
    padding:0 0 175px;
    text-align: center;
`;

const Mainvisual = () => {
    return (
        <>
            <MainVisual>
                <TitleCatch>セカイを変えるチーズを作ろう</TitleCatch>
                <PageTitle>チーズ職人養成学校「チーズアカデミーTOKYO」</PageTitle>
            </MainVisual>
        </>
    )
}

export default Mainvisual
