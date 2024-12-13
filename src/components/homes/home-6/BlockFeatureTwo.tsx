import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/assets/card_14.png"
import img_2 from "@/assets/images/assets/card_15.png"
import img_3 from "@/assets/images/shape/shape_54.svg"
import img_4 from "@/assets/images/assets/card_16.png"
import img_5 from "@/assets/images/assets/card_17.png"
import img_6 from "@/assets/images/assets/card_17.1.png"
import img_7 from "@/assets/images/shape/shape_55.svg"

const BlockFeatureTwo = () => {
   return (
      <div className="block-feature-eighteen pt-180 lg-pt-100">
         <div className="container">
            <div className="row gx-xxl-5">
               <div className="col-12">
                  <div className="feature-block block-one md-pt-30 w-100">
                     <div className="row align-items-center">
                        <div className="col-lg-5 order-lg-last">
                           <div className="ps-xxl-4 pe-xxl-3">
                              <h3>Award winning Application</h3>
                              <p className="fs-24 pt-35 lg-pt-20 pb-20">Go paperless. Back up important to all your devices, & keep the information not the clutter.</p>
                              <Link href="/about-us-v3" className="btn-seven">Learn More</Link>
                           </div>
                        </div>
                        <div className="col-lg-7">
                           <Image src={img_1} alt="" className="me-auto ms-auto" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 d-flex">
                  <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-55 lg-pt-30">
                     <h3>Major Application Integration</h3>
                     <p className="fs-24 pt-30 md-pt-20">Go paperless. Back up important to all devices, & keep the information not the clutter.</p>
                     <div className="position-relative">
                        <Image src={img_2} alt="" className="me-auto ms-auto" />
                        <Image src={img_3} alt="" className="shapes shape_01" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 d-flex">
                  <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-55 lg-pt-30 md-pb-40">
                     <h3>Cool Features & Widgets</h3>
                     <p className="fs-24 pt-30 md-pt-20 pb-20">Go paperless. Back up important to all devices, & keep the information not the clutter. keep quis information not the </p>
                     <div className="position-relative">
                        <Image src={img_4} alt="" className="me-auto ms-auto card-three" />
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-70 lg-pt-40">
                     <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 m-auto text-center">
                           <h3>Standby, A full New Experiences</h3>
                        </div>
                     </div>
                     <Image src={img_5} alt="" className="me-auto ms-auto mt-70 xs-mt-40" />
                     <Image src={img_6} alt="" className="shapes shape_02" />
                     <Image src={img_7} alt="" className="shapes shape_03" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureTwo
