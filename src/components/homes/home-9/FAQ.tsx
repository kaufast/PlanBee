interface DataType {
   id: number,
   title: string;
   desc: JSX.Element;
}

const faq_data: DataType[] = [
   {
      id: 1,
      title: "What is web hosting?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
   {
      id: 2,
      title: "How do you weigh different criteria in your process?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
   {
      id: 3,
      title: "What can I use to build my website?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
   {
      id: 4,
      title: "I have running plan, How can I change or switch it?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
   {
      id: 5,
      title: "How can I accept credit cards online?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
]

const FAQ = () => {
   return (
      <div className="faq-section-three position-relative mt-180 lg-mt-80 mb-180 lg-mb-80">
         <div className="container lg">
            <div className="row">
               <div className="col-lg-5">
                  <div className="title-eleven">
                     <div className="text-uppercase mb-25">FAQ</div>
                     <h2>Frequently Asked Questions</h2>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="accordion accordion-style-two style-two p0 shadow-none ms-xxl-4 md-mt-40" id="accordionFour">
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
