"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

import img_1 from "@/assets/images/assets/card_18.png"
import img_2 from "@/assets/images/assets/card_19.png"
import img_3 from "@/assets/images/assets/bg_10.png"
import img_4 from "@/assets/images/shape/shape_56.svg"
import img_5 from "@/assets/images/shape/shape_57.svg"

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      title: "-  Jesica Harris",
      desc: (<>&quot;Extraordinary performance! <span>Quick solutions.</span> Highly Recommended.&quot;</>)
   },
   {
      id: 2,
      title: "-  Rashid Kabir",
      desc: (<>&quot;Extraordinary performance! <span>Quick solutions.</span> Highly Recommended.&quot;</>)
   },
   {
      id: 3,
      title: "-  Al Hasan",
      desc: (<>&quot;Extraordinary performance! <span>Quick solutions.</span> Highly Recommended.&quot;</>)
   },
];

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   navigation: false,
};

const Feedback = () => {
   return (
      <div className="feedback-section-six text-center position-relative z-1 mt-200 xl-mt-150 lg-mt-100">
         <div className="container">
            <Image src={img_1} alt="" className="mb-50 lg-mb-10" />
            <div className="text-uppercase mb-15 xs-mb-30"><span className="fw-bold text-dark">1.2m+ </span>Customers </div>
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <Swiper {...setting} modules={[Pagination]} className="feedback-slider-four">
                     {testi_data.map((item) => (
                        <SwiperSlide key={item.id} className="item">
                           <blockquote>{item.desc}</blockquote>
                           <h6 className='mb-60'>{item.title}</h6>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
            <Image src={img_2} alt="" className="mt-50 lg-mt-10" />
            <Image src={img_3} alt="" className="shapes shape_01" />
            <Image src={img_4} alt="" className="shapes shape_02" />
            <Image src={img_5} alt="" className="shapes shape_03" />
         </div>
      </div>
   )
}

export default Feedback
