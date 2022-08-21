import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function Home() {
  const contents = [
    "AI enthusiast",
    "Medical Science enthusiast",
    "CrossFit enthusiast",
    "Music enthusiast",
    "Outdoors enthusiast",
  ];
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(contents[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      var newIndex = index;
      newIndex++;
      if (newIndex > contents.length - 1) newIndex = 0;

      setIndex(newIndex);
      setContent(contents[newIndex]);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <HomeContainer>
      <HomeHeader>
        <TopHeader>Hi,</TopHeader>
        <SubHeader>I'm Kristian,</SubHeader>
        <InnerHeader>
          <Unanimated>Cybernetics Student and</Unanimated>
          <Animated>{content}</Animated>
        </InnerHeader>
      </HomeHeader>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: #f95f46;
  scroll-snap-align: start;
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
`;

const HomeHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TopHeader = styled.h1`
  ${ResetHeaders()};
  font-size: 80px;
`;

const SubHeader = styled.h2`
  ${ResetHeaders()};
  font-size: 60px;
`;

const InnerHeader = styled.h3`
  ${ResetHeaders()};
  font-size: 40px;
  display: flex;
  flex-direction: row;
`;

const Unanimated = styled.div``;

const Animated = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  animation: openclose 2s ease-in-out infinite;

  @keyframes openclose {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.7;
    }
    60% {
      opacity: 1;
    }
    95% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

function ResetHeaders() {
  return "margin: 0px;";
}
