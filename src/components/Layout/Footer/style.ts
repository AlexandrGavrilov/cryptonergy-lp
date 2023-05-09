import styled, {css} from "styled-components";
import {motion} from "framer-motion";
import Link from 'next/link';

export const SWrapper = styled.header`
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 180px 0;
  white-space: nowrap;
  
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    gap: 30px;
  }

  @media only screen and (max-width: 600px) {
    padding: 24px 15px 0;
    max-width: 100vw;
  }

  ${({theme}) => css`
    background: ${theme.bg.main};
  `}
`;

export const SLinksWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  
  ${({theme}) => css`
    color: ${theme.color.main}
  `}
`;

export const SLinkItem = styled(Link)``;

export const SSocialWrapper = styled(motion.div)`
  display: flex;
  gap: 10px;
`;

export const SSocialItem = styled(motion.a)``;