import React, { useRef } from "react";
import styled from "styled-components";
import { InnerHeader } from "./styledComponents/headers";
import { CarouselDots } from "./styledComponents/carouselDots";
import { useCarouselIndex } from "../helpers/useCarouselIndex";

interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: { month: string; year: number };
  endDate: { month: string; year: number };
  highlights: string[];
  url?: string;
}

export function Education() {
  const educations: Education[] = [
    {
      institution: "NTNU",
      degree: "Master of Science",
      field: "Cybernetics & Robotics, Industrical Cybernetics",
      startDate: { month: "Aug", year: 2021 },
      endDate: { month: "Jun", year: 2024 },
      url: "https://www.ntnu.no/studier/mitk",
      highlights: [
        "Dynamic systems and control theory",
        "Artificial intelligence and machine learning",
        "Medical cybernetics",
        "Ultrasound technology",
        "Extra year to attendand courses in AI and medical cybernetics"
      ]
    },
    {
      institution: "NTNU Gjøvik",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: { month: "Aug", year: 2018 },
      endDate: { month: "Jun", year: 2021 },
      url: "https://www.ntnu.no/studier/bidata",
      highlights: [
        "Mathematics and algorithms",
        "Programming and software development",
        "Data structures and databases",
        "System development"
      ]
    }
  ];

  const formatDateRange = (edu: Education): string => {
    return `${edu.startDate.year} - ${edu.endDate.year}`;
  };

  const gridRef = useRef<HTMLDivElement>(null);
  const { activeIndex, scrollToIndex } = useCarouselIndex(gridRef, educations.length);

  return (
    <EducationContainer>
      <EducationHeader>
        <InnerHeader>Education</InnerHeader>
      </EducationHeader>
      <CarouselSection>
        <EducationGrid ref={gridRef}>
          {educations.map((edu, index) => (
            <EducationCard key={`${edu.institution}-${index}`}>
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <Field>{edu.field}</Field>
              <DateRange>{formatDateRange(edu)}</DateRange>
              {edu.url && (
                <ProgramLink href={edu.url} target="_blank" rel="noopener noreferrer">
                  View Program →
                </ProgramLink>
              )}
              <HighlightsSection>
                <HighlightsList>
                  {edu.highlights.map((highlight, idx) => (
                    <HighlightItem key={idx}>{highlight}</HighlightItem>
                  ))}
                </HighlightsList>
              </HighlightsSection>
            </EducationCard>
          ))}
        </EducationGrid>
        <CarouselDots count={educations.length} activeIndex={activeIndex} onDotClick={scrollToIndex} />
      </CarouselSection>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 850px) {
    height: calc(100vh - 50px);
    overflow: hidden;
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 850px) {
    margin-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const CarouselSection = styled.div`
  display: contents;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    height: 52vh;
    gap: 16px;
    padding: 0 8%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const EducationCard = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px ${props => props.theme.cardShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${props => props.theme.cardShadowHover};
  }

  @media (max-width: 850px) {
    flex: 0 0 84%;
    scroll-snap-align: center;
    overflow-y: auto;
    padding: 15px;
  }
`;

const Institution = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  font-family: courier new;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const Degree = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  font-family: courier new;
  opacity: 0.8;
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;

const Field = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  font-family: courier new;
  opacity: 0.7;
  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

const DateRange = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: courier new;
  opacity: 0.6;
  font-style: italic;
  @media (max-width: 850px) {
    font-size: 13px;
  }
`;

const ProgramLink = styled.a`
  font-size: 14px;
  font-family: courier new;
  color: ${props => props.theme.linkColor};
  text-decoration: underline;
  font-weight: 500;
  transition: opacity 0.2s ease;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 850px) {
    font-size: 13px;
  }
`;

const HighlightsSection = styled.div`
  margin-top: 5px;
`;

const HighlightsList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
`;

const HighlightItem = styled.li`
  font-size: 14px;
  font-family: courier new;
  line-height: 1.4;
  margin-bottom: 5px;
  @media (max-width: 850px) {
    font-size: 13px;
  }
`;
