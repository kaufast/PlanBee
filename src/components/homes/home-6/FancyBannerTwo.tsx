import Image from "next/image"
import Link from "next/link"

import img_1 from "@/assets/images/shape/shape_59.svg"
import img_2 from "@/assets/images/icon/apple.svg"
import img_3 from "@/assets/images/icon/playstore.svg"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-seven position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <Image src={img_1} alt="" className="m-auto shape_01" />
            <div className="row">
               <div className="col-xxl-9 col-lg-8 m-auto text-center">
                  <div className="title-four mt-40 lg-mt-20">
                     <h2>Love Application? Save $20 by grab it today</h2>
                  </div>
                  <p className="fs-28 mt-40 lg-mt-30 mb-40 lg-mb-30">Try it risk free — we don’t charge cancellation fees</p>
                  <div className="d-flex align-items-center justify-content-center flex-wrap platform-button-group">
                     <Link href="/" className="d-flex align-items-center ios-button">
                        <Image src={img_2} alt="" className="icon" />
                        <div>
                           <span>Download on the</span>
                           <strong>App store</strong>
                        </div>
                     </Link>
                     <Link href="/" className="d-flex align-items-center windows-button">
                        <Image src={img_3} alt="" className="icon" />
                        <div>
                           <span>Get it on</span>
                           <strong>Google play</strong>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBannerTwo
