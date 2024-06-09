import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';

import logo from '../../images/logo.svg'
import backed from '../../images/backet.svg'

const Header = () => {
	let [openMenu, setOpenMenu] = useState(false);

	const menuToggle = (action) => {
		setOpenMenu(action)
	}

	return (
		<>
			<header className="header">
				<div className="container header__container">
					<div className="header-logo">
						<NavLink to={"/"} className="nav__logo">
							<img src={logo} alt={"logo"} className='nav__logo-img'/>
						</NavLink>
					</div>

					<span className='header__line'></span>

					<div className={'nav__container'}>
						{
							!openMenu
								? (
									<div className='nav__menu'>
										<button className={'header__burger'}
												onClick={() => menuToggle(true)}>
											<svg width="22" height="18" viewBox="0 0 22 18" fill="none"
												 xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd"
													  d="M0.6875 16.5625C0.6875 16.3139 0.786272 16.0754 0.962088 15.8996C1.1379 15.7238 1.37636 15.625 1.625 15.625H20.375C20.6236 15.625 20.8621 15.7238 21.0379 15.8996C21.2137 16.0754 21.3125 16.3139 21.3125 16.5625C21.3125 16.8111 21.2137 17.0496 21.0379 17.2254C20.8621 17.4012 20.6236 17.5 20.375 17.5H1.625C1.37636 17.5 1.1379 17.4012 0.962088 17.2254C0.786272 17.0496 0.6875 16.8111 0.6875 16.5625ZM0.6875 9.0625C0.6875 8.81386 0.786272 8.5754 0.962088 8.39959C1.1379 8.22377 1.37636 8.125 1.625 8.125H20.375C20.6236 8.125 20.8621 8.22377 21.0379 8.39959C21.2137 8.5754 21.3125 8.81386 21.3125 9.0625C21.3125 9.31114 21.2137 9.5496 21.0379 9.72541C20.8621 9.90123 20.6236 10 20.375 10H1.625C1.37636 10 1.1379 9.90123 0.962088 9.72541C0.786272 9.5496 0.6875 9.31114 0.6875 9.0625ZM0.6875 1.5625C0.6875 1.31386 0.786272 1.0754 0.962088 0.899588C1.1379 0.723772 1.37636 0.625 1.625 0.625H20.375C20.6236 0.625 20.8621 0.723772 21.0379 0.899588C21.2137 1.0754 21.3125 1.31386 21.3125 1.5625C21.3125 1.81114 21.2137 2.0496 21.0379 2.22541C20.8621 2.40123 20.6236 2.5 20.375 2.5H1.625C1.37636 2.5 1.1379 2.40123 0.962088 2.22541C0.786272 2.0496 0.6875 1.81114 0.6875 1.5625Z"
													  fill="#4C5866"/>
											</svg>
										</button>
										<NavLink to={'/'} className={'nav__menu-backed'}>
											<img src={backed} alt={'Backed'}/>
										</NavLink>
									</div>
								)
								: (
									<div className='menu__footer'>
										<button className={'header__burger burger-btn'} onClick={() => menuToggle(false)}>
											<svg width="30" height="30" viewBox="0 0 30 30" fill="none"
												 xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd"
													  d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z"
													  fill="#2C2D35"/>
												<path fillRule="evenodd" clipRule="evenodd"
													  d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z"
													  fill="#2C2D35"/>
											</svg>
										</button>
										<ul className='menu-list'>
											<li>
												<NavLink to={'/'} className={'nav-list__item'}>Репродукции</NavLink>
											</li>
											<li>
												<NavLink to={'/'} className={'nav-list__item'}>Новинки</NavLink>
											</li>
											<li>
												<NavLink to={'/'} className={'nav-list__item'}>О нас</NavLink>
											</li>
										</ul>
									</div>
								)
						}

						<ul className={'nav-list'}>
							<li>
								<NavLink to={'/'} className={'nav-list__item'}>Репродукции</NavLink>
							</li>
							<li>
								<NavLink to={'/'} className={'nav-list__item'}>Новинки</NavLink>
							</li>
							<li>
								<NavLink to={'/'} className={'nav-list__item'}>О нас</NavLink>
							</li>
						</ul>
						<NavLink to={'/'} className={'nav-list__item-backed'}>
							<img src={backed} alt={'Backed'}/>
						</NavLink>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
