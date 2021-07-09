import React from 'react';
import HabitItem from './HabitItem';
import PropTypes from 'prop-types';

class Habits extends React.Component {
    

    render() {
        return this.props.habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit}
            delHabit= {this.props.delHabit}
            increment= {this.props.increment}
            decrement= {this.props.decrement}
            />
        ));
    }
}

// PropTypes
Habits.propTypes = {
    habits: PropTypes.array.isRequired,
    delHabit: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Habits
