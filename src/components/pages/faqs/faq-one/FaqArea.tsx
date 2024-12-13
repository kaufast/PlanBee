interface DataType {
   id: number;
   ac_id: string;
   faq_details: {
      id: number,
      title: string;
      desc: JSX.Element;
   }[];
}

const faq_data: DataType[] = [
   {
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
            title: "How do I find different criteria in pricing?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 3,
            title: "How does PlanBee cost?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 4,
            title: "How can I create account?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 5,
            title: "Is PlanBee safe to use?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
      ],
   },
   {
      id: 2,
      ac_id: "accordionTwo",
      faq_details: [
         {
            id: 6,
            title: "I have running plan, How can I change it?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 7,
            title: "How does PlanBee cost?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 8,
            title: "Why I should choose PlanBee?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 9,
            title: "How can I create account?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
         {
            id: 10,
            title: "Is PlanBee safe to use?",
            desc: (<>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</>),
         },
      ],
   },
];

const FaqArea = () => {
   return (
      <div className="faq-section-one bg-four position-relative z-1 pt-150 lg-pt-80 pb-120 lg-pb-60 border-30 mb-30 lg-mb-20 mt-30 lg-mt-20">
         <div className="container">
            <div className="row">
               {faq_data.map((items) => (
                  <div key={items.id} className="col-lg-6">
                     <div className="accordion accordion-style-one" id={items.ac_id}>
                        {items.faq_details.map((item) => (
                           <div key={item.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${item.id}`} aria-expanded="false" aria-controls={`collapseOne${item.id}`}>
                                    {item.title}
                                 </button>
                              </h2>
                              <div id={`collapseOne${item.id}`} className="accordion-collapse collapse" data-bs-parent={`#${items.ac_id}`}>
                                 <div className="accordion-body">
                                    <p className="fs-22">{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-60 lg-mt-40">
               <h4 className="mb-35">Don’t find your answer?</h4>
               <a href="contact-v1.html" className="btn-two xl">Contact us</a>
            </div>
         </div>
      </div>
   )
}

export default FaqArea
