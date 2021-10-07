import React from "react";

import WelcomePageStyled from "./WelcomePageStyled";

class WelcomePage extends React.Component {
    

    render() {

        return (
            <WelcomePageStyled className="App-welcome">
                <div className='data-display'>
                    <h2>LOOK THRU THE MOST POPULAR ANIME and MANGA</h2>
                </div>
            </WelcomePageStyled>
        )
    }
}



export default WelcomePage;