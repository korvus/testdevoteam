import React, { Component } from 'react';
import Button from '../../../Common/Button';

/* style */
import style from './Slider.module.css';

/* Datas */
import slides from '../../../datas/slider.json';


class Slider extends Component {
  state = {
    active: 0,
  };

	  render() {

	  	return (<section className={`relative ${style.wrapper}`}>
				<nav>
					<a className={`absolute ${style.nav} ${style.prev}`} href="/prev">
						<span className={`absolute arrow prev`}>
							Prev
						</span>
					</a>
					<a className={`absolute ${style.nav} ${style.next}`} href="/next">
						<span className={`absolute arrow next`}>
							Next
						</span>
					</a>
				</nav>
				<ul>
					{
						slides.slides.map(
							(e, iteration) => {
		  					return (
		  						<li key={iteration} className={`${style.slide} ${iteration === this.state.active ? 'active' : 'dn'}`} style={{'backgroundImage': `url(${slides.picRootPath}${e.urlpic})`}}>
		  							<div className={`flex absolute ${style.caption}`}>
		  								<h1 className="b db ttu tc">{e.caption}</h1>
		  								<Button style={style.button} href={e.href}>
		  									{e.btntxt}
		  								</Button>
		  							</div>
		  						</li>
		  					)
		  				}
		  			)
		  		}
				</ul>
			</section>
		)
	};

}

export default Slider;