import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  max-width: 1680px;
  width: 100%;
  padding: 40px 0 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 20vw;
    width: 100vw;
    padding: 75px 15px 0;
  }
`;

export const SAnimationWrapper = styled(motion.div)``;

export const STextWrapper = styled(motion.div)`
  max-width: 530px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const STitle = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;

  ${({ theme }) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}}
`;

export const SDescription = styled(motion.h4)`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  
  max-width: 530px;
  
  ${({ theme }) => css`
    color: ${theme.color.main}
  `}}
`;

export const SPyramidWrapper = styled(motion.div)``;
export const SPyramidL1 = styled(motion.div)`
  position: relative;
`;

export const SPyramidL2 = styled(motion.div)`
  position: relative;
`;

export const SPyramidL3 = styled(motion.div)`
  position: relative;
`;

export const SPyramidL4 = styled(motion.div)`
  position: relative;
`;

export const SIconWrapper = styled(motion.div)<{ left: number, bottom: number }>`
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ left, bottom, theme }) => css`
    transform: translateX(calc(-50% - ${left}px));
    bottom: ${bottom}px;
    box-shadow: ${theme.pyramid.icon.boxShadow};
    border: ${theme.pyramid.icon.border};
    background: ${theme.pyramid.icon.bg};
  `}}
`

export const SText = styled(motion.div)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  text-transform: uppercase;
  transform: translateX(-50%);
  
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  
  ${({ theme }) => css`
    color: ${theme.color.main}
  `}
`;