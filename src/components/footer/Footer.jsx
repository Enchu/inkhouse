import React from 'react';
import {NavLink} from "react-router-dom";
import './footer.scss'

import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";


const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className="container">
					<div className="footer__container">

						<div className='footer__left'>
							<NavLink to={"/"} className="nav__logo">
								<img src={logo} alt={"logo"}/>
							</NavLink>
							<div className={'footer__menu'}>
								<a className='footer__tel' href={'tel:+7 (999)543-54-54'}>+7 (999) 543-54-54</a>
								<p className='footer__workshop'>Мастерская</p>
							</div>
						</div>

						<div className="footer__right">
							<div className='footer__link'>
								<div>
									<ul>
										<li className={'footer__link-title'}>Репродукции</li>
										<li className={'footer__link-subtitle'}>Франция</li>
										<li className={'footer__link-subtitle'}>Германия</li>
										<li className={'footer__link-subtitle'}>Англия</li>
									</ul>
								</div>

								<div>
									<ul>
										<li className={'footer__link-title'}>Новинки</li>
										<li className={'footer__link-subtitle'}>2021</li>
										<li className={'footer__link-subtitle'}>2022</li>
									</ul>
								</div>

								<div className="footer__about">
									<ul>
										<li className={'footer__link-title'}>О нас</li>
										<li className={'footer__link-subtitle'}>Художники</li>
										<li className={'footer__link-subtitle'}>Менеджеры</li>
									</ul>
								</div>
							</div>
							<span className="footer__line"></span>
							<div className={'footer__media'}>
								<ul className={'footer__menu-link'}>
									<li>
										<NavLink to={'/'}>
											<img src={facebook} alt={"logo"}/>
										</NavLink>
									</li>
									<li>
										<NavLink to={'/'}>
											<img src={instagram} alt={"logo"}/>
										</NavLink>
									</li>
									<li>
										<NavLink to={'/'}>
											<img src={youtube} alt={"logo"}/>
										</NavLink>
									</li>
								</ul>

								<p className={'footer__copyright'}>
									Ink. House ®
									<span>
										All rights reserved
									</span>
								</p>
							</div>
						</div>

					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
