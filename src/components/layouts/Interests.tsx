import React from 'react'
import Image from 'next/dist/client/image'
import developerImage from '../../public/img/developer.png'
import enterpreneurImage from '../../public/img/enterpreneur.png'
export const Interests = ()=> {
    return (
        <section id="projects" className="section section-2">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="title"><strong>Interests</strong></h3>
            </div>
            <div className="columns is-multiline is-desktop">
              <div className="column interest">
              <Image className="interest-img" height={200} width={200} src={developerImage} />

                <div className="intrest-text">Web Development</div>
              </div>
              <div className="column interest">
              <Image className="interest-img" height={200} width={200} src={enterpreneurImage} />
                <div className="intrest-text">Interpreneurship</div>
              </div>
            </div>
          </div>
        </section>
    )
}
