import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 25px;
  padding-top: 220px;
  width: 100%;
  min-height: 730px;
  background: rgba(0, 0, 0, 0);

  @media only screen and (max-width: 600px) {
    min-height: 100vh;
    padding-top: 0;
    padding-bottom: 50px;
    max-width: 350px;
    gap: 10px;
    justify-content: center;
  }
`;

export const STitle = styled(motion.h1)`
  max-width: 780px;
  
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 50px;
  text-align: center;
  opacity: 0.9;
  
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    max-width: 340px;
    line-height: 35px;
  };
  
  ${({ theme }) => css`
    color: ${theme.color.main}
  `};
`;

export const SDescription = styled(motion.h4)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.75;
  
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  };

  ${({ theme }) => css`
    color: ${theme.color.main}
  `};
`;

export const SButton = styled(motion.a)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 10px;
  border-radius: 44px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background: #17171A;
  
  ${({ theme }) => css`
    color: ${theme.color.btnMain};
  `}}
`;