import { useContext } from "react";
import { filterContext } from "./Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const ResetBtn = () => {
  const { setFilters, DEFAULT_FILTERS } = useContext(filterContext);

  function resetFilters() {
    document.getElementById("sliders").reset();
    setFilters(DEFAULT_FILTERS);
  }

  return (
    <button id="reset-btn" className="btn" onClick={resetFilters}>
      reset
      <FontAwesomeIcon className="icon" icon={faArrowRotateLeft} />
    </button>
  );
};

export default ResetBtn;
