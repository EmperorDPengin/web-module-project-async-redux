import styled from "styled-components";

const AnimeListStyled = styled.div`
    .Anime-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .Anime-list div {
        width: 33%;
        margin: auto;
        margin-bottom: 1.5%;
        
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1%;
    }

    p {
        width: 80%;
        border-bottom: black 1px solid;
        margin: auto;
    }
`

export default AnimeListStyled;