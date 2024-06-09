import React, {useMemo, useState} from 'react';
import './catalog.scss'
import {catalog} from "../../data/data";

const Catalog = () => {
	const [country, setCountry] = useState('France')

	const data = catalog.filter(a => a.tag === country).map((images) => (
		<li className='catalog__card-list' key={images.id}>
			<article className='product'>
				<img className='catalog__card-art__img' src={images.src} alt={images.src}/>
				<div className='product__content'>
					<span className="catalog__card-art__author">{images.author}</span>
					<h2 className="catalog__card-art__title">{images.title}</h2>
					<span className="catalog__card-art__subtitle">{images.description}</span>
					<div className="catalog__card-art__price">
						{images.price.toLocaleString('ru-RU')} руб
					</div>
					<button className='product__btn btn'>В корзину</button>
				</div>
			</article>
		</li>
	))

	const updateCatalog = (country) => {
		setCountry(`${country}`)
	}

	const btnNormal = 'catalog__top-btn'
	const btnActive = 'catalog__top-btn catalog__btn-active'

	return (
		<>
			<section className='catalog'>
				<div className="container">
					<div className="catalog__top">
						<strong className="catalog__title">Репродукции</strong>
						<div className="catalog__tab">
							<button className={country === 'France' ? btnActive : btnNormal} onClick={() => updateCatalog('France')}>Франция</button>
							<button className={country === 'Germany' ? btnActive : btnNormal} onClick={() => updateCatalog('Germany')}>Германия</button>
							<button className={country === 'England' ? btnActive : btnNormal} onClick={() => updateCatalog('England')}>Англия</button>
						</div>
					</div>

					<ul className="list-reset grid catalog__card">
						{data}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Catalog;
