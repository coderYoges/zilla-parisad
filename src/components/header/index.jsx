import React from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaSitemap,
} from "react-icons/fa";
import { ImFontSize } from "react-icons/im";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #d8d8d8;
`;

const HeaderContainer = styled.div`
  border-bottom: 0.2rem solid rgb(158, 17, 39);
`;

const StyledUlList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0 auto;
  text-align: center;
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
`;

const SkipToMainContent = styled.a`
  font-size: 0.8em;
  padding: 6px 8px;
  border-radius: 0;
  color: #333333;
  border-left: 1px solid #d8d8d8;
  vertical-align: middle;
  display: block;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
`;

const CommonIcons = styled.a`
  font-size: 1.4em;
  padding: 2px 8px;
  border-radius: 0;
  color: #333333;
  border-left: 1px solid #d8d8d8;
  vertical-align: middle;
  display: block;
  cursor: pointer;
`;

const HeaderLeft = () => {
  return (
    <StyledUlList>
      <StyledList>
        <SkipToMainContent>
          अंडमान और निकोबार द्वीप समूह की सरकार
        </SkipToMainContent>
      </StyledList>
      <StyledList>
        <SkipToMainContent>
          GOVERNMENT OF ANDAMAN AND NICOBAR ISLANDS
        </SkipToMainContent>
      </StyledList>
    </StyledUlList>
  );
};

const HeaderRight = () => {
  return (
    <StyledUlList className="justify-content-center">
      <StyledList>
        <SkipToMainContent href="#">SKIP TO MAIN CONTENT</SkipToMainContent>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <FaSearch />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <FaFacebookSquare />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <FaTwitterSquare />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <FaYoutube />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <FaSitemap />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <ImFontSize />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <CommonIcons href="#">
          <MdDarkMode />
        </CommonIcons>
      </StyledList>
      <StyledList>
        <SkipToMainContent href="#">ENGLISH</SkipToMainContent>
      </StyledList>
    </StyledUlList>
  );
};

export const HeaderCmpt = () => {
  return (
    <HeaderContainer>
      <div className="d-flex row" style={{ width: "95%", margin: "0 auto" }}>
        <HeaderWrapper className="col-12 col-lg-6 p-0">
          <HeaderRight />
        </HeaderWrapper>
        <HeaderWrapper className="col-12 col-lg-6 p-0">
          <HeaderLeft />
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};
