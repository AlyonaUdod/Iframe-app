import React from 'react';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';

const Player = ({videoId}) => {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return (
        <Iframe url={url}
            width="100%"
            height="65vh"
            className="player"
            display="initial"
            position="relative"
            allowFullScreen
            />
    );
};

function MSTP (state){
    return {
       videoId: state.videoId
    }
}

export default connect(MSTP, null)(Player);