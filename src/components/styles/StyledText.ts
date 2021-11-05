import styled from 'styled-components';
import { IPropsStyledTextDefault } from '../../utils/interfaces';

const StyledText = styled.div<IPropsStyledTextDefault>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ textColor }) => textColor || '#ffffff'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  padding: ${({ padding }) => padding || '0'};
  border-bottom: ${({ decoration }) => decoration || 'none'};
  cursor: ${({ isCursor }) => (isCursor ? 'pointer' : 'default')};
`;

export default StyledText;
