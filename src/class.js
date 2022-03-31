import { Component } from "react";
class Count extends Component {
  state = {
    count: 0
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1> Count Incrementer</h1>
        <br />
        {count}
        <br />

        <button
          onClick={() => {
            this.setState({
              count: ++count
            });
            // this.state.count = ++count;
            // console.log(count);    will not be call the ui method but variable will be updated
          }}
        >
          count+
        </button>
        <button
          onClick={() => {
            this.setState({
              count: --count
            });
          }}
        >
          count-
        </button>
      </div>
    );
  }
}
export default Count;
