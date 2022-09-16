const Photo = ({ src, message }) => (
  <div className="photos__photo-container photos__photo-container">
    <img width="100%" height="100%" className="photos__photo photos__photo" src={src}></img>
    <a href={src} className={"photos__photo-title photos__photo-title"}>{message}</a>
  </div>
)

export default Photo