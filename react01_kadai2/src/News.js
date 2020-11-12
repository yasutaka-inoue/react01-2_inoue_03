import React from 'react'
import styled from "styled-components";
import NewsImg from "./img/news_img.jpg";
import NewsArticle from "./NewsArticle";
import "./style.css";

// style-------------------------

const EngTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    margin: 60px 0 30px 0;
    font-weight: bold;
    text-transform: uppercase;
`;
const JapTitle = styled.p`
    color: #222222;
    font-size: 18px;
    margin-bottom: 60px;
    text-align: center;
`;

const ArticleList = styled.ul`
    display: flex;
    justify-content: center;
`;

const News = () => {
    return (
        <div>
            <EngTitle className="yellow"><a name="news">News</a></EngTitle>
            <JapTitle>ニュース</JapTitle>
            <ArticleList>
                <NewsArticle 
                    imgsrc={NewsImg} alt="ニュースの画像" date="2016/11/18"
                    text="チーズアカデミー卒業生のコスゲさんによる
                    チーズだけをふんだんに使用した話題のピザ屋
                    「Kosuge Pizza」が渋谷でオープンしました！"/>
                <NewsArticle 
                    imgsrc={NewsImg} alt="ニュースの画像" date="2017/11/18"
                    text="チーズアカデミー卒業生のヤマダさんによる
                    チーズだけをふんだんに使用した話題のピザ屋
                    「Yamada Pizza」が渋谷でオープンしました！"/> 
                <NewsArticle 
                    imgsrc={NewsImg} alt="ニュースの画像" date="2018/11/18"
                    text="チーズアカデミー卒業生のスズキさんによる
                    チーズだけをふんだんに使用した話題のピザ屋
                    「Suzuki Pizza」が渋谷でオープンしました！"/>
            </ArticleList>
            <a className= "button" href="#">More</a>
        </div>
    )
}

export default News
