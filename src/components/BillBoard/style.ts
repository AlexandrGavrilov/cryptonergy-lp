import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  padding: 100px 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  ${({theme}) => css`
    background: ${theme.bg.accent};
  `}
`;

export const STitle = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: capitalize;

  ${({ theme }) => css`
    color: ${theme.color.main};
  `}}
`;

export const SDescription = styled(motion.h4)`
  font-family: 'Graphik LCG';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.7;

  ${({ theme }) => css`
    color: ${theme.color.main};
  `}}
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

  ${({ theme }) => css`
    background: ${theme.bg.btnMain};
    color: ${theme.color.btnMain};
  `}}
`;
