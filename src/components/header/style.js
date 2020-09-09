import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

export const Head = styled.nav`
  min-height: 52px;
  padding: 3rem 0;
  box-shadow: none;
  display: flex;
  justify-content: center;
  border-bottom: ${props => (props.contact ? "1px solid #e6ecf8" : "none")};

  ${props => props.theme.breakpoints.tablet} {
    margin: auto 50px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: auto 20px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1270px;
`

export const NavLink = styled.div`
  padding: 1.2rem 0.75rem;
  height: 45px;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.purple};
  border-radius: 290486px;
  transition: all 0.3s ease;
  background: ${props => props.theme.colors.white};
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    background: ${props => props.theme.colors.purple};
  }
`

export const Lien = styled(props => <Link {...props} />)`
  font-size: 1.8rem;
  line-height: 27px;
  padding: 100%;
  color: ${props => props.theme.colors.purple};
  font-weight: 800;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
  }
`
