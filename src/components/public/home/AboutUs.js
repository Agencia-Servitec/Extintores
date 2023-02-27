import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
// import { useDevice } from "../../../hooks";

export const AboutUs = () => {
  // const { isMobile } = useDevice();
  return (
    <Container id="about-us">
      {/*<div className="wrapper-logos-mobile">*/}
      {/*  <AntCarousel*/}
      {/*    autoplay*/}
      {/*    autoplaySpeed={3 * 1000}*/}
      {/*    arrows={!isMobile}*/}
      {/*    prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}*/}
      {/*    nextArrow={<FontAwesomeIcon icon={faChevronRight} />}*/}
      {/*  >*/}
      {/*    {logoLists.map((logoList, index) => (*/}
      {/*      <div className="wrapper-logo-mobile" key={index}>*/}
      {/*        <img src={logoList.image} alt={logoList.name} />*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </AntCarousel>*/}
      {/*</div>*/}
      <div className="wrapper-text">
        <div className="content-text">
          <h2 className="title">¿QUIENES SOMOS?</h2>
          <p className="content">
            Somos una empresa peruana, dedicada a la venta, mantenimiento y
            recarga de extintores nacionales e importados y equipos contra
            incendio “EXTINTORES SOINEX FU”, para la comercialización por toda
            la nación; integrada por profesionales, con la suficiente
            experiencia para satisfacer las necesidades del mercado, que
            funciona con criterios de gestión empresarial en cuanto a calidad y
            la logística necesaria para la ejecución de grandes obras y
            servicios, con personal dispuesto a trabajar eficientemente con
            soluciones confiables, económicas y eficientes. Por otra parte, la
            calidad es para EXTINTORES SOINEX FU un valor esencial, y filosofía
            de trabajo de su personal, para cumplirlo cuenta también con las
            maquinarias más eficientes del ramo.
          </p>
        </div>
        {/*<div style={{ paddingBottom: "3rem" }}>*/}
        {/*  <VideoBg autoPlay loop muted src={videoAllinOne} type="Video/mp4" />*/}
        {/*</div>*/}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: none repeat scroll 0 0 #1a1a1a;
  text-align: center;
  .wrapper-logos-mobile {
    padding: 0.5rem 2rem;
    .wrapper-logo-mobile {
      max-width: 13em;
      width: 100%;
      padding: 2em 0 3.5em 0;

      img {
        width: 100%;
      }
    }
  }
  .wrapper-text {
    background: none repeat scroll 0 0 #1a1a1a;
    .content-text {
      text-align: center;
      width: 100%;
      padding: 0 2em 1.5em 2em;
      ${mediaQuery.minTablet} {
        padding: 2em 5rem 2rem 5rem;
      }
      .title {
        letter-spacing: 0.3px;
        font-family: "Intro Demo", sans-serif;
        width: 100%;
      }
      .content {
        font-size: 1.2rem;
        line-height: 1.3em;
        //margin-bottom: 2em;
        margin-top: 1em;
      }
    }
  }
`;

// const VideoBg = styled.video`
//   width: 60%;
//   height: 60%;
//   background: #232a34;
// `;
