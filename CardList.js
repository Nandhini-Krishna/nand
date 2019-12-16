import React from 'react';
import Card from './Card';
import robots from './robots';


const CardList =({robots}) => {
	const CardArray = robots.map((user,i) => {
		return (
		<Card 
		key={i}
		name={robots[i].name}
		email={robots[i].email}
		id={robots[i].id}/>
		);
	})
		
	return (
	<div>
	
		{CardArray}
</div>
          );
}

export default CardList;