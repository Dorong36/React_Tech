import React, { Component } from 'react';

class Counter extends Component {
    // // state constructor로 넣어주기
    // constructor(props) {
    //     super(props);
    //     // state 초깃값 설정
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 35
    //     }
    // }

    // state 객체로 따로 넣어주기
    state =  {
        number : 0,
        fixedNumber : 35
    }

    render() {
        const {number, fixedNumber} = this.state; // this.state로 state 조회
        return (
            <div className='container'>
                <h1>Count Number : {number}</h1>
                <h1>Fixed Number : {fixedNumber}</h1>
                <button
                    onClick={()=>{
                        // this.setState로 state에 새로운 값 할당
                        // 방법1. setState에 객체 인자 전달하기
                        // this.setState({number : number + 1})

                        // 만약 setState 두 개를 연속으로 사용하고 싶다면?
                        // 방법1 처럼 객체로 여러번 전달하면 한번에 사용이 안됨
                        // 이럴 때는
                        // 방법2-1. setState에 함수 인자 전달하기
                        this.setState(prevState => {
                            return {
                                number : prevState.number + 1
                            };
                        });
                        // 방법 2-2
                        // 바로 객체를 반환하기 때문에 ()=>({}) 형태
                        this.setState(prevState => ({
                            number : prevState.number + 1
                        }),
                        // setState 두 번째 파라미터로 콜백함수 넣기 가능
                        ()=>{
                            console.log("setState has been called")
                            console.log(this.state)
                        }
                        )
                    }}
                >+1</button>
            </div>
        );
    }
}

export default Counter;