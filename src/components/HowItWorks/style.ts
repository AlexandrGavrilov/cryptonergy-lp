import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  padding: 100px 180px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding: 0 15px 100px 15px;
    font-size: 25px;
    line-height: 35px;
  };
`;

export const STextWrapper = styled(motion.div)`
  max-width: 645px;
  opacity: 0.9;
  gap: 10px;
`;

export const STitle = styled(motion.h4)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  width: fit-content;
  text-transform: uppercase;
  
  ${({ theme }) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const SDescription = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    line-height: 35px;
  };
  
  ${({ theme }) => css`
    color: ${theme.color.main};
  `};
`;

export const SBlocksWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  };
`;

export const SBlockWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  padding: 30px 20px 25px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgb(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    width: 100%;
  };
  
  ${({ theme }) => css`
    background: ${theme.bg.secondary};
  `}
`;

export const SBlockTitle = styled(motion.div)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
  
  ${({ theme }) => css`
      color: ${theme.color.accent}
  `}
`;

export const SBlockDescription = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  width: 190px;
  opacity: 0.9;
  text-align: center;
  letter-spacing: -0.02em;

  @media only screen and (max-width: 600px) {
    width: 100%;
  };

  ${({ theme }) => css`
      color: ${theme.color.main}
  `}
`;
