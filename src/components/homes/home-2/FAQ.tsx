import Image from "next/image";
import faq_shape_1 from "@/assets/images/shape/shape_28.svg"

import shape_1 from "@/assets/images/shape/shape_25.svg"
import shape_2 from "@/assets/images/shape/shape_26.svg"
import shape_3 from "@/assets/images/shape/shape_27.svg"

interface ContentType {
   id: number;
   margin?: string;
   content_details: {
      btn: JSX.Element;
      title: string;
   };
   faq_area: {
      id: 1,
      ac_id: string;
      faq_details: {
         id: number,
         title: string;
         desc: JSX.Element;
      }[];
   }
}

const faq_data: ContentType[] = [
   {
      id: 1,
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#FFCE52" }}>Account <Image src={shape_1} alt="" /></div></>),
         title: "Questions & Answers",
      },
      faq_area: {
         id: 1,
         ac_id: "accordionOne",
         faq_details: [
            {
               id: 1,
               title: "What is PlanBee?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               title: "Why I should choose PlanBee?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               title: "How does PlanBee cost?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      },
   },
   {
      id: 2,
      margin: "mt-90 lg-mt-60",
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#FF4BD8" }}>Financial <Image src={shape_2} alt="" /></div></>),
         title: "Pricing plan, Billing",
      },
      faq_area: {
         id: 1,
         ac_id: "accordionTwo",
         faq_details: [
            {
               id: 1,
               title: "Do you have any free trials?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               title: "How do I find different criteria in pricing?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               title: "What can I use to build my website?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 4,
               title: "I have running plan, How can I change it?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 5,
               title: "Which payment method works?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      }
   },
   {
      id: 3,
      margin: "mt-90 lg-mt-60",
      content_details: {
         btn: (<><div className="pointer" style={{ background: "#00D9B2" }}>Common <Image src={shape_3} alt="" /></div></>),
         title: "Questions & Answers",
      },
      faq_area: {
         id: 1,
         ac_id: "accordionThree",
         faq_details: [
            {
               id: 1,
               title: "Which product do you offer?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 2,
               title: "Is my Identity safe?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
            {
               id: 3,
               title: "Is PlanBee offer expert support?",
               desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
            },
         ],
      }
   },
]
const FAQ = () => {
   return (
      <div className="faq-section-two position-relative mt-250 xl-mt-200 lg-mt-80 mb-200 xl-mb-150 lg-mb-80">
         <div className="container">
            {faq_data.map((items) => (
               <div key={items.id} className="row mt-90 lg-mt-60">
                  <div className="col-lg-5">
                     <div className="title-two mb-40">
                        {items.content_details.btn}
                        <h2>{items.content_details.title}</h2>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="accordion accordion-style-two ms-xxl-4" id={items.faq_area.ac_id}>
                        {items.faq_area.faq_details.map((item) => (
                           <div key={item.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#collapseOneA${item.id}`} aria-expanded="false" aria-controls={`collapseOneA${item.id}`}>
                                    {item.title}
                                 </button>
                              </h2>
                              <div id={`collapseOneA${item.id}`} className="accordion-collapse collapse" data-bs-parent={`#${items.faq_area.ac_id}`}>
                                 <div className="accordion-body">
                                    <p className="fs-22">{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <Image src={faq_shape_1} alt="" className="shapes shape_01" />
      </div>
   )
}

export default FAQ
