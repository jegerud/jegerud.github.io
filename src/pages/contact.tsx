import React from "react";
import styled from "styled-components";

export function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>
        <InnerHeader>Contact</InnerHeader>
        <SubHeader>Just in case...</SubHeader>
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

