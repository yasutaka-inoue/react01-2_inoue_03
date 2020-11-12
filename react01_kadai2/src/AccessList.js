import React from 'react'
import styled from "styled-components";

const List = styled.div`
    display: flex;  
    margin-bottom: 30px; 
    font-size: 16px;
    color: black;
    justify-content: center;
`;
const Label = styled.dt`
    width: 180px;
`;
const Detail = styled.dd`
    width: 380px;
`;

const AccessList = ({label, detail}) => {
    return (
        <>
            <List>
                <Label>{label}</Label> 
                <Detail>{detail}</Detail>
            </List>
        </>
    )
}

export default AccessList
