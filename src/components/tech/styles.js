import styled from "styled-components"

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: -150px;
  margin-bottom: 20rem;

  ul > li {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`
export const Price = styled.div`
  background-color: white;
  text-align: center;
  padding: 70px 45px;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 450px;
  height: 800px;
  border: 1px solid #e6ecf8;

  :first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  :last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  box-shadow: ${props => props.theme.shadows.shadow};
`
