import React from "react";
import styled from "styled-components";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Education } from "./pages/education";
import { NavBar } from "./components/NavBar";

function App() { 
  return (
    <Container>
      <NavBar/>
      <AppContainer id="AppContainer">
        <Home />
        <About />
        <Education />
        <Contact />
      </AppContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ecdbc7;
  color: black;
  font-family: courier new;
`;

const AppContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
  padding-left: 50px;
  padding-right: 100px;
`;

export default App;
