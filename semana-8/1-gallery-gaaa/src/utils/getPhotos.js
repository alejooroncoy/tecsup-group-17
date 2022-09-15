import photos from  '../json/photos.json';

/**
 * Agrupa fotos a partir de la cantidad indicada en parámetro.
 * @param {Number} amountGroup Cantidad de fotos en cada grupo.
 * @returns {{ src: String, id: String }[]} Devuelve un array con las fotos agrupadas.
 */
export default function getPhotos(amountGroup) {
  let start = 0;
  let end = amountGroup;
  const photosGrouped = [];
  const addGroupPhotos = (start, end) => {
    const photosGroup = photos.slice(start, end);
    if(photosGroup.length) photosGrouped.push({
      photos: photosGroup,
      id: crypto.randomUUID(),
    });
  }
  do {
    addGroupPhotos(start, end)
    start += amountGroup;
    end += amountGroup;
  } while(end <= photos.length);
  addGroupPhotos(start, end)
  return photosGrouped;
}