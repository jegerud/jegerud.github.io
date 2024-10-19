import styled from "styled-components";
import { ResetHeaders } from "../../helpers/styles-helpers";

export const InnerHeader = styled.h1`
  ${ResetHeaders()}
  font-size: 60px;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    font-size: 35px;
  }
`;

export const SubHeader = styled.h2`
  ${ResetHeaders()}
  margin-top: 20px;
  font-size: 40px;
  @media (max-width: 850px) {
    font-size: 25px;
    margin-top: 5px;
  }
`;