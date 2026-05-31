import React from "react";
import styled from "styled-components";
import { InnerHeader } from "./styledComponents/headers";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React, TypeScript, and styled-components featuring dark mode and smooth scroll navigation.",
      githubUrl: "https://github.com/jegerud/jegerud.github.io"
    },
    {
      title: "Workout Logging App",
      description: "A simple workout logging app built with modern SwiftUi. Not at all ready and therefore not published on the App Store, but available on GitHub for anyone interested in checking it out.",
      githubUrl: "https://github.com/jegerud/workout-logging-app"
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <InnerHeader>Projects</InnerHeader>
      </ProjectsHeader>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <GithubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </GithubLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 850px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const ProjectsHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px ${props => props.theme.cardShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${props => props.theme.cardShadowHover};
  }

  @media (max-width: 850px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  font-family: courier new;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  font-family: courier new;
  line-height: 1.5;
  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

const GithubLink = styled.a`
  font-size: 14px;
  font-family: courier new;
  color: ${props => props.theme.linkColor};
  text-decoration: underline;
  font-weight: 500;
  transition: opacity 0.2s ease;
  opacity: 0.7;
  margin-top: 5px;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 850px) {
    font-size: 13px;
  }
`;
