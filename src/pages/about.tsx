import React from "react";
import styled from "styled-components";

export function About() {
  return (
    <AboutContainer>
      <AboutHeader>
        <InnerHeader>About</InnerHeader>
        <Content>
          My name is Kristian Jegerud, and I am {getYearSince()} years old. I am
          originally from Skotterud in Eidskog, but currently lives in Trondheim
          for studies. Free time is used for CrossFit, the outdoors and playing
          the accordion.
        </Content>
        <div>
          <SubHeader>Studies</SubHeader>
          <Content>
            I have completed a 3-year bachelor's study in computer science at
            NTNU Gjøvik, giving me a solid basis within web development,
            mathematics and programming. I'm currently studying Industrial
            Cybernetics at NTNU, a 2 year master program that gives a solid
            basis with theoretical and practical knowledge in observing and
            management of dynamic systems. I have chosen to spread the master
            program over 3 years, making space for me to dive deeper into
            subject areas I am interested in.
          </Content>
        </div>
      </AboutHeader>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background-color: #8ce06e;
`;

const AboutHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 150px;
  padding-right: 150px;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const InnerHeader = styled.h1`
  font-size: 80px;
`;

const SubHeader = styled.h2`
  font-size: 40px;
`;

const Content = styled.p`
  font-size: 16px;
`;

function getYearSince() {
  const birth = new Date("April 3, 1998 17:00:00");
  const current = new Date();
  var since = current.getFullYear() - birth.getFullYear();
  if (current.getMonth < birth.getMonth) since--;
  // console.log(current - birth);
  return since;
}
