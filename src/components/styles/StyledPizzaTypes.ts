/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const StyledPizzaTypesContainer = styled.div`
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 5px 5px 0 5px;
`;

export const StyledPizzaTypesItem = styled.div<{ isActive?: boolean; disabled?: boolean; width?: string }>`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  padding: 5px 0;
  ${props => props.isActive && css`
      background-color: #ffffff;
      color: #2c2c2c;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      pointer-events: none;
  `}
  ${props => props.disabled && css`
      color: #2c2c2c;
      opacity: 0.4;
      pointer-events: none;
  `}
`;
