import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Titillium Web', Arial,  sans-serif;
        background-color: black;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle;