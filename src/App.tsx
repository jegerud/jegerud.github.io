import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { NavBar } from "./components/NavBar";

function App() { 
  return (
    <>
      <NavBar/>
      <AppContainer id="AppContainer">
        <Home />
        <About />
        <Projects />
        <Contact />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

export default App;
