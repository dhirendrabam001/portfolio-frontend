import AnimationPath from "../Animated/AnimationPath";
import { ClientData } from "../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonals-main py-3 mt-4">
      <AnimationPath direction="left" delay={0.1}>
        <div className="service-line d-flex gap-2">
          <div className="title-line"></div>
          <h2 className="fs-1 fw-bold">Testimonials</h2>
        </div>
        <div className="mt-2 w-75">
          <p>
            My step-by-step guide ensures a smooth project journey, from the
            initial consultation to the final delivery.
          </p>
        </div>
      </AnimationPath>

      <div className="testimonal-info mt-4">
        <AnimationPath direction="bottom" delay={0.25}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            // breakpointsBase="container"
            observer={true}
            observeParents={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {ClientData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonal-sec">
                  <p className="mb-3">{item.description}</p>

                  <div className="testimonal-content d-flex gap-2 align-items-center">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h5 className="mb-0">{item.name}</h5>
                      <p className="mb-0">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimationPath>
      </div>
    </section>
  );
};

export default Testimonials;
