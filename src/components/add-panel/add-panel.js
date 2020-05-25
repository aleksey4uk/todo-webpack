import React from 'react';
import { Input, Form } from 'antd';
import './add-panel.css';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { PlusSquareTwoTone } from '@ant-design/icons';

const AddPanel = (props) => {
    console.log(props);
    const {editTempPanelValue, editValue, editValueComplete} = props;
    return (
        <div className="add-panel">
            <Form onFinish={() => editValueComplete(editTempPanelValue)}>
                <Input 
                    placeholder="Add to list ..." 
                    onChange={(e) => editValue(e)}
                    value={editTempPanelValue} />
                <Button 
                    className="btns" 
                    style={{width: '30%'}}
                    onClick={() => editValueComplete()} >
                    <PlusSquareTwoTone style={{fontSize: '20px'}}/>
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        editTempPanelValue: state.editTempPanelValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editValue: (payload) => dispatch({type: 'EDIT-ADD-PANEL', payload}),
        editValueComplete: () => dispatch({type: 'EDIT-ADD-PANEL-COMPLETE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPanel);