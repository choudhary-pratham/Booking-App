import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import OptionItems from "./OptionItems";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="headertitle">A lifetime of discounts? It's Genius.</h1>
      <p className="header--desc">
        Get rewarded for your travels-unlock instant saving of 10% or more with
        a free booking.com account
      </p>
      <button className="header--button">Sign in / Register</button>
      <div className="header--search">
        <div className="header--search--items">
          <FontAwesomeIcon icon={faBed} className="header--icon" />
          <input
            type="text"
            placeholder="where to?"
            className="header--search--input"
          />
        </div>
        <div className="header--search--items">
          <FontAwesomeIcon icon={faCalendarDays} className="header--icon" />
          <span
            className="header--search--text"
            onClick={() => {
              setShowDate(!showDate);
              setShow(false);
            }}
          >
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </span>
          {showDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="header--date--range"
            />
          )}
        </div>
        <div className="header--search--items">
          <FontAwesomeIcon icon={faPerson} className="header--icon" />
          <span
            className="header--search--text"
            onClick={() => {
              setShow(!show);
              setShowDate(false);
            }}
          >
            {`${options.Adult} adult ${options.Children} children
            ${options.Room} room`}
          </span>
          {show && (
            <div className="options">
              <OptionItems
                text="Adult"
                number={1}
                options={options}
                setOptions={setOptions}
              />
              <OptionItems
                text="Children"
                number={0}
                options={options}
                setOptions={setOptions}
              />
              <OptionItems
                text="Room"
                number={0}
                options={options}
                setOptions={setOptions}
              />
            </div>
          )}
        </div>
        <button className="header--button header--search--button">
          Search
        </button>
      </div>
    </div>
  );
}
