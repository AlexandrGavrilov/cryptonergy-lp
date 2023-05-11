import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)<{ isReverseBg: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  width: 100%;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    padding: 80px 15px;
    font-size: 25px;
    line-height: 35px;
  };

  ${({theme, isReverseBg}) => css`
    background: ${isReverseBg ? theme.bg.main : theme.bg.secondary};
  `}
`;

export const STextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const STitle = styled(motion.h4)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: center;
  text-transform: uppercase;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SDescription = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;

  ${({theme}) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const SBlocksWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

export const SContentWrapper = styled(motion.div)`
   display: flex;
   flex-direction: column;
`;

export const SBlockWrapper = styled(motion.div)<{ isLightTheme: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 320px;
  padding: 20px 0;
  border-radius: 12px;
  box-shadow: 0 0 4px rgb(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    width: 100%;
  };

  ${({theme, isLightTheme}) => css`
    background: ${isLightTheme ? 'linear-gradient(107.15deg, #F3F5FD 4.94%, #FEFEFF 95.1%);' : theme.bg.secondary};
  `}
`;

export const SBlockHeaderWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0 25px 18px;

  ${({theme}) => css`
    border-bottom: 1px solid ${theme.border.main};
  `}
`;

export const SBlockTitleWrapper = styled(motion.div)``;

export const SBlockTitle = styled(motion.div)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  opacity: 0.9;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SBlockTitleLabel = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  opacity: 0.5;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SBlockPercentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const SBlockPercent = styled(motion.div)`
  display: flex;
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  width: fit-content;

  ${({theme}) => css`
    background: -webkit-linear-gradient(${theme.color.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const SBlockPercentLabel = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  opacity: 0.5;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SBodyWrapper = styled(motion.div)`
  padding: 20px 25px;
`;

export const STokensWrapper = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 10px;
  //padding: 20px 25px;
`;

export const STokensTitle = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  opacity: 0.5;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const STokenWrapper = styled(motion.div)`
  user-select: none;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;
  padding: 6px 8px;
  border-radius: 42px;
  width: fit-content;
  margin: 2px 0;

  ${({theme}) => css`
    border: 1px solid ${theme.border.main};
    background: ${theme.bg.main};
  `}
`;

export const STokenText = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  ${({theme}) => css`
    color: ${theme.color.main};
  `}
`;

export const SButton = styled(motion.a)`
  align-self: center;
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 370px;
  padding: 14px 32px;
  border-radius: 52px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;


  ${({theme}) => css`
    background: ${theme.bg.btnMain};
    color: ${theme.color.btnMain};
  `}
`;

