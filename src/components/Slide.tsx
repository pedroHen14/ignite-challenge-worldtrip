import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { SlideItem } from './SlideItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{width: '100%', flex: '1', height: '100%'}}
    >
      <SwiperSlide>
        <SlideItem 
          title='Europa'
          description='O continente mais antigo.'
          link='europa'
          imageUrl="/images/europe-slide.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title='Ásia'
          description='O continente mais populoso.'
          link='asia'
          imageUrl="/images/asia-slide.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title='África'
          description='O continente mais colorido.'
          link='africa'
          imageUrl="/images/africa-slide.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title='América do Sul'
          description='O melhor continente.'
          link='america-do-sul'
          imageUrl="/images/america1-slide.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title='América do Norte'
          description='O continente mais tecnológico.'
          link='america-do-norte'
          imageUrl="/images/america2-slide.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title='Oceania'
          description='O continente mais peculiar.'
          link='oceania'
          imageUrl="/images/oceania-slide.jpg"
        />
      </SwiperSlide>
    </Swiper>
  )
}