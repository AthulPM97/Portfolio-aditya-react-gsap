import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.css";

const PhotographerPortfolio = () => {
  const wrapperRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const karinaRef = useRef(null);
  const infoRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const bottomNavRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imgWrapperRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        karinaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      )
      .fromTo(
        infoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(
        bottomNavRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="left"></div>
      <div className="right"></div>

      <nav className="nav">
        <ul>
          <li className="logo">unsplash</li>
          <li className="menu">
            <i className="fa fa-bars"></i>
          </li>
          <li className="collection">collection</li>
          <li className="explore">explore</li>
          <li className="search">search</li>
          <li className="profile">
            <div className="img"></div>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="img-wrapper" ref={imgWrapperRef}>
          <div className="karina" ref={karinaRef}></div>
        </div>

        <div className="info" ref={infoRef}>
          <ul>
            <li>unsplash.com</li>
            <li>@aditya</li>
            <li>unsplash.com</li>
            <li>
              <i className="fa fa-share-alt"></i>
            </li>
          </ul>
        </div>

        <div className="text" ref={textRef}>
          <h1>Art By Aditya</h1>
          <p>Graphic Designer</p>
        </div>

        <div className="name" ref={nameRef}>
          Aditya N
        </div>

        <div className="bottomnav" ref={bottomNavRef}>
          <ul>
            <li>profile</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotographerPortfolio;
