import styled from 'styled-components';
import logo from '../../assets/logo-pizza.jpg';
import { IPropsStyledText } from '../../utils/interfaces';

const StyledLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 38px;
  height: 38px;
`;

const StyledLogoText = styled.div<IPropsStyledText>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color || '#181818'};
`;

export { StyledLogoText, StyledLogo };
