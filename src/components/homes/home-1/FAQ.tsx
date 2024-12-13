interface DataType {
   id: number,
   title: string;
   desc: JSX.Element;
}

const faq_data: DataType[] = [
   {
      id: 1,
      title: "What is PlanB?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 2,
      title: "How do I find different criteria in pricing",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 3,
      title: "How does PlanB cost?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
   {
      id: 4,
      title: "I have running plan, How can I change it?",
      desc: (<>Revolutionize customer support workflows with our help desk SaaS company, delivering seamless solutions for modern businesses.</>),
   },
]

const FAQ = () => {
   return (
      <div className="faq-section-three bg-fourteen position-relative pt-150 lg-pt-80 pb-150 lg-pb-80">
         <div className="container">
            <div className="title-ten text-center mb-75 lg-mb-30">
               <h2><span className="position-relative z-1">Questions<span className="line" style={{ background: "#FFC92E" }}></span></span> & Answers</h2>
            </div>
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <div className="accordion accordion-style-four" id="accordionFour">
                     {faq_data.map((item) => (
                        <div key={item.id} className="accordion-item">
                           <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                 data-bs-target={`#collapseOneA${item.id}`} aria-expanded="false" aria-controls={`collapseOneA${item.id}`}>
                                 {item.title}
                              </button>
                           </h2>
                           <div id={`collapseOneA${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFour">
                              <div className="accordion-body">
                                 <p className="fs-22">{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ
