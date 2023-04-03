import { Component } from 'react';
import './App.css';
import ErrorBoundery from './components/ErrorBoundery';
import LifeCycle from './components/LifeCycle';
// import MyComponent from './components/MyComponent';
// import Counter from './components/Counter';
// import Say from './components/Say';
// import EventPractice from './components/EventPractice';
// import EventPracFunc from './components/EventPracFunc';
// import Validation from './components/Validation';
// import ScrollBox from './components/ScrollBox';
// import Iteration from './components/Iteration';

// const App = () => {
//   return (
//     // <MyComponent name="winter" number={35}> Aespa </MyComponent>
//     // <Counter></Counter>
//     // <Say></Say>
//     // <EventPractice></EventPractice>
//     // <EventPracFunc></EventPracFunc>
//     <Iteration></Iteration>
//   )
// }



// ✅ 클래스 컴포넌트 ver
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Validation></Validation> */}
//         <ScrollBox ref={(ref) => this.scrollBox = ref}></ScrollBox>
//         <button onClick={()=>{this.scrollBox.scrollToBottom()}}>Bottom</button>
//       </div>

//     );
//   }
// }


// ✅ 라이프사이클 연습
// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
  // 16777215를 hex로 표현하면 ffffff에 해당
  // 해당 코드는 000000 부터 ffffff 값을 반환
}

class App extends Component {
  state = {
    color : "#000000"
  }
  handleClick = () =>{
    this.setState({
      color : getRandomColor()
    })
  }
  render() {
    return (
      <div className='container'>
        <button onClick={()=>{this.handleClick()}}>Random color</button>
        <ErrorBoundery>
          <LifeCycle color={this.state.color}></LifeCycle>
        </ErrorBoundery>
      </div>
    )
  }
}

export default App;
