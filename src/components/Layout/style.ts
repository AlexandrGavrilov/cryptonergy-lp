import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  position: relative;
  padding-bottom: 50px;

  ${({theme}) => css`
    background: ${theme.bg.main};
  `}
`;