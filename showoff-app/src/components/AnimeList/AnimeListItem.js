import React from "react";

const AnimeListItem = (props) => {
    const { mal_id, title, image_url, episodes, url } = props.anime;

    return(
        <div key={mal_id} className={mal_id}>
            <a href={url}><img src={image_url} alt="anime poster" /></a>
            <h2>{title}</h2>
            <p>Episodes: {episodes}</p>
        </div>
        
    );
};

export default AnimeListItem;