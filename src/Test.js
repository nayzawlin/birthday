import React, { useState  } from 'react';

export const Test = () => {
	const [state] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
	return(
		<div className="row">
			{
				state.map(i => {
					return(
						<div className="col">{i}</div>
					)
				})
			}
		
		</div>
	)
}