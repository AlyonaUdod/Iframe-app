import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { queryVideo, clearSeach } from '../redux/actions/seachAction';
import { handlerChange, clearInput } from '../redux/actions/queryAction';

const SeachForm = ({queryText, handlerInputChange, clearStore, clearSeachInput, seachVideo}) => {

    function handlerChange(e){
        handlerInputChange(e.target.value);
    };

    function clearSeach() {
        clearStore();
        clearSeachInput();
    };

    function seachVideoOnYoutube(){
        if(queryText){
            seachVideo(queryText);
        }
    };
    return (
        <Form className='seach-form' onSubmit={seachVideoOnYoutube}>
            <Input className='seach-form__input' icon='search' autoFocus value={queryText} placeholder='Search video on YouTube...' onChange={handlerChange}/>
            <Button type='submit' color='green'>Seach</Button>
            <Button type='reset' color='red' onClick={clearSeach}>Reset</Button>
        </Form>
    );
};

function MSTP (state){
    return {
        queryText: state.query,
    }
}
  
function MDTP (dispatch) {
    return {
        seachVideo: function(param){
            dispatch(queryVideo(param));
        },
        clearStore: function(){
            dispatch(clearSeach());
        },
        clearSeachInput: function(){
            dispatch(clearInput());
        },
        handlerInputChange: function(value){
            dispatch(handlerChange(value));
        }
    }
}

export default connect(MSTP, MDTP)(SeachForm);