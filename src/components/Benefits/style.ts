import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  padding: 0 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding: 100px 10px;
  };
`;

export const STextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const STitle = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  };

  ${({ theme }) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const SDescription = styled(motion.h4)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 25px;  
    line-height: 30px;
    max-width: 330px;
  };

  ${({ theme }) => css`
    color: ${theme.color.main};
  `}
`;

export const SBlocksWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const SBlockWrapper = styled(motion.div)`
  width: 400px;
  height: 280px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 30px;

  ${({ theme }) => css`
    background: ${theme.bg.secondary};
  `}
`;

export const SBlockTitle = styled(motion.div)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  ${({ theme }) => css`
    color: ${theme.color.main};
  `}
`;

export const SBlockDescription = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.7;
  
  ${({ theme }) => css`
    color: ${theme.color.main};
  `}
`;

