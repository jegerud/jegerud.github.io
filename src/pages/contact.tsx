import React from "react";
import styled from "styled-components";
import { InnerHeader } from "./styledComponents/headers";

export function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>
        <InnerHeader>Contact</InnerHeader>
        <SubHeader>Just in case...</SubHeader>
        <Content>
          Head over to my 
          <CustomLink href="https://www.linkedin.com/in/kristian-jegerud-bab1781a0/" target="_blank">
            LinkedIn Profile
          </CustomLink>
          <Spacer>or</Spacer> 
          feel free to stay in touch on 
          <CustomLink href="https://www.threads.net/@jegerud98" target="_blank">
            Threads
          </CustomLink>
        </Content>
      </ContactHeader>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  /* background-color: #6ee0b2; */
`;

const ContactHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding-left: 150px;
  padding-right: 150px; */
  font-size: calc(10px + 2vmin);
  @media (max-width: 850px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;


const SubHeader = styled.h2`
  font-size: 30px;
  font-weight: 100;
  @media (max-width: 850px) {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 850px) {
    font-size: 22px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const CustomLink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  color: black;
`;

const Spacer = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
