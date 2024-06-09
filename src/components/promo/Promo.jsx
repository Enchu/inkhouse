import React from 'react';
import './promo.scss'

import star from '../../images/promostar.png';

const Promo = () => {
	return (
		<>
			<section className="promo">
				<div className="container">
					<div className={'promo__container'}>
						<div className={'promo__top'}>
							<img className={'promo__top-img'} src={star} alt={'star'}/>
							<h2 className={'promo__top-title'}>Новая коллекция французских авторов</h2>
						</div>
						<div className={'promo__content'}>
							<p className={'promo__text'}>
								Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
								которые, в свою очередь, должны быть заблокированы в рамках своих собственных
								рациональных ограничений.
							</p>
							<p className={'promo__text'}>
								Принимая во внимание показатели успешности, граница обучения кадров предопределяет
								высокую востребованность направлений прогрессивного развития.
							</p>
						</div>
						<div className='promo__container-btn'>
							<button className={'promo__btn'}>Ознакомиться</button>
						</div>

					</div>
				</div>
			</section>
		</>
	);
};

export default Promo;
