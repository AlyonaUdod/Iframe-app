import React, { Component } from 'react';
import {connect} from 'react-redux';
import { List, Header} from 'semantic-ui-react';
import SeachForm from './SeachForm/SeachForm';
import SeachItem from './SeachItem/SeachItem';
import HistoryItem from './HistoryItem/HistoryItem';
import Player from './Player/Player';
import { queryVideoListFromDB } from './redux/actions/videoListAction';
import { getSingleVideo } from './redux/actions/currentVideoIdAction';
import './App.css';

class App extends Component {

  componentDidMount = () =>{
    this.props.getVideoFromDB();
    setTimeout(() => this.props.videoList.length > 0 && this.props.getVideoId(this.props.videoList[0].videoId), 500);
  };
  
  render() {
    const {seachList, videoList} = this.props;
    return (
      <div className="wrapper">
        <div className='history-wrapper'>
          <Header as='h2' icon='video' content='Watch History'/>
          {videoList.length > 0 ? 
             <List divided verticalAlign='middle' className={videoList.length > 0 ? 'block history-list' : 'none'}>
             {videoList.length > 0 ? videoList.map(el => <HistoryItem key={el.videoId} title={el.title} videoId={el.videoId}/>) : null}
            </List>
            : <div style={{textAlign: 'center', fontWeight: '700', margin: '1rem auto'}}> No video yet.</div>
          }
        </div>
        <div className='content-wrapper'>
          <SeachForm/>
          <List className={seachList.items ? 'block seach-list' : 'none'} selection divided verticalAlign='middle'>{seachList.items && seachList.items.map(el => <SeachItem key={el.id.videoId} videoId={el.id.videoId} thumbnail={el.snippet.thumbnails.default.url} title={el.snippet.title}/>)}</List>
          <Player/>
        </div>
      </div>
    );
  };
};

function MSTP (state){
  return {
      seachList: state.seachList,
      videoList: state.videoList,
  };
};

function MDTP (dispatch){
  return {
      getVideoFromDB: function(){
          dispatch(queryVideoListFromDB());
      },
      getVideoId: function(id){
          dispatch(getSingleVideo(id));
      },
  };
};

export default connect(MSTP, MDTP)(App);