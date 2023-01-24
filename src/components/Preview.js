import { useEffect, useState, useRef, useContext } from "react";
import { filterContext } from "./Page";
import UploadBtn from "./UploadBtn";
import DownloadBtn from "./DownloadBtn";
import defaultImage from "../images/default-image.png";

const Preview = () => {
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const { filters } = useContext(filterContext);
  const imageRef = useRef(null);

  useEffect(() => {
    // looping on filters object keys to concatenate theme

    let filterValue = "";

    for (const filter in filters) {
      filterValue += `${filter}(${filters[filter]}) `;
    }

    imageRef.current.style.filter = filterValue;
  }, [filters]);

  return (
    <div className="preview">
      <img ref={imageRef} src={imageSrc} alt="" />
      <div className="upload-download">
        <UploadBtn setImageSrc={setImageSrc}></UploadBtn>
        <DownloadBtn
          image={imageRef.current}
          defaultImage={defaultImage}
        ></DownloadBtn>
      </div>
    </div>
  );
};

export default Preview;
