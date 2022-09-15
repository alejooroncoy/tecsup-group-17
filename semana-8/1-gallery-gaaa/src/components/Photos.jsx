import '../styles/modules/photos.scss';
import Photo from './Photo';

const Photos = ({ photos }) => (
  <article className="photos">
    {
      photos.map(({ src, id, message }, index) => <Photo index={index} message={message} src={src} key={id} />)
    }
  </article>
)

export default Photos