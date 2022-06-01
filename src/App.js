import { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import car from "./car.png";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div
      className="container-fluid bg-dark"
      style={{
        paddingRight: 0,
        paddingLeft: 0,
      }}
    >
      <center>
        <img className="logo img-fluid" src={logo} alt="trober logo" />
      </center>
      <div className="row">
        <div className="left text-center col-lg-5 justify-content">
          The new way
          <br />
          to get to work.
          <br />
          <p id="desc">
            Trober gives you a scheduled ride <br />
            to take you and from
            <br />
            work everyday
          </p>
          <a
            href="#waitlist"
            className="btn btn-lg h3 text-dark"
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#B7C945",
            }}
          >
            Join Waitlist
          </a>
        </div>
        <div className="col-lg-7">
          <img id="car" src={car} alt="trober vehiclels" />
        </div>
        <div id="divider"></div>
        <div className="container waitlist text-dark bg-white" id="waitlist">
          <form>
            <p className="text-center form-title">
              Fill out Details to be added to the waitlist of the smart Trotro
              for working professionals.
            </p>
            <div className="text-center">
              <input
                className="mb-3"
                placeholder="Name"
                onChange={({ target }) => {
                  setName(target.value);
                }}
              />
              <br />
              <input
                className="mb-3"
                placeholder="Phone Number"
                onChange={({ target }) => {
                  setPhone(target.value);
                }}
              />
              <br />
              <input
                className="mb-3"
                placeholder="Pickup Location"
                onChange={({ target }) => {
                  setPickup(target.value);
                }}
              />

              <br />
              <input
                className="mb-3"
                placeholder="Destination"
                onChange={({ target }) => {
                  setDestination(target.value);
                }}
              />

              <br />
              <br />

              <button
                type="submit"
                classname="btn bg-dark h3 submit text-white"
                id="waitlistButton"
                onClick={async (e) => {
                  e.preventDefault();
                  const response = await axios.post(
                    "https://trober-backend.herokuapp.com/saveUserRoute",
                    {
                      name,
                      phoneNumber: phone,
                      pickupLocation: pickup,
                      dropoffLocation: destination,
                    }
                  );
                  console.log(response);
                }}
              >
                <p id="joinWaitlist">Join Waitlist</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          height: "100px",
          backgroundColor: "#FFF",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "150px",
          width: "100%",
          backgroundColor: "#01DDA7",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p id="footer">
            Aluguntugui Street
            <br />
            East Legon
            <br />
            Accra
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p id="footerRight">Trober@2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
