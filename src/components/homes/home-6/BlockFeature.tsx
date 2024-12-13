import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/icon/icon_34.png"
import icon_2 from "@/assets/images/icon/icon_35.png"
import icon_3 from "@/assets/images/icon/icon_36.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: JSX.Element;
}

const feature_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Open Account",
      desc: (<>You design, we generate the code — for everything from fully custom layouts to</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: "Dashboard",
      desc: (<>You design, we generate the code — for everything from fully custom layouts to</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: "Expert Support",
      desc: (<>You design, we generate the code — for everything from fully custom layouts to</>),
   },
];

const BlockFeature = () => {
   return (
      <div className="block-feature-seventeen position-relative z-1 mt-150 lg-mt-80">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 col-lg-6 m-auto">
                  <div className="title-nine text-center mb-60 lg-mb-10">
                     <div className="upper-title">Main Features</div>
                     <h2>Creative power that goes beyond the app</h2>
                  </div>
               </div>
            </div>

            <div className="row gx-xxl-5">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="card-style-eight text-center mt-35">
                        <Image src={item.icon} alt="" className="icon m-auto" />
                        <h5>{item.title}</h5>
                        <p className="ps-xxl-4 pe-xxl-4">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BlockFeature
