import React from "react";

const MangaListItem = (props) => {
    const { mal_id, title, image_url, chapters, volumes, url} = props.manga;

    return (
        <div key={mal_id} className={mal_id}>
            <a href={url}><img src={image_url} alt="manga cover" /></a>
            <h2>{title}</h2>
            <p>Volumes: {volumes} / Chapters: {chapters}</p>
        </div>
    )
}

export default MangaListItem;