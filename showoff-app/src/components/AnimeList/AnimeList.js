import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { getData } from "../../actions/animeActions";
import AnimeListStyled from "./AnimeListStyled";
import AnimeListItem from "./AnimeListItem";

const AnimeList = (props) => {
    const { animes, isFetching, error} = props;
    
    useEffect(() => {
        props.getData("anime");
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
    if (isFetching) {
      return <h2>Fetching person for ya!</h2>;
    }

    return (
        <AnimeListStyled>
            <div className="Anime-list">
                {
                    animes.map( anime => <AnimeListItem key={anime["mal_id"]} anime={anime}/>)
                }
            </div>
        </AnimeListStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        animes: state.animeState.animes,
        isFetching: state.animeState.isFetching,
        error: state.animeState.error
    };
};

export default connect(mapStateToProps, { getData })(AnimeList);