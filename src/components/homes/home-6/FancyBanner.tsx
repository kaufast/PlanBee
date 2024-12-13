import Image from 'next/image'

import img_1 from "@/assets/images/shape/shape_51.svg"
import img_2 from "@/assets/images/shape/shape_52.svg"
import img_3 from "@/assets/images/shape/shape_53.svg"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-six position-relative z-1 mt-60 lg-mt-30">
         <div className="wrapper position-relative">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-5">
                     <h2>We’ve people company maintain</h2>
                  </div>
                  <div className="col-xl-5 col-lg-6 ms-auto">
                     <div className="row">
                        <div className="col-sm-7">
                           <div className="counter-block-two">
                              <div className="main-count fw-500 color-dark">$<span className="counter">9.1</span>b+</div>
                              <p className="fs-22">Coverage</p>
                           </div>
                        </div>
                        <div className="col-sm-5">
                           <div className="counter-block-two">
                              <div className="main-count fw-500 color-dark"><span className="counter">1.2</span>m</div>
                              <p className="fs-22">Low interest rate</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={img_1} alt="" className="shapes shape_01" />
         <Image src={img_2} alt="" className="shapes shape_02" />
         <Image src={img_3} alt="" className="shapes shape_03" />
      </div>
   )
}

export default FancyBanner
