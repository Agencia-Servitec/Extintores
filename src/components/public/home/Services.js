import React from 'react';
import styled from 'styled-components';
import { Services1, Services2, Services3 } from '../../../images';
import { mediaQuery } from '../../../styles/constants/mediaQuery';
import { Button } from '../ui';
import { ItemServices } from './ItemServices';

export const Services = ({ onClickVisibleFormContact, visibleFormContact }) => {
	return (
		<Container id="services">
			<div className="content-items">
				<div className="heading">
					<h2 className="title">+ OFRECEMOS</h2>
					<h5 className="subtitle">MÁS SERVICIOS</h5>
				</div>
				<div className="content-img">
					<ItemServices
						img={Services1}
						title="PRODUCTOS"
						content="Contamos con los mejores Productos desde extintores EXTINTOR E-001 hasta EXTINTOR E-005"
						onClick="productos"
					/>
					<ItemServices
						img={Services2}
						title="SERVICIOS"
						content="Nuestros servicios abarcan desde Recarga de Extintores hasta Prueba Hidrostatica"
						onClick="services"
					/>
					<ItemServices
						img={Services3}
						title="CONTACTANOS"
						content="Atencion al cliente en vivo, reserva y compra inmediata"
						onClickVisibleFormContact={onClickVisibleFormContact}
					/>
				</div>
				<div className="button">
					<div>
						<Button
							text="¡Empezar Ahora!"
							type="primary"
							onClick={() => {
								onClickVisibleFormContact(true);
							}}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: auto;
	background: ${({ theme }) => theme.colors.tertiary};
	padding: 1rem;
	${mediaQuery.minTablet} {
		padding: 1rem 5rem;
	}
	z-index: 9;

	.content-items {
		padding: 1em 0;
		${mediaQuery.minTablet} {
			padding: 3em 0;
		}
		.heading {
			margin-bottom: 60px;
			padding-top: 79px;
			position: relative;
			text-align: center;
			width: 100%;
			.title {
				left: 0;
				text-align: center;
				width: 100%;
			}
			.subtitle {
				font-family: 'Intro Demo', sans-serif;
				font-size: 26px;
				letter-spacing: 0.3px;
				text-align: center;
				width: 100%;
			}
		}
		.content-img {
			display: flex;
			justify-content: space-evenly;
			gap: 2rem;
			flex-wrap: wrap;
		}
		.button {
			padding-top: 3rem;
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
`;
