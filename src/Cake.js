import React, { useState } from 'react';

export const Cake = () => {

	const [eyeOpen, setEyeOpen] = useState('');

	const onMouseOver = () => {
		setEyeOpen('eye-open');
	}

	const onMouseOut = () => {
		setEyeOpen('');
	}

	return (
		<div className='cake'>
			<div className="plate"></div>
			<div className="cream" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
				<div className="eye-container">
					<div className="eye">
						<div className={eyeOpen}></div>
					</div>
					<div className="eye">
						<div className={eyeOpen}></div>
					</div>
				</div>
				<div className="nose-container">
					<div>
						<div className="nose-left-container">
							<div className="amh-left-container">
								<div className="amhway-left"></div>
								<div className="amhway-left"></div>
								<div className="amhway-left"></div>
							</div>
							<div className="nose-left"></div>
						</div>
						<div className="nose"></div>
						<div className="nose-right-container">
							<div className="nose-right"></div>
							<div className="amh-right-container">
								<div className="amhway-right"></div>
								<div className="amhway-right"></div>
								<div className="amhway-right"></div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="ear">
				<div className="ear-left" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
					<div className="sub-left"></div>
				</div>
				<div className="ear-right" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
					<div className="sub-right"></div>
				</div>
			</div>
		</div>
	)
}