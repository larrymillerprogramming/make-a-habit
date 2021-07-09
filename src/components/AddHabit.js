import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddHabit extends Component {
    state = {
        title: ''
    }

onChange = (e) => this.setState({title: e.target.value});

onSubmit = (e) => {
    e.preventDefault();
    this.props.addHabit(this.state.title);
    this.setState({title: ''});
}

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                maxLength="30"
                name="title" 
                className="addHabitInput"
                style={{flex: '10'}}
                placeholder="Add Habit ..." 
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn" 
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddHabit.propTypes = {
    addHabit: PropTypes.func.isRequired
}

export default AddHabit