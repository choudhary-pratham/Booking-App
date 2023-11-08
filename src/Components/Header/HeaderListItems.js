import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderListItems(props) {
  return (
    <div>
      <div className="header--list--items active">
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.item}</span>
      </div>
    </div>
  );
}
