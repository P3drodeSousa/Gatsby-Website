import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  margin: 4rem 4rem 0 4rem;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 20px;
    justify-content: center;
    text-align: center;
  }
`

export const H1 = styled.h1`
  font-size: ${props => props.theme.title.main};
  color: ${props => props.theme.colors.black};
  font-weight: 800;
  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 30px;
  }
`
export const H2 = styled.h2`
  font-size: ${props => props.theme.title.main2};
  color: ${props => props.theme.colors.black};
  font-weight: 300;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 20px;
  }
`
export const Image = styled.img`
    position: absolute;
    bottom: 0;
    width: 650px;
    height: 265px;

    @media ${props => props.theme.breakpoints.mobile} {
      display: none;
    }
  }
`
