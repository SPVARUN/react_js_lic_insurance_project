import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/About');
    }
    render() {
        return (
            <div className="form">
                <br/>
                <form>
                    <label>User Name : </label>
                    <input type = "text" name="username" required="required"/><br /><br />
                    <label>Password : </label>
                    <input type = "password" name="password" /><br /><br />
                    <button onClick={this.handleClick} id="btn">Log_In</button>
                </form>
            </div>
        )
    }
}

export default Home
