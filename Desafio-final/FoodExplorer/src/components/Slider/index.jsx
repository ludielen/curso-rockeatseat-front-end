import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import { Container } from './styles.js';
import 'swiper/css/navigation';
import { Plate } from "../../pages/Plate/index.jsx";

register()

export function Slider({plate_list, slide_title}) {
 

  return (
    <Container>

      <div>
        <div>
          <h2>{slide_title}</h2>
        </div>
        <div>
          <Swiper slidesPerView={4}
            pagination={{ clickable: true }}
            spaceBetween={50}
            navigation>
            {
              plate_list.map((item) => (
                <SwiperSlide key={item.id}>
                  <Plate
                    plate={item}
                  />
                </SwiperSlide>

              ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}