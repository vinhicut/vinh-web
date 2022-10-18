import React from 'react';
import './ListToDo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listToDos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}

    }

    addNewTodo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Add thành công!")
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listToDos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentTodos
        })
        toast.success("Xóa thành công!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listToDosCopy = [...listToDos];
            let objIndex = listToDosCopy.findIndex((item => item.id === todo.id));

            listToDosCopy[objIndex].title = editTodo.title;
            this.setState({

                listToDos: listToDosCopy,
                editTodo: {},

            })
            toast.success("sửa thành công!")
            return;
        }

        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listToDos, editTodo } = this.state;
        //let listToDos = this.state.listToDos;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj)
        return (
            <div className='list-todo-container'>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className=' list-todo-content'>
                    {listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo