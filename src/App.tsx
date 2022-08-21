import React from "react";
import styled from "styled-components";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";

function App() {
  return (
    <AppContainer>
      <Home />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

export default App;
