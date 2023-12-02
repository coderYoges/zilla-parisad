import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/zpsalogo.png";
import { MdDownloadForOffline } from "react-icons/md";

const MainContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 16px auto;
`;

const LogoSection = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledLogo = styled.img`
  height: 100px;
  width: 100px;
  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

const HindiTitle = styled.div`
  display: flex;
  margin-left: 4%;
  font-weight: 600;
  color: #000;
  font-size: 20px;
  margin-top: 12px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EnglishTitle = styled.div`
  display: flex;
  margin: 1% 0 0 4%;
  font-weight: 800;
  color: #000;
  font-size: 27px;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

const ContractButton = styled.button`
  cursor: pointer;
  background-color: rgb(218, 0, 33);
  padding: 8px 8px;
  border-radius: 0.8rem;
  border-color: #fff;
  color: #fff;
  display: flex;
  margin-left: auto;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContractDownloadIcon = styled(MdDownloadForOffline)`
  cursor: pointer;
  color: rgb(218, 0, 33);
  width: 32px;
  height: 32px;
  margin-left: auto;
  font-weight: 600;
`;

export const MainSection = () => {
  return (
    <MainContainer>
      <LogoSection>
        <StyledLogo src={Logo} alt="logo" />
      </LogoSection>
      <div className="w-100">
        <HindiTitle>जिला परिषद, दक्षिण अंडमान</HindiTitle>
        <EnglishTitle>Zilla Parishad, South Andaman</EnglishTitle>
      </div>
      <div>
        <ContractButton className="d-none d-md-block">
          Download Contractor Certificate
        </ContractButton>
        <ContractDownloadIcon className="d-block d-md-none " />
      </div>
    </MainContainer>
  );
};
