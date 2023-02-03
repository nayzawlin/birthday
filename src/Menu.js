import React, { useEffect, useState } from 'react';

export const Menu = () => {

	const [menuItem, setMenuItem] = useState('');
	const [bgColor, setBGColor] = useState([]);

	useEffect(() => {
		let count = 5;
		let tempColor = [];

		// setInterval(() => {
			// tempColor = [];

			for (let index = 0; index < count; index++) {
				let color = `#${Math.random().toString(16).substr(-6) }`;
				tempColor.push(color);
			}

			setBGColor(tempColor);
		// }, 5500);

	}, [])

	return (
		<div className="menu-card">
			{
				bgColor.map((i, index) => {
					return(
						<div style={{ backgroundColor: i }}  className='menu' key={index}>
							<span className="text">I am Power Ranger</span>
						</div>
					)
				})
			}
		</div>
	)
}