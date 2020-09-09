import styled from "styled-components"

export const Foot = styled.footer`
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15rem 15rem 7rem 15rem;
  text-align: center;
`

export const Span = styled.span`
  margin: 3rem;
  font-size: ${props => (props.copy ? "1.6rem" : "2.5rem")};
  opacity: 0.7;
`
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding: 1rem;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    margin: 1.5rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: white;
      color: #7510f7;
      border: 2px solid white;
    }
  }
`
