import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body:'#fff',
    fontColor:'#000'
};

export const darkTheme = {
    body: '#ccc',
    fontColor:'#fff'
};

export const GlobalStyles = createGlobalStyle`

body{

background: ${(props) => props.theme.body}

}
`