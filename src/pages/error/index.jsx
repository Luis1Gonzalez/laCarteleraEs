import "./style.css";
import errorGif from "./../../images/error.gif";

export default function Error() {
  return (
    <div className="wrpa-error">
      <h1>404 Not Found</h1>
      <div className="Wrap-gif">
        <img src={errorGif} alt="imagen de error" />
      </div>
    </div>
  );
}
