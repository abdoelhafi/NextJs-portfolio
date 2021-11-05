import React from 'react'
import { Testimonial } from './layouts/Testimonial';
import { Projects } from './layouts/Projects';
import { Navbar } from './layouts/Navbar';
import { AboutMe } from './layouts/AboutMe';
import { Technologies } from './layouts/Technologies';
import { GetInTouch } from './layouts/GetInTouch';
import { Footer } from './layouts/Footer';


export default function Landing() {
    return (
        <div>
          <Navbar />
          {/* About Me */}
          <AboutMe />
          {/* Interests */}
          
          {/* Projects */}
          <Projects />
          {/* technologies */}
          <Technologies />
          {/* testimonial */}
            <Testimonial />
          
          {/* Get In touch */}
          <GetInTouch />	
          {/* Footer */}
          <Footer />
      </div>
    )
}
