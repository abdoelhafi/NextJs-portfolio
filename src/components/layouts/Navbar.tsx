import React,{useRef, useEffect, Fragment} from 'react'

export const Navbar = () => {
    const hamburgerRef = useRef();
    const hamburgerElt : HTMLElement =  hamburgerRef.current;
    const toggleCollapse = ()=>{
        console.log(hamburgerElt);
    }
    return (
        <Fragment>
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
                <a className="nav-item" href="#social">Blog</a>

            </div>
            {/* This "nav-toggle" hamburger menu is only visible on mobile */}
            {/* You need JavaScript to toggle the "is-active" class on "nav-menu" */}
            <span className="nav-toggle"  onClick ={()=> toggleCollapse()} >
                <span  />
                <span />
                <span />
            </span>
            <div ref={hamburgerRef} className="nav-right nav-menu" style={{display:'none'}}>
                <a className="nav-item" href="#about">About</a>
                <a className="nav-item" href="#projects">Projects</a>
                <a className="nav-item" href="#social">Social</a>
                <a className="nav-item" href="#social">Blog</a>

            </div>
            </nav>
        </Fragment>
    )
}
