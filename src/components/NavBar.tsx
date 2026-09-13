import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {}

export const NavBar = (props: Props) => {
  const [active, setActive] = useState(0);
  const setScrollPosition = (ref: any) => {
    const element = document.getElementById('AppContainer');
    if (element != null){
      const scrollTo = (element.scrollHeight / 6) * ref;
      element.scrollTo({
        top: scrollTo,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.getElementById("AppContainer");
      if (element != null) {
        var position = element.scrollTop;
        var total = element.scrollHeight;
        var elementHeight = total / 6;

        if (position <= elementHeight * 0.7) setActive(0);
        else if (position >= elementHeight * 0.7 && position < elementHeight * 1.7) setActive(1);
        else if (position >= elementHeight * 1.7 && position < elementHeight * 2.7) setActive(2);
        else if (position >= elementHeight * 2.7 && position < elementHeight * 3.7) setActive(3);
        else if (position >= elementHeight * 3.7 && position < elementHeight * 4.7) setActive(4);
        else if (position >= elementHeight * 4.7) setActive(5);
      }
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <Topnav>
      <NavElement active={active === 0} onClick={() => setScrollPosition(0)}>Home</NavElement>
      <NavElement active={active === 1} onClick={() => setScrollPosition(1)}>About</NavElement>
      <NavElement active={active === 2} onClick={() => setScrollPosition(2)}>Work</NavElement>
      <NavElement active={active === 3} onClick={() => setScrollPosition(3)}>Education</NavElement>
      <NavElement active={active === 4} onClick={() => setScrollPosition(4)}>Projects</NavElement>
      <NavElement active={active === 5} onClick={() => setScrollPosition(5)}>Contact</NavElement>
    </Topnav>
  );
};

const Topnav = styled.div`
  display: flex;
  background-color: transparent;
  overflow: visible;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: auto;

  @media (max-width: 850px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding: 0 60px 0 15px;
    gap: 4px;
    border-bottom: 1px solid ${props => props.theme.cardBorder};
  }
`;

const NavElement = styled.button.attrs((props: { active: boolean }) => props)`
  float: left;
  background-color: transparent;
  border: none;
  text-align: left;
  font-family: courier new;
  color: ${props => props.theme.text};
  padding: 14px 16px;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: ${(props) => (props.active ? 900 : 100)};
  font-size: 17px;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  transition: transform 0.2s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 850px) {
    flex: 0 0 auto;
    white-space: nowrap;
    padding: 8px 10px;
    margin: 0;
    font-size: 14px;
  }
`;
