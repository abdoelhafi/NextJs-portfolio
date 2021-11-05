import React,{Fragment} from 'react'
import profileImage from '../../public/img/profile.png';
import Image from 'next/dist/client/image'

export const AboutMe = () => {
    return (
        <Fragment>
            <section id="about" className="section section-1">
          <div className="container has-text-centered">
            <Image className="avatar" height={200} width={200} src={profileImage} />
          </div>
          <div className="container center"><br />
            <p className="iam_title">I&apos;m Abdessamad El Hafi</p>
            <p className="intro">
              Software engineering student at ENSIAS engineering school Rabat, Morocco. I enjoy programming, meditation &amp; making things simpler.
            </p>
          </div>
        </section>
        </Fragment>
    )
}
