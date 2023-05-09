import styled, {css} from "styled-components";
import {TImageSize} from "@/components/Image/types";
import {motion} from "framer-motion";

const sizes = {
    auto: css`
      width: auto;
      height: auto;
    `,
    md: css`
      width: 24px;
      height: 24px;
    `,
    sm: css`
      width: 12px;
      height: 12px;
    `,
    lg: css`
      width: 48px;
      height: 48px;
    `,
    xl: css`
      width: 100px;
      height: 100px;
    `,
}
export const SWrapper = styled(motion.div)<{ size: TImageSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ size }) => sizes[size]}
  
  img {
    width: inherit;
    height: inherit;
  }
`;