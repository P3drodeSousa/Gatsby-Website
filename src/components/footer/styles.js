import styled from "styled-components"

export const Foot = styled.footer`
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25rem;
  text-align: center;
`

export const Span = styled.span`
  margin-top: 2rem;
  font-size: ${props => (props.copy ? "1.6rem" : "2.5rem")};
  opacity: 0.7;
`
