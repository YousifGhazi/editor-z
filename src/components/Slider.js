import { useContext } from "react";
import { filterContext } from "./Page";

// Slider have default values if we didn't pass them

const Slider = ({ name, start = 0, max = 100, step = 1, unit = "%" }) => {
  const { setFilters, filters } = useContext(filterContext);

  function updateFilters({ target }) {
    setFilters({ ...filters, [name]: `${target.value}${unit}` });
  }

  return (
    <div className="slider">
      <span className="filter">{name}</span>
      <input
        className="filter-range"
        type="range"
        onInput={updateFilters}
        defaultValue={start}
        max={max}
        step={step}
      />
    </div>
  );
};

export default Slider;
