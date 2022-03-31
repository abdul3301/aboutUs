import { Component } from "react";
import ShowDetails from "./showDetails";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "abdul",
      address: "mumbai",
      show: false
    };
  }
  componentDidMount() {
    //this method will be called after your component get mounted
    this.setState({
      name: "abdul1",
      address: "nagpur"
    });
  }
  componentDidUpdate(prevprops, prevstate) {
    //will be called after component gets updated
    console.log(prevstate);
  }
  render() {
    //will be called after component gets updated
    let { name, address, show } = this.state;

    return (
      <div>
        <h1>Hello lifeCycle</h1>
        <button onClick={() => this.setState({ show: !show })}>
          {show ? "hide details" : "show details"}
        </button>
        {show && <ShowDetails name={name} address={address} />}
      </div>
    );
  }
}
// function ShowDetails({ name, address }) {
//   return (
//     <>
//       <div>{name}</div>
//       <div>
//         <h1>{address}</h1>
//       </div>
//     </>
//   );
// }
export default LifeCycle;
