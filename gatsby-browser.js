import React from "react"
import theme from "./src/themes/theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100vh;
        font-size: 62.5%;
        background-color: ${props => props.theme.colors.white};
        display: flex;
        flex-direction: column;
    }

    h1{
        font-size: ${props => props.theme.title.main};
        font-weight: 700;
    }

    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.white}
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.black};
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.white} 
}

`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
