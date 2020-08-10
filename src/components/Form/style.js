import styled from "styled-components"

export const Title = styled.h1`
  font-weight: 100;
  text-align: center;
  font-size: ${props => props.theme.title.main2};
  margin-bottom: 8rem;
`

export const FormContainer = styled.form`
  display: flex;
  max-width: 500px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  font-size: ${props => props.theme.title.p};
  color: ${props => props.theme.colors.silver};
`

export const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #e6ecf8;
  outline: none;
  margin-top: 0.5rem;
  color: #363636;

  &:focus {
    border: 1px solid #3273dc;
  }
`
export const TextArea = styled.textarea`
  flex-grow: 1;
  height: 15rem;
  padding: 1.5rem;
  border: 1px solid #e6ecf8;
  outline: none;
  margin-top: 0.5rem;

  &:focus {
    border: 1px solid #3273dc;
  }
`
export const Button = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  align-items: center;
  padding: 1.4rem 5rem;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  outline: none;
  border: 0.2rem solid ${props => props.theme.colors.purple};
  border-radius: 290486px;
  font-weight: 700;
  color: ${props => props.theme.colors.purple};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.purple};
  }
`
