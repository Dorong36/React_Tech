import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username : '',
        message : ''
    }

    // constructor(props){
    //     super(props);
    //     /*
    //     - 함수가 호출될 때 this는 호출부에 따라 결정
    //     - 클래스의 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어짐
    //     - 이 때문에 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서,
    //         메서드를 this와 바인딩하는 작업이 필요!!
    //     - 바인딩하지 않으면 this가 undefined를 가리키게 됨
    //      */
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message : e.target.value
    //     })
    // }

    // handleClick(){
    //     alert(this.state.message);
    //     this.setState({
    //         message : ''
    //     })
    // }


    // constructor를 통한 바인딩이 귀찮다면 바벨의 transform-class-properties 문법 사용
    // 화살표 함수 형태로 메서드 정의
    handleChange = (e) => {
        this.setState({
            // 🌟 객체 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨!!
            [e.target.name] : e.target.value
        })        
    }
    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username : '',
            message : ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }


    render() {
        return (
            <div className='container'>
                <h1>EventPractice</h1>
                <input
                    type = "text"
                    name = "username" 
                    placeholder='input username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type = "text"
                    name = "message" 
                    placeholder='input text'
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyDown = {this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    Confirm
                </button>
            </div>
        );
    }
}

export default EventPractice;