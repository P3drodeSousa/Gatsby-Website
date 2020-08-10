import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
`

export const H3 = styled.h3`
  font-size: ${props => props.theme.title.h3};
  color: ${props => props.theme.colors.black};
  font-weight: 900;
  margin: 3.4rem auto;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 20px;
  }
`
