import React, { useState} from 'react'
import ReactPlayer from 'react-player'

export default function Projects({...props}) {
    
    const menuStateCurrentName = props.menuState.currentName
	const [displayItem, setDisplayItem] = useState(
		{
			_id: 'R3F False3D Photosphere Face Tracker',
			name: "R3F False3D Photosphere Face Tracker",
			description: 'React-Three-Fiber demo of custom Three.js shader to make a 2D image appear 3D which is wrapped around a photosphere and controlled with face tracking.',
			language: "React / React-Three-Fiber / Zapworks AR / Drei",
			type: 'video',
			itemUrl: '/assets-by-page/projects/r3f-false3D-photosphere-face-tracker.mp4'
		},
	)

	const itemArray = [
		{
			_id: 'R3F False3D Photosphere Face Tracker',
			name: "R3F False3D Photosphere Face Tracker",
			description: 'React-Three-Fiber demo of custom Three.js shader to make a 2D image appear 3D which is wrapped around a photosphere and controlled with face tracking.',
			language: "React / React-Three-Fiber / Zapworks AR / Drei",
			type: 'video',
			itemUrl: '/assets-by-page/projects/r3f-false3D-photosphere-face-tracker.mp4'
		},
		{
			_id: 'Chess',
			name: "Chess",
			description: 'React-Three-Fiber demo with editable textures and transform controls.',
			language: "React / React-Three-Fiber",
			type: 'video',
			itemUrl: '/assets-by-page/projects/Chess-demo.mp4'
		},
		{
			_id: 'Storm',
			name: "Storm",
			description: 'Interactive homepage demo. features(Positional Audio, model animation bound to key interactions)',
			language: "JavaScript / Three.js",
			demo: 'https://stormflight-threejs.firebaseapp.com/',
			type: 'video',
			itemUrl: '/assets-by-page/projects/trimed-storm-demo.mp4'
		},
		{
			_id: 'Responsive Text',
			name: "Responsive Text",
			description: 'React-Three-Fiber demo.',
			language: "React / React-Three-Fiber / React-Spring / Drei",
			demo: 'https://codesandbox.io/s/zb5ps?file=/src/components/ResponsiveText.js:141-145',
			type: 'video',
			itemUrl: '/assets-by-page/projects/responsive-text.mp4'
		},
		{
			_id: 'Sunrise / Sunset',
			name: "Sunrise / Sunset",
			description: 'The idea for this project was a literal light and dark mode.',
			language: "JavaScript / Three.js",
			github: "https://github.com/dannyWoodford/sunrise_sunset-THREE.js",
			demo: 'https://sunrise-sunset-2a89d.web.app/',
			type: 'video',
			itemUrl: '/assets-by-page/projects/sunrise_sunset_demo.mp4'
		},
		{
			_id: 'Ali',
			name: "Ali",
			language: "JavaScript / Three.js",
			demo: 'https://ali-tribute.web.app/',
			type: 'video',
			itemUrl: '/assets-by-page/projects/ali-tribute-demo.mp4'
		},
		{
			_id: 'Indika',
			name: "Indika",
			description: 'UI demo website.',
			language: "JavaScript",
			type: 'video',
			itemUrl: '/assets-by-page/projects/indika_demo.mp4'
		},
		{
			_id: 'Former Personal Website',
			name: "Former Personal Website",
			description: 'My original website made shortly after graduating Flatiron School in 2019.',
			language: "JavaScript / WebGL",
			github: "https://github.com/dannyWoodford/dannyWoodford.github.io",
			demo: 'https://dannywoodford.github.io/',
			type: 'video',
			itemUrl: '/assets-by-page/projects/personal_website_demo.mp4'
		},
		{
			_id: 'Quick Search Chrome Extension',
			name: "Quick Search Chrome Extension",
			description: "I made a simple chrome extension for myself so I can highlight text and search for it with a single keypress to be more efficient.",
			language: "JavaScript / Chromium",
			type: 'image',
			itemUrl: '/assets-by-page/projects/chrome-logo.jpg'
		},
		{
			_id: 'LinkedIn Connecter Chrome Extension',
			name: "LinkedIn Connecter Chrome Extension",
			description: "I made a chrome extension that automates browser events to grow your LinkedIn network. From manpower to horsepower, analog to digital, technology increases our speed and efficiency. As programmers, speed and efficiency should ring especially cogent as largely the goal of our code, taking the heavy lifting off of us and on to the machine. However, when it comes to the advancement of our careers we take a step back to espouse twentieth-century conventions. Automation has been on my mind lately and largely the reason I created this chrome extension.",
			language: "JavaScript / Chromium",
			type: 'image',
			itemUrl: '/assets-by-page/projects/chrome-logo.jpg'
		},
	]

	const displayItems = itemArray.map(item => (
		<div className="item" key={item._id} onClick={() => updateDisplayItem(item)}>
			<div className="item__border">
				<div className="item__thumbnail">
					<p className="item__title">
						{item._id}
					</p>
				</div>
			</div>
		</div>
	))

	const updateDisplayItem = (item) => {
		setDisplayItem(item)
	}

    return (
        <div className='page projects-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'projects' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className="display-item">
							<div className="display-item-image" style={{display: displayItem.type === 'image' ? 'block' : 'none'}}>
								<img className="display-item-target" alt="" src={process.env.PUBLIC_URL + displayItem.itemUrl}/>
							</div>
							<div className="display-item-video" style={{display: displayItem.type === 'video' ? 'block' : 'none'}}>
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
							<div className="display-item-description">
								<p><span className="strong">Name:</span> {displayItem.name}</p>
								<p style={{display: displayItem.description ? 'block' : 'none'}}><span className="strong">Description:</span> {displayItem.description}</p>
								<p style={{display: displayItem.language ? 'block' : 'none'}}><span className="strong">Built with:</span> {displayItem.language}</p>
								<div className="link-container">
									<a href={displayItem.github} target="_blank" rel="noreferrer" className="link" style={{display: displayItem.github ? 'block' : 'none'}}>Github</a>
										<span className="link-separator" style={{display: displayItem.demo && displayItem.github ? 'block' : 'none'}}>|</span>
									<a href={displayItem.demo} target="_blank" rel="noreferrer" className="link" style={{display: displayItem.demo ? 'block' : 'none'}}>Demo</a>
								</div>
							</div>
						</div>
						<h3>Here are some of the personal projects I've built in my free time</h3>
						<div className="display-items-container">
							{displayItems}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
