import React from 'react';
import {connect} from 'react-redux';
import { Image, List, Button } from 'semantic-ui-react';
import { getSingleVideo } from '../redux/actions/currentVideoIdAction';
import { clearSeach } from '../redux/actions/seachAction';
import { addVideoToDB} from '../redux/actions/videoListAction';


const SeachItem = ({thumbnail, title, videoId, getVideoId, clearStore, addVideo}) => {

    function getId(id){
        getVideoId(id);
        clearStore();
        saveVideoToDB(id, title);
    }

    function saveVideoToDB(id, title){
        let obj = {
            videoId: id,
            title: title,
        };
        addVideo(obj);
    }

    return (
    <List.Item style={{display: 'flex', alignItems: 'center'}}>
        <div className='list-content'>
            <Image src={thumbnail}/>
            <List.Content style={{ marginLeft: '1rem'}}>
                <List.Header>{title}</List.Header>
            </List.Content>
        </div>
        <Button style={{width: '15%'}} onClick={() => getId(videoId, title)}>PLAY</Button>
    </List.Item>
    );
}

function MDTP (dispatch) {
    return {
        getVideoId: function (id){
            dispatch(getSingleVideo(id))
        },
        clearStore: function(){
            dispatch(clearSeach())
        },
        addVideo: function(obj){
            dispatch(addVideoToDB(obj))
        }
    }
  }

export default connect(null, MDTP)(SeachItem);