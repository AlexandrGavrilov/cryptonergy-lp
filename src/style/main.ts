import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
  }
`;

export const SMain = styled.div`
  height: auto;
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
  `}
`;
