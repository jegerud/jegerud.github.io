import React from "react";
import styled from "styled-components";

export function Projects() {
  console.log(window.pageYOffset);
  
  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <InnerHeader>Projects</InnerHeader>
      </ProjectsHeader>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background-color: #b1e4ff;
`;

const ProjectsHeader = styled.header`
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

const SubHeader = styled.h2`
  font-size: 30px;
`;

