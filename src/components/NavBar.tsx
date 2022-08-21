import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {}

export const NavBar = (props: Props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.getElementById("AppContainer");
      if (element != null) {
        var position = element.scrollTop;
        var total = element.scrollHeight;
        var elementHeight = total / 4;

        if (position === elementHeight * 0) setActive(0);
        else if (position === elementHeight * 1) setActive(1);
        else if (position === elementHeight * 2) setActive(2);
        else if (position === elementHeight * 3) setActive(3);
      }
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <Topnav>
      <NavElement active={active === 3}>Contact</NavElement>
      <NavElement active={active === 2}>Projects</NavElement>
      <NavElement active={active === 1}>About</NavElement>
      <NavElement active={active === 0}>Home</NavElement>
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
