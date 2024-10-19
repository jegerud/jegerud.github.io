import React from "react";
import styled from "styled-components";
import { SubHeader, InnerHeader } from "./styledComponents/headers";
import Content from "./styledComponents/content";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <div>
          <InnerHeader>What About Me?</InnerHeader>
          <Content>
            Based in Oslo, {getYearSince()} years old, and in my life I
            combine working in tech with training, spending time outdoors and 
            playing the accordion.
          </Content>
          <Content>
            Interests within most technologies, but back end development and 
            data science, are what interests me the most.
          </Content>
        </div>
        <div>
          <SubHeader>Work</SubHeader>
          <Content>
            After completing my studies, I started working at Intility as a 
            tech graduate. Here, I received a thorough introduction to how 
            Intility keeps its applications running during a 3-month period 
            in Application Operations. After this period, I moved over to 
            development, where I am now working with data and backend development 
            for internal systems at Intility.
          </Content>
          <Content>
            During my studies, I worked part-time as a teaching assistant in 
            various subjects, where I helped students with programming in C++ 
            and Python, as well as a course in medical cybernetics. During the 
            summers of my study period, I had summer jobs, with two periods at 
            Gyldendal as developer and data scientis being the most relevant.
          </Content>
        </div>
      </AboutContent>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: auto;
  grid-template-areas: "AboutContent AboutFun";
  @media (max-width: 850px) {
    grid-template-columns: 99% 1%;
  }
`;

const AboutContent = styled.header`
  grid-area: AboutContent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  font-weight: 500;
  @media (max-width: 850px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: -20px;
  }
`;

function getYearSince() {
  const birth = new Date("April 3, 1998 17:00:00");
  const current = new Date();
  var since = current.getFullYear() - birth.getFullYear();
  if (current.getMonth() < birth.getMonth()) since--;
  return since;
}
