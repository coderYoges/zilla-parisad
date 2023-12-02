import React from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

const MenuContainer = styled.div`
  display: flex;
  margin: 16px auto 0px auto;
  padding: 8px 16px;
  border-top: 0.2rem solid rgb(158, 17, 39);
`;

const StyledUlList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  width: 100%;
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
`;

const StyledLastList = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SkipToMainContent = styled.a`
  font-size: 1em;
  padding: 6px 12px;
  color: #333333;
  vertical-align: middle;
  display: block;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
`;

export const MenuSection = () => {
  return (
    <MenuContainer>
      <div className="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <IoMenu />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              HOME
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              ABOUT US
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              TENDER
            </a>
          </li>
        </ul>
      </div>
      <StyledUlList>
        <StyledList>
          <SkipToMainContent href="#">HOME</SkipToMainContent>
        </StyledList>
        <StyledList>
          <SkipToMainContent href="#">ABOUT US</SkipToMainContent>
        </StyledList>
        <StyledList>
          <SkipToMainContent href="#">TENDER</SkipToMainContent>
        </StyledList>
        <StyledList>
          <SkipToMainContent href="#">NOTIFICATIONS</SkipToMainContent>
        </StyledList>
        <StyledList>
          <SkipToMainContent href="#">ASSETS</SkipToMainContent>
        </StyledList>
        <StyledList>
          <SkipToMainContent href="#">GALLERY</SkipToMainContent>
        </StyledList>
        <StyledLastList>
          <SkipToMainContent href="#">LOGIN</SkipToMainContent>
        </StyledLastList>
      </StyledUlList>
    </MenuContainer>
  );
};
