import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Habits from './components/Habits';
import Header from './components/layout/Header';
import AddHabit from './components/AddHabit';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends React.Component {
state = {

  habits: [
    {
      id: uuid.v4(),
      title: 'Suggested: 30 Minutes of Exercise',
      numTimes: 0
    },
    {
      id: uuid.v4(),
      title: 'Suggested: Practice Piano',
      numTimes: 0
    },
    {
      id: uuid.v4(),
      title: 'Suggested: 30 Minutes of Reading',
      numTimes: 0
    },
  ]
}

// Increment numTimes
increment = (id, numTimes) => {
    this.setState({ habits: this.state.habits.map(habit => {
      if(habit.id === id) {
        if(habit.numTimes >= 0){
          habit.numTimes = habit.numTimes + 1
        }
      }
      return habit;
  }) });
}

// Decrement numTimes
decrement = (id, numTimes) => {
  this.setState({ habits: this.state.habits.map(habit => {
    if(habit.id === id) {
      if(habit.numTimes > 0){
        habit.numTimes = habit.numTimes - 1
      }
    }
    return habit;
  }) });
}

// Delete Habit
delHabit = (id) => {
  this.setState({ habits: [...this.state.habits.filter(habit => habit.id !== id)] })
}

// Add Habit
addHabit = (title) => {
  const newHabit = {
    id: uuid.v4(),
    title,
    numTimes: 0
  }
  this.setState({habits: [...this.state.habits, newHabit]})
}

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddHabit addHabit={this.addHabit}/>
              <Habits habits={this.state.habits}
              increment={this.increment}
              decrement={this.decrement}
              delHabit={this.delHabit}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}
export default App;

// TODO: confirmation screen for delete.