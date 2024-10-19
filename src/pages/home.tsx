import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResetHeaders } from "../helpers/styles-helpers";

export function Home() {
  const contents = [
    "AI enthusiast",
    "Medical Science enthusiast",
    "CrossFit enthusiast",
    "Music enthusiast",
    "Outdoors enthusiast",
    "Liverpool enthusiast",
    "Formula 1 enthusiast"
  ];
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(contents[index]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     var newIndex = index;
  //     newIndex++;
  //     if (newIndex > contents.length - 1) newIndex = 0;

  //     setIndex(newIndex);
  //     setContent(contents[newIndex]);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });

  return (
    <HomeContainer>
      <HomeHeader>
        <TopHeader>Hi,</TopHeader>
        <SubHeader>I'm Kristian,</SubHeader>
        <InnerHeader>
          <Unanimated>A tech enthusiast</Unanimated>
        </InnerHeader>
      </HomeHeader>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  scroll-snap-align: start;
  /* height: 100vh;
  padding-left: 50px;
  padding-right: 100px; */
  @media (max-width: 850px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HomeHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const TopHeader = styled.h1`
  ${ResetHeaders()};
  font-size: 80px;
  font-family: courier new;
  @media (max-width: 850px) {
    font-size: 60px;
  }
`;

const SubHeader = styled.h2`
  ${ResetHeaders()};
  font-size: 60px;
  font-family: courier new;
  font-weight: 100;
  @media (max-width: 850px) {
    font-size: 50px;
  }
`;

const InnerHeader = styled.h3`
  ${ResetHeaders()};
  font-size: 35px;
  font-family: courier new;
  font-weight: 100;
  display: flex;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
    font-size: 30px;
  }
`;

const Unanimated = styled.div`
  margin-right: 10px;
  font-weight: 100;
`;

const Animated = styled.div`
  /* margin-left: 10px; */
  margin-right: 10px;
  /* animation: openclose 2s ease-in-out infinite; */

  /* @keyframes openclose {
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
  } */
`;
