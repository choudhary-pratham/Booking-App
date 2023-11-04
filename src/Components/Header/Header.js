import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="header">
      <div className="header--container">
        <div className="header--list">
          <div className="header--list--items active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header--list--items active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header--list--items active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header--list--items active">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header--list--items active">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headertitle">A lifetime of discounts? It's Genius.</h1>
        <p className="header--desc">
          Get rewarded for your travels-unlock instant saving of 10% or more
          with a free booking.com account
        </p>
        <button className="header--button">Sign in / Register</button>
      </div>
    </div>
  );
}
