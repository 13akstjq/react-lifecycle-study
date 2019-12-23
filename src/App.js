import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    console.log("contructor");
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("DidMount!");
  }

  //
  // componentWillReceiveProps() {
  //   console.log("CocomponentWillReceiveProps");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // 업데이트를 할지 말지 결정
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 변경되기 전의 props, state를 인자로 받음.
    console.log("getSnapshotBeforeUpdate", prevState);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    // 변경되기 전의 props, state를 인자로 받음.
    console.log("componentDidUpdate", prevState);
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  componentWillUnmount() {
    console.log("componentWillunmount");
  }

  up = () => {
    if (this.state.count > 10) {
      throw Error("에러 발생");
    }
    this.setState({
      ...this.state,
      count: this.state.count + 1
    });
  };

  down = () =>
    this.setState({
      ...this.state,
      count: this.state.count - 1
    });
  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div className="App">
        {count}
        <button onClick={this.up}>증가</button>
        <button onClick={this.down}>감소</button>
      </div>
    );
  }
}

export default App;
