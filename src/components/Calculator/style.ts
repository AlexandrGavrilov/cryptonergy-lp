import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 180px;
  gap: 95px;

  @media only screen and (max-width: 600px) {
    padding: 80px 15px;
    font-size: 25px;
    line-height: 35px;
    width: 100%;
    flex-direction: column-reverse;
  };
`;

export const SCalculatorWrapper = styled(motion.div)`
  width: 580px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100%;
  };
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
  opacity: 0.7!important;
  
  ${({ theme }) => css`
    color: ${theme.color.main};
  `}
`;

export const SInputsWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
  };
`;

export const SInputWrapper = styled(motion.div)`
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
  };
`;

export const SInputLabel = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  opacity: 0.5;


  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SInput = styled(motion.input)`
  position: relative;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 12px 12px 21px;
  width: 280px;
  height: 48px;
  border-radius: 4px;
  outline: none;

  @media only screen and (max-width: 600px) {
    width: 100%;
  };
  
  ${({theme}) => css`
    border: 1px solid ${theme.border.main};
    background: ${theme.bg.secondary};
    color: ${theme.color.main};
  `}
`;

export const SInputBefore = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  bottom: 12px;
  left: 12px;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`

export const SSelectWrapper = styled(motion.div)`
  position: relative;
  text-align: end;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;

  ${({theme}) => css`
      color: ${theme.color.main};
  `}
  
  input {
    outline: none;
  }
  
  .control {
    cursor: pointer;
    width: 280px;
    height: 48px;

    @media only screen and (max-width: 600px) {
      width: 100%;
    };

    ${({theme}) => css`
      border: 1px solid ${theme.border.main};
      background: ${theme.bg.secondary};
      color: ${theme.color.main};
    `}
  };
  
  .value {
    ${({theme}) => css`
      color: ${theme.color.main};
    `}
  };
  
  .menu {
    position: absolute;
    top: 42px;
    height: 150px;
  }
`
export const SSelectOption = styled(motion.div)`
  position: relative;
  text-align: end;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding: 12px 12px 12px 21px;
  cursor: pointer;


  ${({theme}) => css`
    background: ${theme.bg.main};
    border-bottom: 1px solid ${theme.border.main};

    :hover {
      background: ${theme.bg.secondary};
    }
  `}
`;

export const SSelectOptionWrapper = styled(motion.div)`
  position: relative;
`;

export const SOptionTokensWrapper = styled(motion.div)<{ idx: number }>`
  position: absolute;
  display: flex;
  top: 10px;
  left: 10px;
  pointer-events: none;
`;

export const SOptionTokenWrapper = styled(motion.div)<{ idx: number }>`
  position: absolute;
  display: flex;
  top: 5px;
  
  img {
    border-radius: 50%;
  };
  
  ${({ idx }) => css`
    left: ${idx * 17}px;
  `}
`;

export const SelectedOptionTokensWrapper = styled(motion.div)`
  position: absolute;
  left: 10px;
  top: 31px;
  z-index: 10;
  pointer-events: none;
`;

export const SelectedOptionTokenWrapper = styled(motion.div)``;

export const SSelectBefore = styled(motion.div)``;

export const SChartWrapper = styled(motion.div)`
  position: relative;

  @media only screen and (max-width: 600px) {
    img {
      max-width: calc(100vw - 30px);
    }
  };
`;

export const SChartTextWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding-top: 40px;

  @media only screen and (max-width: 600px) {
    padding-top: 15px;
  };
  
  ${({ theme }) => css`
    background: ${theme.bg.secondary};
  `}
`;
export const SChartLabel = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  opacity: 0.5;

  ${({ theme }) => css`
    background: ${theme.bg.secondary};
    color: ${theme.color.main};
  `}
`;

export const SChartValue = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  
  ${({ theme }) => css`
    background: ${theme.bg.secondary};
    color: ${theme.color.main};
  `}
`;

export const SImage = styled(motion.img)``

export const SButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 180px;
  height: 52px;
  border-radius: 52px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  };

  ${({ theme }) => css`
    background: ${theme.bg.btnMain};
    color: ${theme.color.btnMain};
  `}
`

