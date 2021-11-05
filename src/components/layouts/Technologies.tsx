import React from 'react'
import Image from 'next/dist/client/image'
import expressjsIcon from '../../public/img/express-js.svg'
import nextjsIcon from '../../public/img/next.svg'
import mongodbIcon from '../../public/img/mongodb.svg'
import sqlIcon from '../../public/img/sql.svg'
import gitIcon from '../../public/img/git.svg'
export const Technologies = ()=> {
    return (
        <section id="about" className="section section-5">
        <div className="container">
          <div className="has-text-centered">
            <h3 className="title"><strong>Technologies</strong></h3>
          </div>
          <div className="columns is-multiline is-desktop is-centered">
            <div className="column is-narrow co-distance">
              <i className="fab fa-7x fa-node" />
            </div>
            <div className="column is-narrow co-distance">
            <Image className="tech-img" height={120} width={120} src={expressjsIcon} />

            </div> 
            <div className="column is-narrow co-distance">
              <i className="fab fa-7x fa-react" />
            </div>
            <div className="column is-narrow co-distance">
              <Image className="tech-img" height={120} width={120} src={nextjsIcon} />
            </div>
            <div className="column is-narrow co-distance">
              <Image className="tech-img" height={120} width={120} src={mongodbIcon} />
            </div>
            <div className="column is-narrow co-distance">
              <Image className="tech-img" height={120} width={120} src={sqlIcon} />
            </div> 
            <div className="column is-narrow co-distance">
              <i className="fab fa-7x fa-java" />
            </div>
            <div className="column is-narrow co-distance">
              <i className="fab fa-7x fa-docker" />
            </div>
            <div className="column is-narrow co-distance">
              <Image className="tech-img" height={120} width={120} src={gitIcon} />
            </div>
          </div>
        </div>
      </section>
    )
}
