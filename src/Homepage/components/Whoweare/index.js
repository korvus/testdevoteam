import React from "react";
import Button from "../../../Common/Button";

/* Picture */
import illustration from "./../../../assets/pics/wwa.png";

/* Style */
import style from "./Whoweare.module.css";

const Woweare = props => {
	return (
		<div className={`flex ${style.wrapper}`}>
			<div className={`flex ${style.column}`}>
				<h2 className="ttu b">Who we are</h2>
				<p className={`tj ${style.p}`}>
					We are one of the best bicycle companies in the world. We provide the
					best quality products of bicycle and no one can be compared by our
					service because we are the best and we will be. We deliver all the
					products with brand new quality and services. Any product is available
					in different colors and they are very good looking. We take very less
					delivery charge in comparison with other companies.
				</p>
				<div>
					<Button style={style.btn} href="/more-info">
						More info
					</Button>
				</div>
			</div>
			<div className={style.column}>
				<img className={style.pic} alt="bicycle stuffs" src={illustration} />
			</div>
		</div>
	);
};

export default Woweare;
