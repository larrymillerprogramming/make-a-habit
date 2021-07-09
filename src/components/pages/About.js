import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div style={aboutStyle}>
                
                <h1>WELCOME</h1><br></br>
                <p>This app is designed to help you<br></br>make the <b>positive 
                    changes</b> you have<br></br>always wanted to make!<br></br><br></br>

                    Three habits are suggested,<br></br>but you should create your own habits!<br></br><br></br>

                    <b>To add a new habit</b>, type your goal<br></br>into the input bar and click "Submit."<br></br><br></br>

                    Then, <b>track your progress</b>!<br></br>Each time you complete that goal,<br></br>change the count 
                    by pressing the<br></br>"+"" and "-"" buttons.<br></br><br></br>

                    <b>To delete a habit</b>, click the "x" button.<br></br>All information about that habit<br></br>
                    will be permanently deleted.<br></br><br></br>
                    
                    Developed by LarryMillerProgramming</p>
            </div>
        </React.Fragment>
    )
}

const aboutStyle = {
    textAlign: 'center',
    color: '#3c2774',
    marginTop: '20px',
    padding: '20px',
    background: '#cdeee7',
    border: '1px #239379 solid',
    borderRadius: '15px'
}

export default About;