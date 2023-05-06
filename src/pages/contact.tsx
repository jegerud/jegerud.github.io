import React from "react";
import styled from "styled-components";

export function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>
        <InnerHeader>Contact</InnerHeader>
        <SubHeader>Just in case...</SubHeader>
        <Content>
          Head over to my 
          <CustomLink href="https://www.linkedin.com/in/kristian-jegerud-bab1781a0/">
            LinkedIn Profile
          </CustomLink>
          <Spacer>or</Spacer> 
          feel free to send a message on 
          <CustomLink href="https://twitter.com/KJegerud">
            Twitter
          </CustomLink>
        </Content>
      </ContactHeader>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background-color: #6ee0b2;
`;

const ContactHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 150px;
  padding-right: 150px;
  font-size: calc(10px + 2vmin);
  color: white;
  @media (max-width: 850px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const InnerHeader = styled.h1`
  font-size: 80px;
  margin-bottom: -10px;
  @media (max-width: 850px) {
    font-size: 70px;
  }
`;

const SubHeader = styled.h2`
  font-size: 30px;
  @media (max-width: 850px) {
    font-size: 30px;
  }
`;

const Content = styled.p`
  font-size: 30px;
  font-weight: 500;
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;

const CustomLink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const Spacer = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
