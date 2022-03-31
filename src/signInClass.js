import { Component } from "react";

export default class SignIn extends Component {
  state = { email: "", password: "", success: 0, failure: 0 };

  render() {
    let { email, password, success, failure } = this.state;
    const handleCheck = (e) => {
      e.preventDefault();
      if (email == "imran" && password == "imran")
        this.setState({ success: ++success });
      else this.setState({ failure: ++failure });

      this.setState({ email: "", password: "" });
    };
    return (
      <div>
        <h1>Checking the SignIn</h1>
        <form>
          Email:{" "}
          <input
            type="text"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          ></input>
          <br />
          Password:{" "}
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          ></input>
          <br />
          <br />
          <button onClick={handleCheck}>check</button>
          <h4>Success:{success}</h4>
          <h4>Failure:{failure}</h4>
        </form>
      </div>
    );
  }
}
