import React, { useEffect, useState } from 'react';

export const Balloon = () => {

	const [bgColor, setBGColor] = useState([]);
	const [balloon, setBalloon] = useState([
		// {
		// 	text: '',
		// 	styles: {
		// 		height: 100,
		// 		width: 93,
		// 		backgroundColor: 'yellow',
		// 		left: '20%',
		// 		bottom: '20%',
		// 		position: 'absolute',
		// 		borderRadius: '50%',
		// 		boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
		// 		animation: 'move 5s ease-in infinite',
		// 		display: 'flex',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 	}
		// }
	]);

	let ballStyle = {
		height: 100,
		width: 93,
		backgroundColor: 'yellow',
		left: '20%',
		position: 'absolute',
		borderRadius: '50%',
		boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
		animation: 'move 5s ease-in infinite',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}


	// useEffect(() => {
	// 	let word = 'happybirthdayspm';
	// 	let arr = word.split('') || [];
	// 	let temp = [];
	// 	let min = 0, mh = 100, mw = 100;

	// 	arr.forEach((word, index) => {
	// 		let height = Math.random(min, mh) * 100;
	// 		let width = Math.random(min, mw) * 100;
	// 		let bgColor = Math.random().toString(16).substr(-6);

	// 		temp.push(
	// 			{
	// 				text: word,
	// 				styles: {
	// 					...ballStyle,
	// 					height: `${height}px`,
	// 					width: `93px`,
	// 					backgroundColor: `#${bgColor}`,
	// 					left: `${20+index*5}%`
	// 				}
	// 			}
	// 		)
	// 	});

	// 	console.log('temp', temp);
	// 	setBalloon(temp);
	// }, [])

	useEffect(() => {
		let word = 'happybirthdayspm';
		let arr = word.split('') || [];
		let tempColor = [...bgColor];
		// let word = '‌မွေး နေ့ မှာ ပျော် ရွှင် ပါ စေ မီ မီ လေး'
		// let arr = word.split(' ') || [];
		arr.forEach((element, index) => {
			let color = Math.random().toString(16).substr(-6);
			tempColor[index] = color;
		});

		setBGColor(tempColor);
		setBalloon(arr);

	}, [])
	
	return (
		<div className="balloon-card">
			{
				balloon.map((ball, index) => {
					return(
						<div style={{ backgroundColor: `#${bgColor[index]}` }} className='balloon' key={index}>
							<div className="string"></div>
							<span>{ball}</span>
						</div>
					)
				})
			}
		</div>
	)
}