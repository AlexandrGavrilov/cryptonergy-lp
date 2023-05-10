import styled from "styled-components";
import {motion} from "framer-motion";

export const SLogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  width: auto;

  @media only screen and (max-width: 600px) {
    padding: 24px 15px 0;
    max-width: 100vw;
  }
`;

export const SLogoTitleWrapper = styled(motion.div)`
  transform: translateY(-3px);
`