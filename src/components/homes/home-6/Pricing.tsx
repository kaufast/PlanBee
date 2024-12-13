import Image, { StaticImageData } from "next/image";

import check from "@/assets/images/icon/check.svg"
import cross from "@/assets/images/icon/cross.svg"
import shape from "@/assets/images/shape/shape_58.svg"
import Link from "next/link";

interface DataType {
  id: number;
  shape?: StaticImageData;
  shape_class?:string;
  title: string;
  price: number;
  list: {
    title: string;
    icon: StaticImageData;
  }[];
}

const pricing_data: DataType[] = [
  {
    id: 1,
    shape: shape,
    shape_class:"shape_01",
    title: "Free Plan",
    price: 0,
    list: [
      { icon: check, title: "60-day chat history" },
      { icon: check, title: "Basic widget customization" },
      { icon: cross, title: "Ticketing system" },
      { icon: cross, title: "Data security" },
    ]
  },
  {
    id: 2,
    title: "STandard",
    price: 13,
    list: [
      { icon: check, title: "60-day chat history" },
      { icon: check, title: "Basic widget customization" },
      { icon: check, title: "Ticketing system" },
      { icon: cross, title: "Data security" },
    ]
  },
  {
    id: 3,
    shape: shape,
    shape_class:"shape_02",
    title: "BUSINESS",
    price: 99,
    list: [
      { icon: check, title: "60-day chat history" },
      { icon: check, title: "Basic widget customization" },
      { icon: check, title: "Ticketing system" },
      { icon: check, title: "Data security" },
    ]
  },
];

const Pricing = () => {
  return (
    <div className="pricing-section-five position-relative z-1 mt-180 xl-mt-150 lg-mt-80 pt-130 lg-pt-80 pb-150 xl-pb-130 lg-pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="title-nine">
              <h2 className="text-white">No Hidden Charge, Get your plan</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 ms-auto">
            <p className="text-white fs-24 md-mt-20">Go paperless. Back up important to all devices, & keep the information not the clutter.</p>
          </div>
        </div>

        <div className="mt-50 lg-mt-20">
          <div className="row gx-xxl-5">
            {pricing_data.map((item) => (
              <div key={item.id} className="col-lg-4 d-flex mt-35">
                <div className="pr-column w-100 d-flex flex-column">
                  <div className="pr-header text-center">
                    <div className="plane-name fw-500 text-uppercase">{item.title}</div>
                    <div className="price fw-500">${item.price}</div>
                  </div>
                  <ul className="style-none package-feature mt-50 lg-mt-20 mb-35">
                    {item.list.map((li, i) => (
                      <li key={i}><Image src={li.icon} alt="" className="icon" />{li.title}</li>
                    ))}
                  </ul>
                  <div className="mt-auto"><Link href="#" className="btn-seven w-100">Subscribe Now</Link></div>
                  {item.shape && <Image src={item.shape} alt="" className={`shapes ${item.shape_class}`} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
