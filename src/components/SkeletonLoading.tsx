import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import StyledFlex from './styles/StyledFlex';

const load = keyframes`
  from {
      left: -150px;
  }
  to   {
      left: 100%;
  }
`;

const Skeleton = styled.div<{ height?: string; width?: string; borderRadius?: string }>`
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  height: ${({ height }) => height || '150px'};
  max-width: ${({ width }) => width || '150px'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  position: relative;
  overflow: hidden;
  width: 100%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const StyledFlexWithWidth = styled(StyledFlex)`
  max-width: 260px;
`;

const SkeletonLoading: FC = () => (
  <StyledFlexWithWidth direction="column">
    <Skeleton height="260px" width="260px" borderRadius="50%" />
    <StyledFlex margin="20px 0 20px">
      <Skeleton height="30px" width="260px" borderRadius="10px" />
    </StyledFlex>
    <Skeleton height="80px" width="260px" borderRadius="10px" />
    <StyledFlex justify="space-between" align="center" margin="20px 0 0 0">
      <Skeleton height="40px" width="100px" borderRadius="30px" />
      <Skeleton height="40px" width="120px" borderRadius="30px" />
    </StyledFlex>
  </StyledFlexWithWidth>
);

export default SkeletonLoading;
