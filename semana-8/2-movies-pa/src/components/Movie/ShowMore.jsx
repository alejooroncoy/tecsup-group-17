import { useEffect, useState } from "react";

const Feature = ({ name, value, isOpen }) => {
  const [showFeature, setShowFeature] = useState(isOpen);
  useEffect(() => {
    if (isOpen) return setShowFeature(true);
  }, [isOpen]);
  const handleAnimationEnd = () => {
    if (!isOpen) setShowFeature(false);
  };
  return (
    showFeature && (
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`movie__content__feature movie__content__feature--${
          isOpen ? "open" : "close"
        }`}
      >
        <h2 className="movie__content__feature-title">{name}</h2>
        <span className="movie__content__feature-value">{value}</span>
      </div>
    )
  );
};

const MovieShowMore = ({ popularity, adult, vote_average }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClickShowMore = () => setOpen(!isOpen);
  return (
    <>
      {
        <div className="movie__content__feature-container">
          <Feature isOpen={isOpen} name="popularity" value={popularity} />
          <Feature
            isOpen={isOpen}
            name="a. content"
            value={adult ? "Sí" : "No"}
          />
          <Feature isOpen={isOpen} name="punctuation" value={vote_average} />
        </div>
      }
      <button onClick={handleClickShowMore} className="button button--movie">
        {isOpen ? "Leer menos" : "Leer más"}
      </button>
    </>
  );
};

export default MovieShowMore;
