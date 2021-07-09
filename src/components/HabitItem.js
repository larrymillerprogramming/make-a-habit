import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class HabitItem extends Component {
    getStyle = () => {
        return {
            background: '#cdeee7',
            color: '#3c2477',
            padding: '10px',
            border: 'none',
            borderRadius: '15px',
            margin: '10px 0px 10px 0px',
        }
    }

    render() {
        const { id, title, numTimes } = this.props.habit;
        return (
            <div className="habitList flex-container" style={this.getStyle()}>
                {/* increment button */}
                <p className="buttonsBox" style={{flex: '1'}}><button onClick={this.props.increment.bind(this, id)} 
                className="btnNum" style={numBtnStyle}><b>+</b></button></p>
                {/* decrement button */}
                <p className="buttonsBox" style={{flex: '1'}}><button onClick={this.props.decrement.bind(this, id)}
                 className="btnNum" style={numBtnStyle}><b>-</b></button></p>

                    <p className="titleDisplay" style={{flex: '10'}}> { title } </p>

                    {/* display numTimes */}
                    <p style={{flex: '2'}} className="numItemsDisplay"> { numTimes } </p>
                    
                    <p className="buttonsBox" style={{flex: '1'}}><button onClick={this.props.delHabit.bind(this, id)}
                     className="btnDel" style={btnStyle}>x</button></p>

                
            </div>
        )
    }
}

// PropTypes
HabitItem.propTypes = {
    habit: PropTypes.object.isRequired,
    delHabit: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#56c6ac',
    color: '#ffffff',
    fontFamily: '"Courier Prime", courier',
    padding: '5px 9px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transitionDuration: '0.25s',
}

const numBtnStyle = {
    background: '#56c6ac',
    color: '#ffffff',
    fontFamily: '"Courier Prime", courier',
    padding: '5px 9px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transitionDuration: '0.25s',
}

export default HabitItem