import React, { Component } from "react";
import PropTypes from "prop-types";

class MyClassCom extends Component {
  // defaultProps, propTypes 설정 방법 1
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
  };

  render() {
    // class 컴포넌트에서 props는
    // render 함수 내부에서 this.props로 조회
    const { name, number, children } = this.props;

    return (
      <div className="container">
        Hello, my name is {name} <br />
        children value is {children} <br />
        her favorite number is {number}
      </div>
    );
  }
}

// defaultProps, propTypes 설정 방법 2 => 함수형과 동일
/*
MyClassCom.defaultProps = {
    name : '기본이름'
}

MyClassCom.propTypes = {
  name : PropTypes.string,
  number : PropTypes.number.isRequired
}
*/

export default MyClassCom;
