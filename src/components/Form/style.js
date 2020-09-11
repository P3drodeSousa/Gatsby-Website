import styled from "styled-components"

export const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size: 4rem;
  margin-bottom: 8rem;
`

export const FormContainer = styled.form`
  display: grid;
  width: 70%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2.5fr 1.4fr;
  grid-gap: 30px;
`

export const Nom = styled.div`
  grid-area: 1/1/2/3;
`
export const Email = styled.div`
  grid-area: 1/3/2/5;
`
export const TextAreaContainer = styled.div`
  grid-area: 2/1/3/5;
`
export const ButtonContainer = styled.div`
  grid-area: 3/2/4/4;
  align-self: flex-end;
  justify-self: center;
`

export const Label = styled.label`
  font-size: ${props => props.theme.title.paragraphe};
  color: ${props => props.theme.colors.silver};
`

export const Input = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.5rem;
  outline: none;
  background-color: ${props =>
    props.error ? "rgba(235, 54, 54, 0.2)" : "white"};
  border: ${props =>
    props.error ? "2px solid rgb(235, 54, 54)" : "1px solid #e6ecf8"};
  color: #363636;

  &:focus {
    border: 1px solid #3273dc;
  }
`
export const TextArea = styled.textarea`
  padding: 1.5rem;
  margin-top: 0.5rem;
  height: 100%;
  width: 100%;
  outline: none;
  resize: none;
  background-color: ${props =>
    props.error ? "rgba(235, 54, 54, 0.2)" : "white"};
  border: ${props =>
    props.error ? "2px solid rgb(235, 54, 54)" : "1px solid #e6ecf8"};

  &:focus {
    border: 1px solid #3273dc;
  }
`
export const Button = styled.button`
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  padding: 1.4rem 6rem;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  outline: none;
  border: 0.2rem solid ${props => props.theme.colors.purple};
  border-radius: 290486px;
  color: ${props => props.theme.colors.purple};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.purple};
  }
`
export const Error = styled.div`
  color: rgb(235, 54, 54);
  font-size: 0.9rem;
  font-weight: 550;
  margin-top: 0.5rem;
`
