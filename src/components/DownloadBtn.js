import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const DownloadBtn = ({ image, defaultImage }) => {
  const canvasRef = useRef(null);

  function createCanvas({ target }) {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      [canvas.width, canvas.height] = [
        image.naturalWidth,
        image.naturalHeight,
      ];
      ctx.filter = image.style.filter;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      target.href = canvas.toDataURL();
    } else {
      target.href = defaultImage;
    }
  }

  return (
    <div className="download">
      <a
        download
        href="/"
        id="download-btn"
        className="btn"
        onClick={createCanvas}
      >
        Download
        <FontAwesomeIcon className="icon" icon={faArrowDownLong} />
      </a>
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
};

export default DownloadBtn;
