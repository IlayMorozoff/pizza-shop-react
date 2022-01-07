import styled from 'styled-components';
import { IPropsStyledFlex } from '../../utils/interfaces';

const StyledFlex = styled.div<IPropsStyledFlex>`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'default'};
  position: ${({ position }) => position || 'static'};
  flex-basis: ${({ flex }) => flex || 'auto'};
  gap: ${({ gap }) => gap || '0'};
`;

export default StyledFlex;
