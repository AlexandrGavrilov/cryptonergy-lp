import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;

  @media only screen and (max-width: 600px) {
    padding: 100px 10px;
  };
`;

export const STitle = styled(motion.h4)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.color.main}
  `}
`

export const SBlocksWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1420px;

  @media only screen and (max-width: 600px) {
    gap: 15px;
  };
`

export const SBlockWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 30px;
  width: 315px;
  height: 148px;
  border-radius: 12px;

  @media only screen and (max-width: 600px) {
    width: 48%;
  };

  ${({ theme }) => css`
    background: ${theme.bg.secondary}
  `}
`

export const SBlockText = styled(motion.div)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.color.main}
  `}
`