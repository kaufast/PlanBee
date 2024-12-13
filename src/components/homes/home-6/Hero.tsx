import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/assets/avatar.png"
import img_2 from "@/assets/images/assets/card_13.png"
import img_3 from "@/assets/images/assets/card_13.1.png"
import img_4 from "@/assets/images/assets/card_13.2.png"
import img_5 from "@/assets/images/assets/card_13.3.png"
import img_6 from "@/assets/images/assets/bg_09.png"

const Hero = () => {
   return (
      <div className="hero-banner-six z-1 position-relative">
         <div className="wrapper position-relative z-1 pt-250 xl-pt-200 md-pt-150 pb-180 xl-pb-100 lg-pb-50">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-7">
                     <h1 className="hero-heading pe-xxl-5">Crafted with <span>humans,</span> Productivity in mind</h1>
                     <p className="fs-24 pt-35 pb-20 pe-xxl-5">PlanBee delivered blazing fast performance, striking word solution</p>

                     <div className="d-flex align-items-center flex-wrap">
                        <Link href="/" className="btn-seven color-two mt-10 me-3">Download - It’s free</Link>
                        <Link className="btn-sixteen mt-10" href="/contact-v2">Contact</Link>
                     </div>

                     <div className="d-flex align-items-center mt-75 md-mt-40">
                        <Image src={img_1} alt="" />
                        <div className="rating">
                           <div className="fw-500 text-dark fs-20">Rated 5.0 on clutch</div>
                           <ul className="style-none d-flex">
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-fill"></i></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="illustration">
               <Image src={img_2} alt="" className="w-100" />
               <Image src={img_3} alt="" className="shapes shape_01" />
               <Image src={img_4} alt="" className="shapes shape_02" />
               <Image src={img_5} alt="" className="shapes shape_03" />
            </div>
            <Image src={img_6} alt="" className="shapes bg-shape" />
         </div>
      </div>
   )
}

export default Hero
