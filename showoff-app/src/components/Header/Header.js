import React from "react";
import { Link } from "react-router-dom";

import HeaderStyled from "./HeaderStyled";

class Header extends React.Component {

    render() {
        return (
            <HeaderStyled className="App-header">
                <h1>Anime Library</h1>
                <nav className="Header-nav">
                    <Link to="/home" className="btn">Home</Link>
                    <Link to="/anime" className="btn">Anime</Link>
                    <Link to="/manga" className="btn">Manga</Link>
                </nav>
            </HeaderStyled>
        )
    }
}

export default Header;