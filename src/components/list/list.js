import React, { Component } from 'react';

import './list.css';
import { connect } from 'react-redux';
import { List, Typography, Button, Input, Checkbox } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import swapiService from '../../services/swapi-service';


const SwapiService = new swapiService();

class Lists extends Component {
    
    componentDidMount() {
        const { load, loadComplete } = this.props;
        SwapiService
            .getTasks()
            .then(load)
            .then(loadComplete);
    }

    render() {
        const { editTaskStart, editTaskEdit, deleteTask, checkTask, loading, tasks, editTask, editTaskComplete } = this.props;
        if (loading || tasks.length <= 0) return <h1>Loading...</h1>

        return (
            <List
                className="list"
                dataSource={this.props.tasks}
                renderItem={(item, i) => {

                    let classesText = 'text ';
                    let classesInput = 'li-input ';

                    if (editTask.id === item.id) {
                        classesText += 'off';
                        classesInput += 'on';
                    }

                    return (
                        <List.Item className="list-item">

                            <Typography.Text className={classesText}>
                                {item.text}
                            </Typography.Text>
                            
                            <Typography.Text className={classesInput}>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        editTaskComplete(editTask.text)}}>
                                        <Input 
                                            value={editTask.text}
                                            id={`input-text-${item.id}`}
                                            onChange={(e) => editTaskEdit(e)}/>
                                    </form>
                            </Typography.Text>

                            <div className="btn-group">
                                <Checkbox 
                                    onChange={() => checkTask(item.id)}
                                    style={{paddingRight: "5px"}}>
                                </Checkbox>
                                <Button
                                    className="btn-list btn-edit"
                                    onClick={() => editTaskStart(item.id)}>
                                    <EditTwoTone />
                                </Button>
                                <Button
                                    className="btn-list btn-delete"
                                    onClick={() => deleteTask(item.id)}>
                                    <DeleteTwoTone twoToneColor="#eb2f96"/>
                                </Button>
                            </div> 
                        </List.Item>)}}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        tasks: state.tasks,
        editTask: state.editTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //Загрузка, успешная загрузка
        load: (payload) => dispatch({type: 'LOAD', payload}),
        loadComplete: () => dispatch({type: 'LOAD-COMPLETE'}),

        //Создание, удаление, выбор
        editTaskStart: (payload) => {
            setTimeout(() => {
                let elem = document.getElementById(`input-text-${payload}`);
                elem.focus();
            }, 10);
            dispatch({type: 'EDIT-TASK-START', payload})
        },
        editTaskEdit: (payload) => dispatch({type: 'EDIT-TASK-EDIT', payload}),
        editTaskComplete: (payload) => {
            dispatch({type: 'EDIT-TASK-COMPELTE', payload});
        },
        deleteTask: (payload) => dispatch({type: 'DELETE-TASK', payload}),
        checkTask: (payload) => dispatch({type: 'CHECK-TASK', payload}),
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

