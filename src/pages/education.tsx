import React from "react";
import styled from "styled-components";
import { InnerHeader } from "./styledComponents/headers";

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

  return (
    <EducationContainer>
      <EducationHeader>
        <InnerHeader>Education</InnerHeader>
      </EducationHeader>
      <EducationGrid>
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
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const EducationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 850px) {
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
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;

const Field = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  font-family: courier new;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

const DateRange = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: courier new;
  color: rgba(0, 0, 0, 0.6);
  font-style: italic;
  @media (max-width: 850px) {
    font-size: 13px;
  }
`;

const ProgramLink = styled.a`
  font-size: 14px;
  font-family: courier new;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(0, 0, 0, 1);
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
