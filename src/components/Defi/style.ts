import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  padding: 0 0;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    padding: 0 10px;
  };
`;

export const SContentWrapper = styled(motion.div)`
  max-width: 1320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
  border-radius: 12px;
  padding: 40px;

  @media only screen and (max-width: 1550px) {
    flex-direction: column-reverse;
  };

  @media only screen and (max-width: 600px) {
    padding: 30px 15px 0;
  };

  ${({ theme }) => css`
    background: ${theme.bg.secondary}
  `}
`;

export const STextWrapper = styled(motion.div)`
  max-width: 525px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const STitle = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
  };


  ${({ theme }) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`

export const SDescription = styled(motion.h4)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  opacity: 0.7;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  };

  ${({ theme }) => css`
    color: ${theme.color.main}
  `}
`

export const SViewWrapper = styled(motion.div)`
  position: relative;
  width: 620px;
  height: 550px;

  @media only screen and (max-width: 1550px) {
    margin-top: 35px;
    height: 300px;
    width: 330px;
  };

  //@media only screen and (max-width: 600px) {
  //  margin-top: 35px;
  //  height: 300px;
  //  width: 330px;
  //};
`;

export const SViewItem = styled(motion.div)<{ top: number, left: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}}
`;

export const SViewMainWrapper = styled(motion.div)`
  z-index: 2;
  position: absolute;
  left: 180px;
  top: 145px;
  
  img {
    width: 260px;
  }

  @media only screen and (max-width: 1550px) {
    left: 70px;
    top: 5px;
    img {
      width: 200px;
    }
  };
`;

export const SViewStarWrapper = styled(motion.div)`
  position: absolute;
  left: 137px;
  top: 120px;

  @media only screen and (max-width: 1550px) {
    left: 55px;
    top: 0;
  };
`;

export const SViewItemText= styled(motion.div)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  opacity: 0.9;

  ${({ theme }) => css`
    color: ${theme.color.main}
  `}}
`;