import React from 'react'
import styled from "styled-components";

const Article = styled.div`
    width: 300px;
    margin: 0 15px 60px 15px;
    font-size: 16px;
`;

const Date = styled.p`
    padding: 30px 0 24px 0;
    font-size: 16px;
`;
const ArticleText = styled.p`
    line-height: 1.5;
    text-align: justify;
    font-size: 16px;
`;

const NewsArticle = ({imgsrc, alt, date, text}) => {
    return (
        <>
            <Article>
                <img src={imgsrc} alt={alt}/>
                <Date>{date}</Date>
                <ArticleText>{text}</ArticleText>
            </Article>
        </>
    )
}

export default NewsArticle
