import { useSwiper } from "swiper/react"
import '../styles/modules/button.scss';

const ButtonSlider = ({ children, size = 48, action }) => {
  const swiper = useSwiper();
  const handleClickNextSlide = () => {
    if(action === 'prev') return swiper.slidePrev();
    swiper.slideNext();
  }
  
  return (
    <button width={size} height={size} className={`button button--slide button--slide-${action}`} onClick={handleClickNextSlide} type="button">{children}</button>
  )
}

ButtonSlider.displayName = 'ButtonSlider';

export default ButtonSlider