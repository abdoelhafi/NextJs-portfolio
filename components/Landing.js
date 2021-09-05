import React from 'react'

export default function Landing() {
    return (
        <div>
        <title>Abdessamad EL HAFI</title>
        {/* css files */}
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Navbar */}
        <nav className="nav container void-background">
          {/* This "nav-menu" is hidden on mobile */}
          {/* Add the modifier "is-active" to display it on mobile */}
          <div className="nav-left">
            <a href="http://medium.com/" className="nav-item">
              <span className="icon">
                <i className="fab fa-medium-m" />
              </span>
            </a>
            <a href="http://github.com" className="nav-item">
              <span className="icon">
                <i className="fab fa-github" />
              </span>
            </a>
            <a href="https://twitter.com/" className="nav-item">
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
            </a>				
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item" href="#about">About</a>
            <a className="nav-item" href="#projects">Projects</a>
            <a className="nav-item" href="#social">Social</a>
          </div>
          {/* This "nav-toggle" hamburger menu is only visible on mobile */}
          {/* You need JavaScript to toggle the "is-active" class on "nav-menu" */}
          <span className="nav-toggle">
            <span />
            <span />
            <span />
          </span>
        </nav>
        {/* About Me */}
        <section id="about" className="section section-1">
          <div className="container has-text-centered">
            <img className="avatar" src="/img/profile.png" />
          </div>
          <div className="container center"><br />
            <p className="iam_title">I'm Abdessamad El Hafi</p>
            <p className="intro">
              Software engineering student at ENSIAS engineering school Rabat, Morocco. I enjoy programming, meditation &amp; making things simpler.
            </p>
            {/* <button class=" button ">hire me </button>
				<button class="button ">view resume</button> */}
          </div>
        </section>
        {/* Education */}
        <section id="projects" className="section section-2">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="title">Interests</h3>
            </div>
            <div className="columns is-multiline is-desktop">
              <div className="column interest">
                <img src="/img/developer.png" className="interest-img" alt="" srcSet />
                <div className="intrest-text">Web Development</div>
              </div>
              <div className="column interest">
                <img src="/img/enterpreneur.png" className="interest-img" alt="" srcSet />
                <div className="intrest-text">Interpreneurship</div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="section section-2">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="title is-3">Some Of My Projects</h3>
            </div>
            <div className="columns is-multiline is-desktop">
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">Social média platform for students</h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                        <img className="zoom" src="/img/bridemy-mockup.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="center margin-1">
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
                        <img className="zoom" src="/img/urlMockup.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="center margin-1">
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
                        <img className="zoom" src="/img/medical-mockup.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="center margin-1">
                      <span className=" year">JAVA EE</span>
                      <span className=" year">Servlet</span>
                      <span className=" year">Mysql</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Managing appointments ,Consultations, Medical records...
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* Project 1 */}
              <div className="column is-half">
                <div className="box project-text">
                  <h5 className="title is-5">Curios - find every one's Data in one query. </h5>
                  <article>
                    <div>
                      <figure className="image  project-figure">
                        <img className="zoom" src="/img/curios-mockup.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="center margin-1">
                      <span className=" year">Next.js</span>
                      <span className=" year">SSR</span>
                      <span className=" year">People Data Api</span>
                    </div>
                    <div className="center margin-2">			
                      <p>
                        Provide LinkedIn username of someone and get his email, phone, experiences ...
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* part 5 */}
        <section id="about" className="section section-5">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="title">Technologies</h3>
            </div>
            <div className="columns is-multiline is-desktop is-centered">
              <div className="column is-narrow co-distance">
                <i className="fab fa-7x fa-node" />
                {/* <img src="/img/nodejs.png" class="tech-img" alt="" srcset=""> */}
              </div>
              <div className="column is-narrow co-distance">
                <embed src="/img/express-js.svg" className="tech-img" />
              </div> 
              <div className="column is-narrow co-distance">
                <i className="fab fa-7x fa-react" />
              </div>
              <div className="column is-narrow co-distance">
                <embed src="/img/next.svg" className="tech-img" />
              </div>
              <div className="column is-narrow co-distance">
                <embed src="/img/mongodb.svg" className="tech-img" />
              </div>
              <div className="column is-narrow co-distance">
                <embed src="/img/sql.svg" className="tech-img" />
              </div> 
              <div className="column is-narrow co-distance">
                <i className="fab fa-7x fa-java" />
              </div>
              <div className="column is-narrow co-distance">
                <i className="fab fa-7x fa-docker" />
              </div>
              <div className="column is-narrow co-distance">
                {/* <i class="fab fa-4x fa-git"></i> */}
                <embed src="/img/git.svg" className="tech-img" />
              </div>
            </div>
          </div>
        </section>
        {/* Social */}
        <section id="social" className="section section-3">
          <div className="container ">
            <div className="has-text-centered">					
              <h3 className="title is-3">Let's Socialize</h3>
            </div>
            <div className="columns is-multiline is-desktop is-centered">
              <div className="column is-narrow co-distance">
                <a href="https://twitter.com/" className>
                  <span className>
                    <i className="fab fa-3x fa-twitter" />
                  </span>
                </a>							
              </div> 
              <div className="column is-narrow co-distance">
                <a href="https://twitter.com/" className>
                  <span className>
                    <i className="fab fa-3x fa-linkedin-in" />
                  </span>
                </a>							
              </div> 
              <div className="column is-narrow co-distance">
                <a href="https://twitter.com/" className>
                  <span className>
                    <i className="fas fa-3x fa-at" />
                  </span>
                </a>							
              </div> 
            </div>
          </div>
        </section>	
        {/* Footer */}
        <section className="section-4 has-text-centered container">
          <span>made with ❤️️ by </span>
          <a href="https://abdoelhafi.github.io/">Abdessamad El Hafi</a>
        </section>
        {/* Scripts  */}
      </div>
    )
}
