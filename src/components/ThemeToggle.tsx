import React from "react";
import styled from "styled-components";

interface Props {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ isDarkMode, toggleTheme }: Props) => {
  return (
    <ToggleButton onClick={toggleTheme} isDarkMode={isDarkMode}>
      {isDarkMode ? "☀" : "☾"}
    </ToggleButton>
  );
};

const ToggleButton = styled.button<{ isDarkMode: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1.5px solid ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 2px 8px ${props => props.theme.cardShadow};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px ${props => props.theme.cardShadowHover};
  }

  @media (max-width: 850px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
    top: 15px;
    right: 15px;
  }
`;
