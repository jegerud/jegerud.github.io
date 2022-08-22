import React from "react";
import styled from "styled-components";

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsFigure>
        <Figure
          src={require("../images/project-figure.png")}
          alt="Project Figure"
          width="400"
          height="400"
        ></Figure>
      </ProjectsFigure>
      <ProjectsHeader>
        <InnerHeader>Projects</InnerHeader>
        <SubHeader>
          <a href="https://github.com/jegerud" target="_blank" rel="noreferrer">
            <ExploreButton>Explore</ExploreButton>
          </a>
          <Content>my projects on GitHub</Content>
        </SubHeader>
      </ProjectsHeader>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background-color: #b1e4ff;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas: "figure header";
`;

const ProjectsFigure = styled.div`
  grid-area: figure;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Figure = styled.img``;

const ProjectsHeader = styled.header`
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
`;

const InnerHeader = styled.h1`
  font-size: 80px;
  margin-bottom: -10px;
`;

const SubHeader = styled.div`
  margin-top: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 500px;
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
`;
