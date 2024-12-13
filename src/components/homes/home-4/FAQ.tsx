import Image from "next/image";
import Link from "next/link";

import faq_thumb from "@/assets/images/assets/ils_18.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
   class?: string;
}

const faq_data: DataType[] = [
   {
      id: 1,
      title: "Easy to create Account",
      desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.</>),
   },
   {
      id: 2,
      class: "collapsed",
      title: "Unbeatable Pricing Plan",
      desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.</>),
   },
   {
      id: 3,
      class: "collapsed",
      title: "Quick Support",
      desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.</>),
   },
];

const FAQ = () => {
   return (
      <div className="block-feature-thirteen p-30 mt-150 xl-mt-120 lg-mt-60">
         <div className="bg-nine pt-130 lg-pt-80 pb-100 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 order-lg-last">
                     <div className="ms-lg-5 ps-xxl-3">
                        <div className="title-six">
                           <h2>We’re the Boss in This Market</h2>
                        </div>

                        <div className="accordion accordion-style-three mb-40" id="accordionThree">
                           {faq_data.map((item, index) => (
                              <div key={item.id} className="accordion-item">
                                 <h2 className="accordion-header">
                                    <button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${item.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapseOne${item.id}`}>
                                       {item.title}
                                    </button>
                                 </h2>
                                 <div id={`collapseOne${item.id}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionThree">
                                    <div className="accordion-body">
                                       <p className="fs-22">{item.desc}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <Link href="/faq-v1" className="btn-seven">Explore More <i className="fa-sharp fa-regular fa-arrow-right-long"></i></Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-10 m-auto order-lg-first">
                     <div className="media position-relative mt-60">
                        <div className="counter-box text-center d-inline-block box-one">
                           <h2>31,000+</h2>
                           <p className="fs-24 text-dark">Reviews</p>
                        </div>
                        <div className="counter-box text-center d-inline-block box-two">
                           <h2>1.2m</h2>
                           <p className="fs-24 text-dark">Clients</p>
                        </div>
                        <Image src={faq_thumb} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;
