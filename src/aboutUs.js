import react from "react";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div className="about">
      <div className="header">
        <h1>About Us - </h1>
      </div>
      <br />
      <div className="header1">
        <h2>Hello we are the maker of this app!!</h2>
      </div>
      <br />

      <div className="services">
        <h3>Services we provide</h3>
        <br />
        <br />
        <div className="services">
          1. Hiking.
          <br />
          2. camping.
          <br />
          3. Trekking.
          <br />
          4. LakeSide Adventures.
          <br />
          5. Pet camping.
        </div>
      </div>
      <br />
      <div className="makers">
        <div className="abdul">
          <h2>Abdul</h2>
        </div>
        <div className="vaishnavi">
          <h2>Vaishnavi</h2>
        </div>
        <div className="sai">
          <h2>Sai</h2>
        </div>
        <div className="manan">
          <h2>Manan</h2>
        </div>
        <div className="jahangir">
          <h2>Jahangir</h2>
        </div>
      </div>
      <br />
    </div>
  );
}
