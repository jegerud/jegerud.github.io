import React from "react";
import styled from "styled-components";

export function Education() {
  const query = `(max-width: 850px`;
  const size = query ? "300" : "400";
  return (
    <EducationContainer>
      <EducationFigure>
        <Figure
          src={require("../images/project-figure.png")}
          alt="Project Figure"
          width={size}
          height={size}
        ></Figure>
      </EducationFigure>
      <EducationHeader>
        <InnerHeader>Education</InnerHeader>
        <SubHeader>
          <a href="https://github.com/jegerud" target="_blank" rel="noreferrer">
            <ExploreButton>Explore</ExploreButton>
          </a>
          <Content>my education on GitHub</Content>
        </SubHeader>
      </EducationHeader>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  /* background-color: #b1e4ff; */
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas: "figure header";
  @media (max-width: 850px) {
    height: 0vh;
    min-height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 52% 48%;
    grid-template-areas: 
      "figure" 
      "header";
  }
`;

const EducationFigure = styled.div`
  grid-area: figure;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Figure = styled.img``;

const EducationHeader = styled.header`
  grid-area: header;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-left: 150px;
  padding-right: 150px;
  font-size: calc(10px + 2vmin);
  color: white;
  @media (max-width: 850px) {
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    justify-content: flex-start;
  }
`;

const InnerHeader = styled.h1`
  font-size: 80px;
  margin-bottom: -10px;
  @media (max-width: 850px) {
    font-size: 50px;
  }
`;

const SubHeader = styled.div`
  margin-top: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 500px;
  @media (max-width: 850px) {
    width: 50px;
    flex-direction: column;
    justify-content: center;
  }
`;

const ExploreButton = styled.button`
  height: 45px;
  width: 120px;
  margin-right: 10px;
  font-size: 28px;
  background: transparent;
  color: white;
  border: solid 2px white;
  font-weight: 500;

  @media (max-width: 850px) {
    margin-top: 30px;
    font-size: 22px;
  }

  :hover {
    background-color: #ffffff;
    color: #b1e4ff;
    cursor: pointer;
    animation: fadein 0.15s ease-in-out;

    @keyframes fadein {
      0% {
        background-color: #b1e4ff;
        color: #ffffff;
      }
      50% {
        background-color: #ecf8ff;
        color: #d7f1ff;
      }
      100% {
        background-color: #ffffff;
        color: #b1e4ff;
      }
    }
  }
`;

const Content = styled.p`
  font-weight: 500;
  @media (max-width: 850px) {
    width: 300px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
