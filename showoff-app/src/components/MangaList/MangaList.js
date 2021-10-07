import React, { useEffect }from "react";
import { connect } from 'react-redux';

import { getData } from "../../actions/animeActions";
import MangaListStyled from "./MangaListStyled";
import MangaListItem from "./MangaListItem";

const MangaList = (props) => {
    const {animes, isFetching, error} = props;

    useEffect(() => {
        props.getData("manga");
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
    if (isFetching) {
      return <h2>Fetching person for ya!</h2>;
    }

    return (
        <MangaListStyled>
            <div className="Manga-list">
                {
                    animes.map( manga => <MangaListItem key={manga["mal_id"]} manga={manga}/>)
                }
            </div>
        </MangaListStyled>
        
    )
}

const mapStateToProps = (state) => {
    return {
        animes: state.animeState.animes,
        isFetching: state.animeState.isFetching,
        error: state.animeState.error,
    };
};

export default connect(mapStateToProps, { getData })(MangaList);