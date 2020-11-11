import './styles.css';
import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs,EffectFade} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation,Pagination,Thumbs,EffectFade]);
function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];

  const thumbs = [];
  for (let i=0; i<5;i+=1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{listStyle:'none'}}>
        <img src={`https://picsum.photos/id/${i}/163/100`}
        alt={`Thumbnail ${i}`}></img>
      </SwiperSlide>
    )
  }
  for (let i=0; i< 5; i+=1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag ="li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`}
        style={{listStyle: 'none'}} 
        alt={`Slide ${i}`}></img>
      </SwiperSlide>
    )
  }
  return (  
    <React.Fragment>
      <Swiper tag="section"
      wrapperTag="ul"
      id="main"
      thumbs={{swiper: thumbsSwiper}}
      navigation
      effect = "fade"
      pagination spaceBetween={0} slidesPerView={1}
      onInit={(swiper) => console.log('Swiper init', swiper)}
      onSlideChange={(swiper)=> {console.log("Slide index changed to: ",swiper.activeIndex  )}}
      onReachEnd={()=> console.log('Swiper end reached')}>
      {slides}
      </Swiper>
      <Swiper id="thumbs" 
      spaceBetween={5} 
      slidesPerView={3} 
      loopFillGroupWithBlank = {true}
      onSwiper={setThumbsSwiper}>
        {thumbs}
      </Swiper>
    </React.Fragment>
  )
}

export default App;

