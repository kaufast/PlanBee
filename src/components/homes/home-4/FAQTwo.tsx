
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
      title: "If I already have a website, can I transfer it to your web hosting?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
   {
      id: 5,
      title: "How can I accept credit cards online?",
      desc: (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi dolores animi quas blanditiis iusto mollitia quasi, ipsa numquam quaerat.</>),
   },
]

const FAQTwo = () => {
   return (
      <div className="faq-section-three position-relative mt-150 xl-mt-120 lg-mt-80">
         <div className="container">
            <div className="title-six text-center mb-80 lg-mb-40">
               <h2>Questions & Answers</h2>
            </div>

            <div className="row">
               <div className="col-lg-10 m-auto">
                  <div className="accordion accordion-style-two p0 shadow-none ms-xxl-4 me-xxl-4" id="accordionFour">
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

export default FAQTwo
