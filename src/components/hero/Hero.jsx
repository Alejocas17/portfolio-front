import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/me.jpg";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";
import heroImages from "../../data/heroImages";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

const heroContent = {
  heroImage: "/assets/img/hero/me.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Alejandro Castillo",
  heroDesignation: "full stack developer",
  heroDescriptions: `Electronics Engineer with a robust track record in machine learning and computer vision, specializing in the development of comprehensive vision systems. I've led implementation and management projects, showcasing skills in server management and software procurement. As a full stack developer, I bring experience in Python, Node.js, and various frameworks such as Next.js, Nest.js, and React. My expertise also spans JavaScript, TypeScript, and vanilla JS, alongside deployments on Azure, AWS, and GCP using Docker containers, FTP, as well as static site hosting on IIS. My focus lies in delivering results and crafting innovative solutions.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        
          
            <Swiper
              modules={[Autoplay,Navigation, Pagination]}
              autoplay={{
                delay: 4000,       // 3 seconds between slides
                disableOnInteraction: true, 
              }}
              navigation
              pagination={{ clickable: true }}
              loop={true}          // enables continuous loop
              className="col-lg-4 bg position-fixed d-none d-lg-block">
            <SwiperSlide>
              <Image src="/assets/img/hero/me.jpg" alt="Slide 1"  fill={true}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/assets/img/hero/me2.jpg" alt="Slide 2" fill={true}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/assets/img/hero/me2.jpg" alt="Slide 3" fill={true} />
            </SwiperSlide>
          </Swiper>
     
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {"I'm"} {heroContent.heroTitleName}.
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
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
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
