import React from "react";
import styled from "styled-components";

interface Props {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export function CarouselDots({ count, activeIndex, onDotClick }: Props) {
  return (
    <DotsRow>
      {Array.from({ length: count }).map((_, index) => (
        <Dot
          key={index}
          active={index === activeIndex}
          onClick={() => onDotClick(index)}
          aria-label={`Go to item ${index + 1}`}
        />
      ))}
    </DotsRow>
  );
}

const DotsRow = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? "10px" : "8px")};
  height: ${(props) => (props.active ? "10px" : "8px")};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => (props.active ? props.theme.text : "transparent")};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
`;
