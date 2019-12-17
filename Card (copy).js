import React from 'react';

const Card = (props) => {
	const {name ,email ,id} = props;
	return (
	<div className='tc bg-washed-red dib br3 pa2 ma2 grow bw2 shadow-5 sample'>
	<img alt='robo' src={`https://robohash.org/${id}?20*20`}/>
	<div>
	<h2>{name}</h2>
	<p>{email}</p>
	</div>
	</div>
	);
}

export default Card;
