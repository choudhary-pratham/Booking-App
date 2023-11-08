import "./Header.css";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import HeaderListItems from "./HeaderListItems";
export default function Header(props) {
  return (
    <div className="header">
      <div
        className={
          props.list !== "list"
            ? "header--container"
            : "header--container--list"
        }
      >
        <div className="header--list">
          <HeaderListItems icon={faBed} item="Stays" />
          <HeaderListItems icon={faPlane} item="Flights" />
          <HeaderListItems icon={faCar} item="Car Rentals" />
          <HeaderListItems icon={faBed} item="Attractions" />
          <HeaderListItems icon={faTaxi} item="Airport Taxis" />
        </div>
        {props.list !== "list" && <Search />}
      </div>
    </div>
  );
}
