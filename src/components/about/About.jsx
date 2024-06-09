import React from 'react';
import './about.scss'

import about from '../../images/about.png'
import elipse1 from '../../images/Ellipse1.jpg'
import elipse2 from '../../images/Ellipse2.jpg'
import elipse3 from '../../images/Ellipse3.jpg'

const About = () => {
	return (
		<>
			<section className="about">
				<div className="container">
					<div className={'about__container'}>
						<img src={about} alt="" className={'about__img'}/>
						<div className={'about__content'}>
							<h2 className={'about__content-title'}>Наша команда</h2>
							<p className={'about__content-subtitle'}>Значимость этих проблем настолько очевидна, что
								базовый вектор развития позволяет оценить
								значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены
								отталкиваться от того, что консультация с широким активом.</p>
							<div className={'about__content-team'}>
								<img src={elipse1} alt=""/>
								<img src={elipse2} alt=""/>
								<img src={elipse3} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
