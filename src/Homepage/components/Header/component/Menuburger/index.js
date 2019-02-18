import React from "react";
import style from "./Menuburger.module.css";

const Menuburger = props => {
	return (
		<ul className={`dn ${style.wrapper}`}>
			<li>
				<a href="/">Lien 1</a>
			</li>
			<li>
				<a href="/">Lien 2</a>
			</li>
			<li>
				<a href="/">Lien 3</a>
			</li>
		</ul>
	);
};

export default Menuburger;
