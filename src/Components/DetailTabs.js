import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
`;

const Tabs = styled.div`
    width: 100%;
    margin-top: 20px;
`;

const Tab = styled.div`
    font-size: 15px;
    float: left;
    width: 33%;
    text-align: center;
    background-color: rgba(300,300,300,0.3);
    height: 40px;
    line-height: 37px;
    margin-right: 1px;
    &:Last-child{
        margin-right: none;
    }
    &:hover{
        border-bottom: 3px solid;
        transition: border-bottom .2s ease-in-out;
    }
`;


const DetailTabs = ({}) => (
    <Container>
        <Tabs>
            <Tab>Trailer</Tab>
            <Tab>Created By</Tab>
            <Tab>Seasons</Tab>
        </Tabs>

    </Container>
);

export default DetailTabs;
