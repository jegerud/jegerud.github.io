import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Education } from "./pages/education";
import { WorkExperience } from "./pages/work-experience";
import { Projects } from "./pages/projects";
import { NavBar } from "./components/NavBar";
import { ThemeToggle } from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = sessionStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    sessionStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <NavBar/>
        <AppContainer id="AppContainer">
          <Home />
          <About />
          <WorkExperience />
          <Education />
          <Projects />
          <Contact />
        </AppContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-family: courier new;
  transition: background-color 0.3s ease, color 0.3s ease;
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
