import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import '../styles/modules/gallery.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Photos from './Photos';
import ButtonSlider from './ButtonSlider';
import usePhotos from '../hooks/usePhotos';

BsFillArrowLeftCircleFill.displayName = 'BsFillArrowLeftCircleFill';
BsFillArrowRightCircleFill.displayName = 'BsFillArrowRightCircleFill';

const Gallery = () => {
  const photos = usePhotos(3);
  return (
    <div className="main-container">
      <Swiper
        className='gallery'
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <ButtonSlider action="prev">
          <BsFillArrowLeftCircleFill color="#ed0688" size={64} />
        </ButtonSlider>
          {
            photos.map(({ photos: groupPhoto, id }) => (
              <SwiperSlide key={id}>
                <Photos photos={groupPhoto} />
              </SwiperSlide>
            ))
          }
        <ButtonSlider action="next">
          <BsFillArrowRightCircleFill color="#ed0688" size={64} />
        </ButtonSlider>
      </Swiper>
    </div>
  )
}

export default Gallery;