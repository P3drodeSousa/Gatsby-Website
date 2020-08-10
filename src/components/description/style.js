import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  background: ${props => props.theme.colors.purple};
  color: white;
  padding: 15rem 15rem 25rem 15rem;
  text-align: center;

  h1 {
    font-size: ${props => props.theme.title.h1};
  }
  p {
    font-size: ${props => props.theme.title.p};
    margin: auto 10rem;
  }
`
