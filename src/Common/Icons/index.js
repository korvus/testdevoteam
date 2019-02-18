import React from 'react';

import CartSVG from './Cart/';
import HeartSVG from './Heart/';
import ProfileSVG from './Profile/';
import ZoomSVG from './Zoom/';

export const Cart = ({width, color, className}) => (
	<div className={className}>
		<CartSVG width={width} color={color} />
	</div>
);

export const Heart = ({width, color, className}) => (
	<div className={className}>
		<HeartSVG width={width} color={color} />
	</div>
);

export const Profile = ({width, color, className}) => (
	<div className={className}>
		<ProfileSVG width={width} color={color} />
	</div>
);

export const Zoom = ({width, color, className}) => (
	<div className={className}>
		<ZoomSVG width={width} color={color} />
	</div>
);