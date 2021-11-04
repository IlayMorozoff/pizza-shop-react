import styled from 'styled-components';
import { IPropsStyledFlex } from '../../utils/interfaces';

const StyledFlex = styled.div<IPropsStyledFlex>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'default'};
`;

export default StyledFlex;
