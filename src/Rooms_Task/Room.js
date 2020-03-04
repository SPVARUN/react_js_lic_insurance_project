import React, { Component } from 'react';
import './Room.css';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks1: 0,
            clicks2: 0,
            clicks3: 0,
            show: true
        };
    }

    IncrementItem1 = () => {
        this.setState({ clicks1: this.state.clicks1 + 1 });
    }
    DecreaseItem1 = () => {

        this.setState({ clicks1: this.state.clicks1 - 1 });

    }

    IncrementItem2 = () => {
        this.setState({ clicks2: this.state.clicks2 + 1 });
    }
    DecreaseItem2 = () => {

        this.setState({ clicks2: this.state.clicks2 - 1 });

    }
    IncrementItem3 = () => {
        this.setState({ clicks3: this.state.clicks3 + 1 });
    }
    DecreaseItem3 = () => {

        this.setState({ clicks3: this.state.clicks3 - 1 });

    }

    render() {
        return (

            <div className="Container">
                <div>
                    <i class="fas fa-users-cog">Choose number of <strong>People</strong></i><br />
                    <div className='Rooms'>
                        <i class="fas fa-bed">Rooms</i>
                        <i onClick={this.IncrementItem1} class="fas fa-plus-circle"></i>
                        {this.state.show ? <i>{this.state.clicks1}</i> : ''}
                        <i onClick={this.DecreaseItem1} class="fas fa-minus-circle"></i>
                    </div><hr/>
                    <div className='Rooms'>
                        <i class="fas fa-male">ADULTS</i>
                        <i onClick={this.IncrementItem2} class="fas fa-plus-circle"></i>
                        {this.state.show ? <i>{this.state.clicks2}</i> : ''}
                        <i onClick={this.DecreaseItem2} class="fas fa-minus-circle"></i>
                    </div><hr/>
                    <div className='Rooms'>
                        <i class="fas fa-child">CHILDREN</i>
                        <i onClick={this.IncrementItem3} class="fas fa-plus-circle"></i>
                        {this.state.show ? <i>{this.state.clicks3}</i> : ''}
                        <i onClick={this.DecreaseItem3} class="fas fa-minus-circle"></i>
                    </div><hr/>
                </div>
            </div>
        );
    }
}

export default Room;
