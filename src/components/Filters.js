import Sliders from "./Sliders";
import ResetBtn from "./ResetBtn";

const Filters = () => {
  return (
    <div className="filters">
      <div>
        <h1 className="title">Filters</h1>
        <Sliders></Sliders>
        <ResetBtn></ResetBtn>
      </div>
    </div>
  );
};

export default Filters;
