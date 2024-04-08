import styled from "styled-components";

export const WrapperDiv = styled.div<{ padding?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ padding = 1 }) => padding}rem;
  gap: 1rem;
`;

interface FlexContainerProps {
  flexDirection?: "column" | "row";
  maxWidth?: string;
}
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
  gap: 0.5rem;
  align-items: center;
`;
