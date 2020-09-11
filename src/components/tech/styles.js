import styled from "styled-components"

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: -15rem;
  margin-bottom: 25rem;

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }

  ul > li {
    font-size: 1.8rem;
    line-height: 3rem;
  }
`
export const Price = styled.div`
  background-color: white;
  text-align: center;
  padding: 7rem 4.5rem;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 45rem;
  border: 1px solid #e6ecf8;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 7rem 2.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    min-height: 80rem;
  }

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
