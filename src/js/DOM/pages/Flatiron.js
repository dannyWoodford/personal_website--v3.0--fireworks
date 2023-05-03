import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export default function Flatiron({ ...props }) {
	const menuStateCurrentName = props.menuState.currentName
	const [displayItem, setDisplayItem] = useState({
		_id: 'Final Project',
		name: 'Spotify 3D music Visualizer',
		description: '3D music visualizer that connects to your Spotify account and allows for web playback.',
		language: 'JavaScript / React / Ruby on Rails Backend / Three.js',
		github: 'https://github.com/dannyWoodford/3D-spotify-visualizer-',
		type: 'video',
		itemUrl: '/assets-by-page/flatiron/3d-spotify-visualizer-trimmed.mp4',
	})

	const itemArray = [
		{
			_id: 'Final Project',
			name: 'Spotify 3D music Visualizer',
			description: '3D music visualizer that connects to your Spotify account and allows for web playback.',
			language: 'JavaScript / React / Ruby on Rails Backend / Three.js',
			github: 'https://github.com/dannyWoodford/3D-spotify-visualizer-',
			type: 'video',
			itemUrl: '/assets-by-page/flatiron/3d-spotify-visualizer-trimmed.mp4',
		},
		{
			_id: 'Mod 4 Project',
			name: 'Ziehbare Stimme Leinwand',
			description: 'This Todo list app, apart from having full CRUD functionality, is designed specifically to frustrate the user.',
			language: 'JavaScript / React / Ruby on Rails Backend / Three.js',
			github: 'https://github.com/jwsharpe/ZiehbareStimmeLeinwand',
			type: 'video',
			itemUrl: '/assets-by-page/flatiron/ZSL-demo.mp4',
		},
		{
			_id: 'Mod 3 Project',
			name: 'Enter the Labyrinth',
			description: 'Complete the maze before the fire catches you.',
			language: 'JavaScript / Ruby on Rails Backend / Canvas',
			github: 'https://github.com/TenNga/Maze-Game-Front-End',
			demo: 'https://pure-reaches-70099.herokuapp.com/',
			type: 'video',
			itemUrl: '/assets-by-page/flatiron/labryinth-demo.mp4',
		},
		{
			_id: 'Mod 2 Project',
			name: 'NOTFLIX',
			description: 'Netflix inspired app is a library of TV shows and movies found on youtube with a smart clean look.',
			language: 'Ruby on Rails',
			github: 'https://github.com/ntel-91/mod2-project',
			type: 'video',
			itemUrl: '/assets-by-page/flatiron/notflix-demo.mp4',
		},
		{
			_id: 'Flatiron Cross-Discipline Collaboration Event',
			name: 'Flatiron Cross-Discipline Collaboration Event',
			description:
				'While at Flatiron I started and lead the first cross-discipline collaboration event bringing students from developer, data science, and UX/UI tracks together to preform mock projects. Through these projects the students learned what each others role does and how they would interact with one another. Of the 60 odd students involved several groups, as well as my own, have continued to bring there mock projects to life post graduation.',
			type: 'image',
			itemUrl: '/assets-by-page/flatiron/cross-colab.jpg',
		},
	]

	const displayItems = itemArray.map(item => (
		<div className='item' key={item._id} onClick={() => updateDisplayItem(item)}>
			<div className='item__border'>
				<div className='item__thumbnail'>
					<p className='item__title'>{item._id}</p>
				</div>
			</div>
		</div>
	))

	const updateDisplayItem = item => {
		setDisplayItem(item)
	}

	return (
		<div
			className='page flatiron-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'flatiron' ? 1 : 0.5,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className='display-item'>
							<div className='display-item-image' style={{ display: displayItem.type === 'image' ? 'block' : 'none' }}>
								<img className='display-item-target' alt='' src={process.env.PUBLIC_URL + displayItem.itemUrl} />
							</div>
							<div className='display-item-video' style={{ display: displayItem.type === 'video' ? 'block' : 'none' }}>
								<ReactPlayer
									className='react-player'
									url={process.env.PUBLIC_URL + displayItem.itemUrl}
									playing={true}
									autoPlay={true}
									loop={true}
									controls={false}
									muted={true}
								/>
							</div>
							<div className='display-item-description'>
								<p>
									<span className='strong'>Name:</span> {displayItem.name}
								</p>
								<p style={{ display: displayItem.description ? 'block' : 'none' }}>
									<span className='strong'>Description:</span> {displayItem.description}
								</p>
								<p style={{ display: displayItem.language ? 'block' : 'none' }}>
									<span className='strong'>Built with:</span> {displayItem.language}
								</p>
								<div className='link-container'>
									<a href={displayItem.github} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.github ? 'block' : 'none' }}>
										Github
									</a>
									<span className='link-separator' style={{ display: displayItem.demo && displayItem.github ? 'block' : 'none' }}>
										|
									</span>
									<a href={displayItem.demo} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.demo ? 'block' : 'none' }}>
										Demo
									</a>
								</div>
							</div>
						</div>
						<h3>Here are some of the projects I built while at Flatiron School</h3>
						<div className='display-items-container'>{displayItems}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
