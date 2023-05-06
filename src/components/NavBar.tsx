import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {}

export const NavBar = (props: Props) => {
  const [active, setActive] = useState(0);
  const setScrollPosition = (ref: any) => {
    const element = document.getElementById('AppContainer');
    if (element != null){
      const scrollTo = (element.scrollHeight / 4) * ref;
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
        var elementHeight = total / 4;

        if (position <= elementHeight * 0.7) setActive(0);
        else if (position >= elementHeight * 0.7 && position < elementHeight * 1.7) setActive(1);
        else if (position >= elementHeight * 1.7 && position < elementHeight * 2.7) setActive(2);
        else if (position >= elementHeight * 2.7) setActive(3);
      }
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <Topnav>
      <NavElement active={active === 3} onClick={() => setScrollPosition(3)}>Contact</NavElement>
      <NavElement active={active === 2} onClick={() => setScrollPosition(2)}>Projects</NavElement>
      <NavElement active={active === 1} onClick={() => setScrollPosition(1)}>About</NavElement>
      <NavElement active={active === 0} onClick={() => setScrollPosition(0)}>Home</NavElement>
    </Topnav>
  );
};

const Topnav = styled.div`
  grid-area: topnav;
  background-color: transparent;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavElement = styled.button.attrs((props: { active: boolean }) => props)`
  float: right;
  color: #f2f2f2;
  background-color: transparent;
  border: none;
  text-align: center;
  padding: 14px 16px;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  font-weight: ${(props) => (props.active ? 900 : 100)};
  font-size: 17px;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
