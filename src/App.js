import { useState, useEffect } from "react";
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
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

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
          Redefine your
          <br />
          journey
          <br />
          <p id="desc">
            Trober gives you a scheduled <br />
            ride to and from work
          </p>
          <a
            href="#waitlist"
            className="btn btn-lg h3 text-dark"
            id="waitlistbutton"
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#B7C945",
            }}
          >
            <p
              style={{
                margin: 0,
              }}
              id="joinWaitlistTop"
            >
              Join Waitlist
            </p>
          </a>
        </div>
        <div className="col-lg-7">
          <img id="car" src={car} alt="trober vehiclels" />
        </div>
        <div id="divider"></div>
        <div className="container waitlist text-dark bg-white" id="waitlist">
          <form
            onSubmit={async (e) => {
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
              setDestination("");
              setName("");
              setPickup("");
              setPhone("");
              setMessage("Your response has been recorded. Thank you!");
            }}
          >
            <p className="text-center form-title">
              Register your interest for a smart commute!
            </p>
            <div className="text-center">
              <label
                style={{
                  display: "flex",
                  marginLeft: "20%",
                }}
              >
                Name
              </label>
              <input
                type={"text"}
                required
                className="mb-3"
                placeholder="Ama Kpobie"
                value={name}
                onChange={({ target }) => {
                  setName(target.value);
                }}
              />
              <br />
              <label
                style={{
                  display: "flex",
                  marginLeft: "20%",
                }}
              >
                Phone Number
              </label>
              <input
                type={"number"}
                required
                className="mb-3"
                placeholder="054XXXXXXX"
                value={phone}
                onChange={({ target }) => {
                  setPhone(target.value);
                }}
              />
              <br />
              <label
                style={{
                  display: "flex",
                  marginLeft: "20%",
                }}
              >
                Pickup Location
              </label>
              <input
                type={"text"}
                required
                className="mb-3 required"
                placeholder="Spintex, Manet Junction"
                value={pickup}
                onChange={({ target }) => {
                  setPickup(target.value);
                }}
              />

              <br />
              <label
                style={{
                  display: "flex",
                  marginLeft: "20%",
                }}
              >
                Destination
              </label>
              <input
                type={"text"}
                required
                className="mb-3"
                placeholder="Madina, Ritz Junction"
                value={destination}
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
              >
                <p id="joinWaitlist">Join Waitlist</p>
              </button>
              {message && (
                <p
                  style={{
                    marginTop: "50px",
                  }}
                >
                  {message}
                </p>
              )}
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
