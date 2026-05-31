import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResetHeaders } from "../helpers/styles-helpers";

const roles = [
  "Consultant",
  "Tech Enthusiast",
  "Problem Solver",
  "Sports enthusiast",
  "Accordion Player"
];

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <HomeContainer>
      <HomeHeader>
        <TopHeader>Hi,</TopHeader>
        <SubHeader>I'm Kristian,</SubHeader>
        <InnerHeader>
          <TypingText>
            {displayedText}
            <Cursor>|</Cursor>
          </TypingText>
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

const TypingText = styled.div`
  font-weight: 100;
  display: inline-flex;
  align-items: center;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  background-color: ${props => props.theme.text};
  margin-left: 2px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;
