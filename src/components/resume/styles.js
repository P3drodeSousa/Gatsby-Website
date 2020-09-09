import styled from "styled-components"

export const Section = styled.div`
  width: 100%;
  background: #141c3a;
  margin-bottom: -50px;
  padding: 4rem;
  color: white;
  border-radius: 1.2rem;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
  }
`
export const Button = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  align-items: center;
  padding: 1.4rem 3rem;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  outline: none;
  border: 0.2rem solid ${props => props.theme.colors.purple};
  border-radius: 290486px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.purple};
  }

  a {
    color: white;
  }
`
