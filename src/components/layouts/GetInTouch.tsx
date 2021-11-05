import React from 'react'

export const GetInTouch = ()=> {
    return (
        <section id="social" className="section section-3">
          <div className="container ">
            <div className="has-text-centered">					
              <h3 className="title is-3"><strong>Let&apos;s Socialize</strong></h3>
            </div>
            <div className="columns is-multiline is-desktop is-centered">
              <div className="column is-narrow co-distance">
                <a href="https://twitter.com/abdo_hafi" >
                  <span >
                    <i className="fab fa-3x fa-twitter" />
                  </span>
                </a>							
              </div> 
              <div className="column is-narrow co-distance">
                <a href="https://www.linkedin.com/in/el-hafi/" >
                  <span >
                    <i className="fab fa-3x fa-linkedin-in" />
                  </span>
                </a>							
              </div> 
              <div className="column is-narrow co-distance">
                <a href="mailto:elhafiabdessamad1@gmail.com" >
                  <span >
                    <i className="fas fa-3x fa-at" />
                  </span>
                </a>							
              </div> 
            </div>
          </div>
        </section>
    )
}
