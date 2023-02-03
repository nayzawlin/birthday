import './App.css';
import React, { useState, Fragment } from 'react';
import { Cake } from './Cake';
import { Balloon } from './Balloon';
import { Menu } from './Menu';
import Sound from 'react-sound';
import song0 from './happy_birthday_to_you.mp3';
import song1 from './happy_birthday_honey.mp3';
import song2 from './birthday_bunnyphyoe.mp3';
import song3 from './hbd_song.mp3';

function App() {
	const [enter, setEnter] = useState(false);
	const [currentSong, setCurrentSong] = useState(0);
	const [songs] = useState([
		song0, song1, song2, song3	
	])

	const onEnter = () => {
		setEnter(true);
		audio.play()
	}


	const onFinishedPlaying = () => {
		let temp = currentSong + 1;

		if(songs[temp]){
			setCurrentSong(temp);
		}else{
			setCurrentSong(0);
		}
	}

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 	  if (state.img === 4) {
	// 		setState((prev) => ({
	// 		  ...prev,
	// 		  img: 0
	// 		}));
	// 	  } else {
	// 		setState((prev) => ({
	// 		  ...prev,
	// 		  img: state.img + 1
	// 		}));
	// 	  }
	// 	}, 3000)
	// 	return () => clearInterval(interval);
	//   }, [state.img]);

	let audio = new Audio("https://drive.google.com/file/d/172S0gU4mAJIAWN_t-XrfcIByFPDEPbNN/view?usp=share_link")

	return (
		<div className={enter ? 'App bg' : 'App'}>

			{
				!enter &&
				<div className='enter'>
					<Cake />
					<button onClick={onEnter}>Enter</button>
				</div>
			}

			{
				enter && 
				<Fragment>
				
					{/* <Sound
						url={'https://drive.google.com/file/d/172S0gU4mAJIAWN_t-XrfcIByFPDEPbNN/view?usp=share_link'}
						playStatus={Sound.status.PLAYING}
						autoLoad={true}
						// loop={true}
						onFinishedPlaying={onFinishedPlaying}
					/> */}
					
					<Balloon />
					<Menu />
				</Fragment>
			}
			

			{/* <div className="title">
				<h1>Hello World</h1>
			</div> */}
	
			

		</div>
	);
}

export default App;
