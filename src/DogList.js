import React from 'react';
import { Link } from 'react-router-dom';
import { dogs } from './App';

function DogList() {
	return (
		<div>
			<h1>Dogs for you!</h1>
			<div>
				{dogs.map((d) => (
					<div key={d.name}>
						<img src={d.src} alt={d.name} />
						<h3>
							<Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
						</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default DogList;
