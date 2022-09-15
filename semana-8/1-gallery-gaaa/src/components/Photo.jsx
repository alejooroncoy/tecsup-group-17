const Photo = ({ src, index, message }) => {
  const positions = ['large', 'left', 'right'];
  return (
    <div className={`photos__photo-container photos__photo-container--${positions[index]}`}>
      <img width="100%" height="100%" className={`photos__photo photos__photo--${positions[index]}`} src={src}></img>
      <a href={src} className={`photos__photo-title photos__photo-title--${positions[index]}`}>{message}</a>
    </div>
  )
}

export default Photo