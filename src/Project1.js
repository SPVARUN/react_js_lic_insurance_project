import React from 'react';
import logo from './logo.jpg';
import './Project1.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        };
    }
    addItem(todovalue) {
        if (todovalue !== "") {
            const newItem = {
                id: Date.now(),
                value: todovalue,
                isDone: false
            };
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            });
        }
    }
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({ list: updatedlist })
    }
    updateInput(input) {
        this.setState({ newItem: input });
    }




    render() {
        return (
            <div>
                <img src={logo} width='70' height='70' className='logo' />
                <h1 className='app-title'> <i>Leela project</i></h1>
                <div className='container'>
                    <i>Add an Item.........</i>
                    <br />
                    <input
                        type='text'
                        className='name'
                        placeholder='Write a ToDo'
                        required
                        value={this.state.newItem}
                        onChange={e => this.updateInput(e.target.value)} />&nbsp; &nbsp;
                    <button
                        className='name'
                        onClick={() => this.addItem(this.state.newItem)}
                        disabled={!this.state.newItem.length}
                    > Add ToDo</button>
                    <div className='list'>
                        <ul>
                            {
                                this.state.list.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <input
                                                type='checkbox'
                                                name='idDone'
                                                checked={item.isDone}
                                                onChange={() => { }} />
                                            {item.value}
                                            <button
                                                className='name'
                                                onClick={() => this.deleteItem(item.id)}>
                                                Delete
                                            </button>
                                        </li>
                                    );
                                })
                            }
                            <li>
                                <input type='radio' />
                                <i>Record Youtube Videos: </i>&nbsp; &nbsp;
                                <button className='name'>Delete</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project