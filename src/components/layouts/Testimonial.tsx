
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Testimonial = () => {
 
  return (
    <section id="projects" className="section section-2">

        <div className="container">
          <div id="testimonials-section" className="text-center">
              
                <div className="section-title">
                  <h2 className="title"><strong> Testimonials</strong> </h2>
                  <div className="line"></div>
                </div>
                <div className="row">
                  <div className="">
                    <Carousel autoPlay showThumbs={false} className="carousel-section owl-theme">
                    <div className="item">
                        <div className="coursel-item-content">
                        <p>Mr. El Hafi did an amazing work for me and I&apos;m happy and very satisfied with the work.
                          He is professional, a good listeners, great communication skills, highly skilled and knowledgeable. I highly recommend.</p>
                        <p><strong className="testifier-name">Mr. Marcus Sassi</strong>, Founder & CEO
                          , Comus.se</p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="coursel-item-content">
                        <p>Mr. El Hafi did an amazing work for me and I&apos;m happy and very satisfied with the work.
                          He is professional, a good listeners, great communication skills, highly skilled and knowledgeable. I highly recommend.</p>
                        <p><strong className="testifier-name">Mr. Marcus Sassi</strong>, Founder & CEO
                          , Comus.se</p>
                        </div>
                      </div>
                      {/* <div className="item">
                        <div className="coursel-item-content">
                        <p>Curabitur malesuada lacus at purus pharetra, vitae egestas augue blandit. Duis feugiat vestibulum turpis, malesuada volutpat augue aliquet at. Vivamus egestas urna id eros tincidunt, in dictum enim tincidunt. Suspendisse vel pellentesque velit, non pretium erat. Ut commodo, arcu ac luctus pretium, ante est hendrerit risus, non efficitur odio nisl ac diam. Quisque vestibulum arcu tortor. Nam suscipit nisl laoreet purus facilisis, vel tempus lacus pellentesque.</p>
                        <p><strong>Clint</strong>, Executive manager
                          , Company</p>
                        </div>
                      </div> */}
          
                    </Carousel>
                  </div>
                </div>
            </div>
          </div>
          </section>
    )
}
