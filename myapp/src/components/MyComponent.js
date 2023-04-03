import React from "react";
import PropTypes from "prop-types"

const MyComponent = ({name, number, children}) => { // props를 destructuring assignment (비구조화 할당)

  return (
    <div className="container">
        Hello, my name is {name} <br/>
        children value is {children} <br/>
        her favorite number is {number}
    </div>
  )
};

// 기본값
MyComponent.defaultProps = {
    name : '기본이름'
}

// props 검증
/*
  React.PropTypes는 React v15.5부터 다른 패키지로 이동하였습니다. 대신 prop-types 라이브러리를 사용하시길 바랍니다.
  npm install --save prop-types
  yarn add prop-types
*/
MyComponent.propTypes = {
  name : PropTypes.string,
  number : PropTypes.number.isRequired // 필수 입력
}

export default MyComponent;
