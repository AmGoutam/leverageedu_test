import React from 'react'
import "./Faq.css"
const Faq = () => {
  return (
    <section className='container-fluid faqMain'>
      <div className='container faq'>
        <p className='para'>Have a question?</p>
        <h1>Read our <span>FAQs <div></div></span></h1>
        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is Leverage Edu?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe eius explicabo, temporibus tenetur aliquam fugit laboriosam repellat dolore repudiandae odio, eaque exercitationem consectetur soluta eligendi numquam sed voluptatem. Enim?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How can Leverage Edu help me in studying abroad?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laboriosam fuga nulla eveniet voluptatibus explicabo a similique, delectus odio. Eius, quisquam reiciendis doloremque inventore voluptate autem cumque totam natus quis.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Is Leverage Edu Free?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laudantium vel dolore id, quae aliquid neque vero quos eius, doloribus quod autem incidunt amet. Nostrum est dicta quo nesciunt repellendus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Does Leverage Edu offer paid services?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nisi aperiam officiis pariatur sit perspiciatis tempora cum molestias repellendus, error facilis, maxime dolor delectus beatae, officia labore! Deserunt, assumenda facere.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  What is the Al University Course Finder by Leverage Edu?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tempore consequuntur, quod iure nostrum laborum adipisci eaque earum excepturi. Nobis eius voluptatibus vitae earum! In, illo excepturi? At, nesciunt nam.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How can I apply for the Leverage Edu scholarship?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolores facere, asperiores culpa rem, ad temporibus numquam placeat voluptates aliquam voluptate dolor hic harum. Sequi earum rem sunt accusamus architecto?
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Faq
