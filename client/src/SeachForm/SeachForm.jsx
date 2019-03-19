import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { queryVideo, clearSeach } from '../redux/actions/seachAction';

class SeachInput extends Component {
    state = {
        query: '',
    };

    chandlerChange = (e) => {
        this.setState({ 
            query: e.target.value
        })
    };

    clearSeach = () => {
        this.props.clearStore();
        this.setState({
            query: '',
        })
    };

    seachVideoOnYoutube = () => {
        if (this.state.query){
            this.props.query(this.state.query);
        }
    };

  render() {
    const {query} = this.state;
    return (
        <Form className='seach-form' onSubmit={this.seachVideoOnYoutube}>
            <Input className='seach-form__input' icon='search' autoFocus value={query} placeholder='Search video on YouTube...' onChange={this.chandlerChange}/>
            <Button type='submit' color='green'>Seach</Button>
            <Button type='reset' color='red' onClick={this.clearSeach}>Reset</Button>
        </Form>
    )
  }
}
  
function MDTP (dispatch) {
    return {
        query: function(param){
            dispatch(queryVideo(param));
        },
        clearStore: function(){
            dispatch(clearSeach());
        }
    }
}

export default connect(null, MDTP)(SeachInput);