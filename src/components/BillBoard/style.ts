import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const SWrapper = styled(motion.div)`
  margin: 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: 0;
    padding-bottom: 100px;
    max-width: calc(100vw - 20px);
  };
`;

export const SContentWrapper = styled(motion.div)<{ bgSrc: string }>`
  padding: 92px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  max-width: 1320px;
  gap: 10px;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    padding: 80px 30px;
  };

  ${({bgSrc}) => css`
    background: url("${bgSrc}");
    background-size: cover;
  `}
`;


export const STitle = styled(motion.h2)`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: capitalize;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
  };
`;

export const SDescription = styled(motion.h4)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.7;
  color: #fff;
  
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  };
`;

export const SButton = styled(motion.a)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 10px;
  border-radius: 44px;
  margin-top: 20px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background: #17171A;

  ${({ theme }) => css`
    color: ${theme.color.btnMain};
  `}}
`;
