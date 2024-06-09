import React from 'react';
import './hero.scss'
import herologo from '../../images/herobg.jpg'

const Hero = () => {
	return (
		<>

			<section className="hero">
				<div className="container grid">
					<picture className="hero__logo">
						<img src={herologo} alt={'Hero logo'} className={'hero__logo-img'}/>
					</picture>
					<div className={'hero__content'}>
						<h1 className="hero__title">
							Реплики картин от&nbsp;<span className={'hero__title-gr'}>Ink. House</span>
						</h1>
						<p className="hero__subtitle">
							Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
							доступные цены.
						</p>

						<button className={'hero__button'}>Продукция</button>
					</div>

				</div>
			</section>
		</>
	);
};

export default Hero;
