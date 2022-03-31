import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(0);
  const [failure, setFailure] = useState(0);
  const handleCheck = (e) => {
    e.preventDefault();
    if (email == "abdul" && password == "abdul") setSuccess((a) => ++a);
    else setFailure((b) => ++b);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Checking the signin</h1>
      <br />
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="enter your email"
        />
        <br />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password"
        />
        <br />
        <button onClick={handleCheck}>Check</button>
        <h3>success {success}</h3>
        <h3>failure {failure}</h3>
      </form>
    </div>
  );
}
