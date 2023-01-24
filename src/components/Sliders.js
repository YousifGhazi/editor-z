import Slider from "./Slider";

const Sliders = () => {
  return (
    <>
      <form id="sliders" className="sliders">
        <Slider name={"saturate"} start={100} max={200}></Slider>
        <Slider name={"contrast"} start={100} max={200}></Slider>
        <Slider name={"brightness"} start={100} max={200}></Slider>
        <Slider name={"sepia"}></Slider>
        <Slider name={"grayscale"}></Slider>
        <Slider name={"blur"} max={10} step={0.1} unit={"px"}></Slider>
        <Slider name={"hue-rotate"} max={360} unit={"deg"}></Slider>
      </form>
    </>
  );
};

export default Sliders;
