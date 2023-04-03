import React, { Component } from 'react';
import './Validation.css'

class Validation extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
        this.pw.focus()
    }


    render() {
        return (
            <div className='container'>
                <input
                    ref={(ref)=> this.pw = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className = {this.state.validated ? 'success' : 'failure'}
                />
                <button onClick={this.handleButtonClick}>Validation</button>
            </div>
        );
    }
}

export default Validation;