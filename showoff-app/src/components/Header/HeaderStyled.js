import styled from "styled-components";

const HeaderStyled = styled.div`
    /* background-color: blue; */
    width: 98vw;
    display: flex;
    flex-direction: column;
    margin: 1% auto;
    color: black;
    border: ${pr => pr.theme.accentColor} 4px solid;
    

    h1 { 
        width: 100%;
        font-size: ${pr => pr.theme.midTopFontSize};
        color: ${pr => pr.theme.darkColor};
    }

    nav {
        /* width: 100%; */
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 1%;
        padding: 1% 0;
        background-color: ${pr => pr.theme.secondColor};
    }

    nav a {
        width: 15%;
        font-size: ${pr => pr.theme.smallFontSize};
        color: ${pr => pr.theme.whiteColor};
        text-decoration: none;
    }
`

export default HeaderStyled;