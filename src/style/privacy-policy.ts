import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  height: auto;
  padding: 170px 0 100px;
  z-index: 1;
  min-height: 700px;
  position: relative;
  display: flex;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
  align-content: center;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.bg.main};
    color: ${theme.color.main}
  `}
`;

export const SShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;

  ${({theme}) => css`
    -webkit-box-shadow: inset 0 -120px 50px 30px ${theme.bg.main};
    -moz-box-shadow: inset 0 -120px 50px 30px ${theme.bg.main};
    box-shadow: inset 0 -120px 50px 30px ${theme.bg.main};
  `}
`;

export const STextWrapper = styled(motion.div)`
  z-index: 10;
  max-width: 840px;
  opacity: 0.9;
`;

export const SH1 = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 55px;
`;

export const SH2 = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  padding-top: 60px;
`;

export const SH3 = styled.h3`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  
  padding-top: 20px;
`;

export const SText = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  gap: 15px;
  
  ol {
    transform: translateX(18px);
  }
`;