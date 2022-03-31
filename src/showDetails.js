import { Component } from "react";

export default class ShowDetails extends Component {
  componentWillUnmount() {
    console.log("component has removed");
  }

  // constructor() {
  //   super();
  //   console.log("checking");
  // }
  render() {
    let { name, address } = this.props;
    return (
      <>
        <div>{name}</div>
        <div>
          <h1>{address}</h1>
        </div>
      </>
    );
  }
}
