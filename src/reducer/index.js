const initianalState = {
    tasks: [],
    editTempPanelValue: '',
    loading: false,
    editTask: '',
}

const reducer = (state=initianalState, action) => {
    switch(action.type) {
        //Загрузка, успешная загрузка
        case 'LOAD':
            return {
              ...state,
              tasks: action.payload,
              loading: true,
            }
      
        case 'LOAD-COMPLETE':
            return {
                ...state,
                loading: false
            }
        
        //Удаление, узменение, выбор
        case 'DELETE-TASK': {
            const idx = state.tasks.findIndex(item => item.id === action.payload);
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, idx),
                    ...state.tasks.slice(idx+1)
                ]
            }
        }

        case 'EDIT-ADD-PANEL': 
            return {
                ...state,
                editTempPanelValue: action.payload.target.value, 
            }
        
        case 'EDIT-ADD-PANEL-COMPLETE': {
            if (state.editTempPanelValue.length <= 0) return { ...state}

            const newTask = {
                id: state.tasks.length+1,
                text: state.editTempPanelValue
            }

            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    newTask
                ],
                editTempPanelValue: ''
            }
        }

        case 'EDIT-TASK-START': {
            const idxElem = state.tasks.findIndex(item=>item.id===action.payload);
            const newElem = {
                text: state.tasks[idxElem].text,
                id: state.tasks[idxElem].id
            }
            return {
                ...state,
                editTask: newElem,
            }
        }

        case 'EDIT-TASK-EDIT': {
            return {
                ...state,
                editTask: {
                    ...state.editTask,
                    text: action.payload.target.value
                }
            }
        }

        case 'EDIT-TASK-COMPELTE': {            

            let editElem = {
                text: state.editTask.text,
                id: state.editTask.id
            }
            const oldElemIdx = state.tasks.findIndex(item => item.id === state.editTask.id);

            if(action.payload.length <=0) editElem.text = state.tasks[oldElemIdx].text;
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, oldElemIdx),
                    editElem,
                    ...state.tasks.slice(oldElemIdx + 1)
                ],
                editTask: ''
            }
        }

        default: return state;
    }
}

export default reducer;