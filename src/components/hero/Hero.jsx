import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark-ua.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import myVideo from "../../assets/video/ready_first.mp4"
import myVideoTmb from "../../assets/video/me_vid_ready.jpg"

import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const videoSrc = {
  type: "video",
  sources: [
    {
      src: myVideo,
      type: 'video/mp4',
      size: 1080,
    }
  ],
  
  poster: myVideoTmb
};

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Vladimir Vostrikov",
  heroDesignation: "Los Angeles based Coding Marketer",
  heroDescriptions: `I'm an full stack developer and marketing specialist focused on
  building effective teams, I am passionate about
  architecture of excellent software and making marketing strategies that help business growing rapidly.`,
  heroBtn: "Check my Video",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div style={{paddingTop: 30, paddingBottom: 0}} className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                {/* <span className="title-bg">Introduction</span> */}
              </div>
              {/* End title */}
              <div style={{padding: "5%"}}>
              <Plyr source={videoSrc}  />
              </div>
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
