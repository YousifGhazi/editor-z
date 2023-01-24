import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

const UploadBtn = ({ setImageSrc }) => {
  function uploadImage({ target }) {
    const file = target.files[0];
    if (file) {
      document.getElementById("reset-btn").click();
      setImageSrc(URL.createObjectURL(file));
    }
  }

  return (
    <div className="upload">
      <label htmlFor="upload" id="upload-btn" className="btn">
        upload
        <FontAwesomeIcon className="icon" icon={faArrowUpLong} />
      </label>
      <input
        id="upload"
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />
    </div>
  );
};

export default UploadBtn;
