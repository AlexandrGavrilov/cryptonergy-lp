import styled from "styled-components";
import {motion} from "framer-motion";

export const SBg = styled(motion.img)`
  position: absolute;
  width: 150vw;
  height: 800px;
  z-index: 2;
  left: 0;
  top: -72px;

  @media only screen and (max-width: 600px) {
    min-height: 100vh;
    width: 180vw;
  }
`;