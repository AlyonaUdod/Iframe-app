import React from 'react';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';

const Player = ({videoId}) => {
    const url = `http://www.youtube.com/embed/${videoId}`;
    return (
        <Iframe url={url}
            width="100%"
            height="33rem"
            id="myId"
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