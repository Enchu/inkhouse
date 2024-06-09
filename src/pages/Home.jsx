import React from 'react';
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Catalog from "../components/catalog/Catalog";
import Promo from "../components/promo/Promo";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
	return (
		<>
			<Header/>
			<main>
				<Hero/>
				<Catalog/>
				<Promo/>
				<About/>
			</main>
			<Footer/>
		</>
	);
};

export default Home;
