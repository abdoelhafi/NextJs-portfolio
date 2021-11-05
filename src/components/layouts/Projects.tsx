import React from 'react'
import bridemyMockUp from '../../public/img/bridemy-mockup.png'
import urlMockUp from '../../public/img/urlMockup.png'
import medicalMockUp from '../../public/img/medical-mockup.png'
import curiousMockUp from '../../public/img/curios-mockup.png'
import Image from 'next/dist/client/image'
import { useRouter } from 'next/router'
export const Projects = () => {
  const router = useRouter();
  const bridemyRepo = "https://github.com/abdoelhafi/bridemy";
  const urlManagerRepo = "https://github.com/abdoelhafi/URLShortenerApp";
  const medicalOfficeRepo = "https://github.com/abdorah/Cabinet_Medical";
  const curiousRepo = "https://github.com/abdoelhafi/curious";
    return (
        <section id="projects" className="section section-2">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="title is-3"><strong>Some Of My Projects</strong></h3>
            </div>
            <div className="columns is-multiline is-desktop">
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">Social media platform for students</h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                      <Image className="zoom" height={300} width={400} src={bridemyMockUp} />
                      </figure>
                    </div>
                    <div className="center margin-1 span-wrapper">
                      <span className=" year">React</span>
                      <span className=" year">Node.js</span>
                      <span className=" year">Mongodb</span>
                      <span className=" year">REST</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Authenticate, Create/Modify Profile, Create Posts, Comment/Like, Fetch profiles.
                      </p>
                    </div>
                    <div className={"margin-1 btn-wrapper"}>
                      <div className={"btn-group mleft-auto mright-auto"}>
                        <button onClick={()=>window.open (bridemyRepo, '_ blank')}  className=" arrow-button">preview<span className="arrow"></span></button>

                        <button onClick={()=>window.open (bridemyRepo, '_ blank')}  className="arrow-button">source code<span className="arrow"></span></button>
                      </div>
                      </div>
                    
                  </article>
                </div>
              </div>
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">URL Manager</h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                      <Image className="zoom" height={300} width={400} src={urlMockUp} />
                      </figure>
                    </div>
                    <div className="center margin-1 span-wrapper">
                      <span className=" year">Next.js</span>
                      <span className=" year">SSR</span>
                      <span className=" year">Node.js</span>
                      <span className=" year">Mongodb</span>
                      <span className=" year">REST</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Shrink a URL ,Authenticate, Save and Manage URL.
                      </p>
                    </div>
                    <div className={"margin-1 btn-wrapper"}>
                    <div className={"btn-group mleft-auto mright-auto"}>
                        <button onClick={()=>window.open (urlManagerRepo, '_ blank')}  className=" arrow-button">preview<span className="arrow"></span></button>

                        <button onClick={()=>window.open (urlManagerRepo, '_ blank')}  className="arrow-button">source code<span className="arrow"></span></button>
                      </div>
                    </div>
                   
                  </article>
                </div>
              </div>
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">Medical office management software</h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                      <Image className="zoom" height={300} width={400} src={medicalMockUp} />
                      </figure>
                    </div>
                    <div className="center margin-1 span-wrapper">
                      <span className=" year">JAVA EE</span>
                      <span className=" year">Servlet</span>
                      <span className=" year">Mysql</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Managing appointments ,Consultations, Medical records...
                      </p>
                    </div>
                    <div className={"margin-1 btn-wrapper"}>
                    <div className={"btn-group mleft-auto mright-auto"}>
                        <button onClick={()=>window.open (medicalOfficeRepo, '_ blank')}  className=" arrow-button">preview<span className="arrow"></span></button>

                        <button onClick={()=>window.open (medicalOfficeRepo, '_ blank')}  className="arrow-button">source code<span className="arrow"></span></button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">Curious - find every one&apos;s Data in one query. </h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                      <Image className="zoom" height={300} width={400} src={curiousMockUp} />
                      </figure>
                    </div>
                    <div className="center margin-1 span-wrapper">
                      <span className=" year">Next.js</span>
                      <span className=" year">SSR</span>
                      <span className=" year">People Data Api</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Provide LinkedIn username of someone and get his email, phone, experiences ...
                      </p>
                    </div>
                    <div className={"margin-1 btn-wrapper"}>
                    <div className={"btn-group mleft-auto mright-auto"}>
                        <button onClick={()=>window.open (curiousRepo, '_ blank')}  className=" arrow-button">preview<span className="arrow"></span></button>

                        <button onClick={()=>window.open (curiousRepo, '_ blank')}  className="arrow-button">source code<span className="arrow"></span></button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
