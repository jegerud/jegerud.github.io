import React from "react";
import styled from "styled-components";
import { ResetHeaders } from "../helpers/styles-helpers";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <div>
          <InnerHeader>What About Me?</InnerHeader>
          <Content>
            Based in Trondheim, {getYearSince()} years old, and in my life I
            combine studying Cybernetics with CrossFit and playing the
            accordion.
          </Content>
          <Content>
            Interests within most technologies, but AI and medical technology,
            preferably combined, are what interests me the most.
          </Content>
        </div>
        <div>
          <SubHeader>Studies</SubHeader>
          <Content>
            I'm currently studying Industrial Cybernetics at NTNU, a 2 year
            master program giving me the opportunity to gain knowledge within
            areas such as dynamic systems, artifical intelligence, medical
            cybernetics and ultrasound technology.
          </Content>
          <Content>
            From before I have completed a 3-year bachelor's study in computer
            science at NTNU Gjøvik, creating a solid basis for me within
            mathematics and programming.
          </Content>
        </div>
      </AboutContent>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background-color: #8ce06e;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas: "AboutContent AboutFun";
  @media (max-width: 850px) {
    grid-template-columns: 99% 1%;
  }
`;

const AboutContent = styled.header`
  grid-area: AboutContent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  font-size: calc(10px + 2vmin);
  color: white;
  font-weight: 500;
  @media (max-width: 850px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: -20px;
  }
`;

const InnerHeader = styled.h1`
  ${ResetHeaders()}
  font-size: 60px;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    font-size: 35px;
  }
`;

const SubHeader = styled.h2`
  ${ResetHeaders()}
  margin-top: 20px;
  font-size: 40px;
  @media (max-width: 850px) {
    font-size: 25px;
    margin-top: 5px;
  }
`;

const Content = styled.p`
  font-size: 20px;
  @media (max-width: 850px) {
    font-size: 17px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

function getYearSince() {
  const birth = new Date("April 3, 1998 17:00:00");
  const current = new Date();
  var since = current.getFullYear() - birth.getFullYear();
  if (current.getMonth() < birth.getMonth()) since--;
  return since;
}
