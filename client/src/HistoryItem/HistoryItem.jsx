import React from 'react';
import { List, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { getSingleVideo } from '../redux/actions/currentVideoIdAction';
import { deleteVideoFromDB } from '../redux/actions/videoListAction';
import style from './HistoryItem.module.css';

const HistoryItem = ({title, videoId, getVideoId, removeVideo, currentVideoId}) => {

    function showSelectedVideo(id){
        if(id !== currentVideoId){
            getVideoId(id);
        }
    }

    return (
        <List.Item className={style.historyItem}>
            <List.Content floated='left' style={{display: 'inline-block', width: '75%', padding: '.5rem'}}><p onClick={() => showSelectedVideo(videoId)}>{title}</p></List.Content>
            <Button floated='right' circular size='mini' color='red' icon='trash'onClick={() => removeVideo(videoId)}/>
        </List.Item>
    );
};

function MSTP (state){
    return {
        currentVideoId: state.videoId,
    }
}

function MDTP (dispatch){
    return {
        getVideoId: function(id){
            dispatch(getSingleVideo(id));
        },
        removeVideo: function(id){
            dispatch(deleteVideoFromDB(id));
        },
    }
}

export default connect(MSTP, MDTP)(HistoryItem);