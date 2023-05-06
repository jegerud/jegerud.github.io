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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg> */}
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
`;

const InnerHeader = styled.h1`
  font-size: 80px;
  margin-bottom: -10px;
`;

const SubHeader = styled.h2`
  font-size: 30px;
`;

const Content = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const CustomLink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const Spacer = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
