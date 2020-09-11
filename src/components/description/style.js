import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  background: ${props => props.theme.colors.purple};
  color: white;
  padding: 15rem 15rem 30rem 15rem;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
  p {
    font-size: ${props => props.theme.title.p};
    margin: auto 10rem;
    font-weight: 500;
    line-height: 3rem;
  }
`
