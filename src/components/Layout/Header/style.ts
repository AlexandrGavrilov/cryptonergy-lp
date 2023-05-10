import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 38px 180px 0;

  @media only screen and (max-width: 600px) {
    padding: 24px 15px 0;
    max-width: 100vw;
  }
`;

export const SSwitcherWrapper = styled.div<{ checked: boolean }>`
  height: 26px;

  .react-switch-handle {
    width: 20px !important;
    height: 20px !important;
    background: none !important;
  }
  
  .react-switch-bg {
    transform: translateY(1px);
    ${({ checked }) => css`
    opacity: ${checked ? '0.75' : '0.25'};
    transform: translate(1px, 1px);
  `};
  }
`;

export const SButton = styled.a`
  font-family: Unbounded;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-decoration: inherit;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7px 12px;
  color: #17171A;
  border-radius: 44px;
  background: #fff;
  border: 1px solid #17171A;
  transition: 0.2s ease;

  :hover {
    background: #17171A;
    color: #fff;
  }
`

export const SActionsWrapper = styled(motion.div)`
  display: flex;
  align-content: center;
  align-items: center;  
  gap: 21px;

  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
`;





