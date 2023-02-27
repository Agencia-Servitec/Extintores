import React from "react";
import styled from "styled-components";
import { ExtintoresBackground } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const InitialComponent = ({ onClickVisibleFormContact }) => {
  return (
    <Container id="inicio" bgImage={ExtintoresBackground}>
      <div className="content-items">
        <div className="content">
          <div className="heading">
            <h2 className="description">
              VENTA DE EXTINTORES, MANTENIMIENTO Y RECARGAS
            </h2>
            <h3>MANTENIMIENTO Y REPARACIÓN</h3>
            <h3>¡Tenemos la solución!</h3>
            <div
              styles={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
              }}
              onClick={() => {
                onClickVisibleFormContact(true);
              }}
            >
              <Button text="CONTACTANOS" type="primary" />
            </div>
          </div>
        </div>
        {/*<div className="content-img">*/}
        {/*  <div className="wrapper-form">*/}
        {/*    <FormContact />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: url(${({ bgImage }) => bgImage}) no-repeat scroll 0 0 / 100% 100%
    rgba(0, 0, 0, 0);
  background-position: center center;
  background-size: cover;

  ${mediaQuery.minTablet} {
    padding: 4rem 0;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    justify-items: center;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr;
      padding: 6rem 4rem 4rem 4rem;
    }

    .content {
      // align-self: center;
      padding-left: 0;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr;
        //padding-left: 2rem;
      }

      .heading {
        text-align: center;
        ${mediaQuery.maxMobile} {
          padding: 2em 1rem 2rem 1rem;
        }
        .title {
          color: ${({ theme }) => theme.colors.font1};
          font-weight: 800;
          font-family: "Intro Demo", sans-serif;
          font-size: 1.2rem;
          padding-top: 1.2rem;
          ${mediaQuery.minTablet} {
            grid-template-columns: 1fr;
            padding-bottom: 1.2rem;
          }
        }

        .description {
          color: ${({ theme }) => theme.colors.font1};
          max-width: 70rem;
          font-weight: 500;
          font-size: 4rem;
          font-family: "Intro Demo", sans-serif;
          line-height: 4.5rem;
          ${mediaQuery.minTablet} {
            font-size: 5.4rem;
          }
          ${mediaQuery.maxMobile} {
            font-size: 2.7rem;
            line-height: 3.5rem;
          }
        }
        h3 {
          font-size: 1.5em;
          ${mediaQuery.minTablet} {
            font-size: 1.7em;
          }
        }
      }

      .list-about {
        margin: 1rem 1.5rem;

        ul {
          li {
            width: auto;
            background: transparent;
            color: ${({ theme }) => theme.colors.font3};
            list-style: none;
            margin-bottom: 0.5rem;

            svg {
              margin-right: 0.7rem;
            }
          }
        }
      }
    }
    .content-img {
      margin-top: 1rem;
      text-align: center;
      .wrapper-form {
        width: 100%;
        max-width: 30em;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
        padding: 1.5rem 2rem;
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
`;
