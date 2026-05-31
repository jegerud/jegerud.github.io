import React from "react";
import styled from "styled-components";
import { InnerHeader } from "./styledComponents/headers";

interface WorkExperience {
  company: string;
  position: string;
  startDate: { month: string; year: number };
  endDate: { month: string; year: number } | "Present";
  technologies: string[];
  responsibilities: string[];
}

export function WorkExperience() {
  const experiences: WorkExperience[] = [
    {
      company: "Netcompany",
      position: "Consultant",
      startDate: { month: "Jan", year: 2026 },
      endDate: "Present",
      technologies: ["C#", ".NET", "Azure", "Function Apps", "Dynamics"],
      responsibilities: [
        "Data and backend development for internal systems",
        "Building and maintaining cloud-based solutions",
        "Working with API development and integration"
      ]
    },
    {
      company: "Intility",
      position: "Tech Graduate",
      startDate: { month: "Aug", year: 2024 },
      endDate: { month: "Dec", year: 2025 },
      technologies: ["C#", ".NET", "MSSQL", "Azure", "Openshift", "Kubernetes", "Azure OpenAI"],
      responsibilities: [
        "Backend development and cloud solutions",
        "Working with containerization and orchestration tools",
        "Introduction to application operations"
      ]
    },
    {
      company: "Gyldendal",
      position: "Data Scientist",
      startDate: { month: "Jun", year: 2023 },
      endDate: { month: "Aug", year: 2023 },
      technologies: ["Python", "Data Analysis", "Machine Learning"],
      responsibilities: [
        "Summer internship focusing on data science and analysis",
        "Developing machine learning models for data-driven insights",
      ]
    },
    {
      company: "Gyldendal",
      position: "Developer",
      startDate: { month: "Aug", year: 2019 },
      endDate: { month: "Jun", year: 2022 },
      technologies: ["React", "TypeScript", "C#"],
      responsibilities: [
        "Developing front-end web applications in team",
        "Implementing new features in backend using C#"
      ]
    }
  ];

  const formatDateRange = (exp: WorkExperience): string => {
    const start = `${exp.startDate.month} ${exp.startDate.year}`;
    const end = exp.endDate === "Present"
      ? "Present"
      : `${exp.endDate.month} ${exp.endDate.year}`;
    return `${start} - ${end}`;
  };

  return (
    <WorkContainer>
      <WorkHeader>
        <InnerHeader>Work Experience</InnerHeader>
      </WorkHeader>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard key={`${exp.company}-${index}`}>
            <Company>{exp.company}</Company>
            <Position>{exp.position}</Position>
            <DateRange>{formatDateRange(exp)}</DateRange>
            <TechSection>
              {exp.technologies.map((tech, idx) => (
                <TechBadge key={idx}>{tech}</TechBadge>
              ))}
            </TechSection>
            <ResponsibilitiesSection>
              <ResponsibilitiesList>
                {exp.responsibilities.map((resp, idx) => (
                  <ResponsibilityItem key={idx}>{resp}</ResponsibilityItem>
                ))}
              </ResponsibilitiesList>
            </ResponsibilitiesSection>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
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

const WorkHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

const ExperienceGrid = styled.div`
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

const ExperienceCard = styled.div`
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

const Company = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  font-family: courier new;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const Position = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  font-family: courier new;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 850px) {
    font-size: 16px;
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

const TechSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
`;

const TechBadge = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-family: courier new;
  font-weight: 500;
  @media (max-width: 850px) {
    font-size: 11px;
    padding: 3px 8px;
  }
`;

const ResponsibilitiesSection = styled.div`
  margin-top: 5px;
`;

const ResponsibilitiesList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
`;

const ResponsibilityItem = styled.li`
  font-size: 14px;
  font-family: courier new;
  line-height: 1.4;
  margin-bottom: 5px;
  @media (max-width: 850px) {
    font-size: 13px;
  }
`;
