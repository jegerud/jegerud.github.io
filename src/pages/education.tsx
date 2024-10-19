import React from "react";
import styled from "styled-components";
import { SubHeader, InnerHeader } from "./styledComponents/headers";
import Content from "./styledComponents/content";

export function Education() {
  return (
    <EducationContainer>
      <EducationContent>
        <div>
          <SubHeader>Studies</SubHeader>
          <Content>
            I recently graduated from Industrial Cybernetics at NTNU, a 2 year
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
      </EducationContent>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas: "EducationContent EducationFun";
  @media (max-width: 850px) {
    grid-template-columns: 99% 1%;
  }
`;

const EducationContent = styled.header`
  grid-area: EducationContent;
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
