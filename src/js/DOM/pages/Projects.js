import React, { useState, useMemo, useCallback } from 'react'
import ReactPlayer from 'react-player'

const personalProjectsItemArray = [
	{
		name: 'R3F False3D Photosphere Face Tracker (360\u00b0 Glasses-less 3D Image)',
		description:
			'React-Three-Fiber demo of custom Three.js shader to make a 2D image appear 3D which is wrapped around a photosphere and controlled with face tracking.',
		language: 'React / React-Three-Fiber / Zapworks AR / Drei',
		demo: 'https://mfwj.zappar.io/5957180484379593482/1.0.0/',
		type: 'video',
		itemUrl: '/assets-by-page/projects/r3f-false3D-photosphere-face-tracker.mp4',
	},
	{
		name: 'Stereographic Projection -- Volumetric Light',
		description: 'Demonstrating the concept of stereographic projection in react-three-fiber with some volumetric light thrown in there just for fun.',
		language: 'React / React-Three-Fiber / Postprocessing / Drei',
		demo: 'https://codesandbox.io/s/stereographic-projection--volumetric-light-67b5m?file=/src/index.js:428-442',
		type: 'video',
		itemUrl: '/assets-by-page/projects/StereographicProjection--VolumetricLight.mp4',
	},
	{
		name: 'Chess',
		description: 'React-Three-Fiber demo with editable textures and transform controls.',
		language: 'React / React-Three-Fiber',
		type: 'video',
		itemUrl: '/assets-by-page/projects/Chess-demo.mp4',
	},
	{
		name: 'Storm',
		description: 'Interactive homepage demo. features(Positional Audio, model animation bound to key interactions)',
		language: 'JavaScript / Three.js',
		demo: 'https://stormflight-threejs.firebaseapp.com/',
		type: 'video',
		itemUrl: '/assets-by-page/projects/trimed-storm-demo.mp4',
	},
	{
		name: 'Responsive Text',
		description: 'React-Three-Fiber demo.',
		language: 'React / React-Three-Fiber / React-Spring / Drei',
		demo: 'https://codesandbox.io/s/zb5ps?file=/src/components/ResponsiveText.js:141-145',
		type: 'video',
		itemUrl: '/assets-by-page/projects/responsive-text.mp4',
	},
	{
		name: 'Sunrise / Sunset',
		description: 'The idea for this project was a literal light and dark mode.',
		language: 'JavaScript / Three.js',
		github: 'https://github.com/dannyWoodford/sunrise_sunset-THREE.js',
		demo: 'https://sunrise-sunset-2a89d.web.app/',
		type: 'video',
		itemUrl: '/assets-by-page/projects/sunrise_sunset_demo.mp4',
	},
	{
		name: 'Ali',
		language: 'JavaScript / Three.js',
		demo: 'https://ali-tribute.web.app/',
		type: 'video',
		itemUrl: '/assets-by-page/projects/ali-tribute-demo.mp4',
	},
	{
		name: 'Indika',
		description: 'UI demo website.',
		language: 'JavaScript',
		type: 'video',
		itemUrl: '/assets-by-page/projects/indika_demo.mp4',
	},
	{
		name: 'Former Personal Website',
		description: 'My original website made shortly after graduating Flatiron School in 2019.',
		language: 'JavaScript / WebGL',
		github: 'https://github.com/dannyWoodford/dannyWoodford.github.io',
		demo: 'https://dannywoodford.github.io/',
		type: 'video',
		itemUrl: '/assets-by-page/projects/personal_website_demo.mp4',
	},
	{
		name: 'Quick Search Chrome Extension',
		description: 'I made a simple chrome extension for myself so I can highlight text and search for it with a single keypress to be more efficient.',
		language: 'JavaScript / Chromium',
		type: 'image',
		itemUrl: '/assets-by-page/projects/chrome-logo.jpg',
	},
	{
		name: 'LinkedIn Connecter Chrome Extension',
		description:
			'I made a chrome extension that automates browser events to grow your LinkedIn network. From manpower to horsepower, analog to digital, technology increases our speed and efficiency. As programmers, speed and efficiency should ring especially cogent as largely the goal of our code, taking the heavy lifting off of us and on to the machine. However, when it comes to the advancement of our careers we take a step back to espouse twentieth-century conventions. Automation has been on my mind lately and largely the reason I created this chrome extension.',
		language: 'JavaScript / Chromium',
		type: 'image',
		itemUrl: '/assets-by-page/projects/chrome-logo.jpg',
	},
]

const brandgageItemArray = [
	{
		name: 'Merck 3D',
		description: 'VR experience created for pharmaceutical trade shows.',
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		demo: 'https://3d.gesvirtualexhibits.com/show/gjk39k/esmo-2021/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/msd.mp4',
		message: <>** Website, usually, is only up during the trade show it is built for, so the link may or may not work **</>,
	},
	{
		name: 'Company Website',
		description: 'VR experience created for pharmaceutical trade shows.',
		language: 'JavaScript / Three.js / SASS',
		demo: 'https://www.brandgage.com/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/brandgage-website_resized.mp4',
	},
	{
		name: 'Pfizer Cibinqo',
		description: 'VR experience created for pharmaceutical trade shows.',
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		demo: 'https://cibinqovirtualexperience.com/show/zx93mk/aad-2021/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/Cibinqo.mp4',
		message: <>** Website, usually, is only up during the trade show it is built for, so the link may or may not work **</>,
	},
	{
		name: 'Pfizer Rare Disease',
		description: 'Virtual Booth created for pharmaceutical trade shows.',
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		demo: 'https://pfizerrarediseasecongressresources.com/show/jl09pa/endo-2021/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/Pfizer-Rare-Disease.mp4',
		message: <>** Website, usually, is only up during the trade show it is built for, so the link may or may not work **</>,
	},
	{
		name: 'Takeda',
		description: 'Virtual Booth created for pharmaceutical trade shows.',
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		demo: 'https://everymileofthejourney.com/show/booth/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/Takeda-demo.mp4',
		message: <>** Website, usually, is only up during the trade show it is built for, so the link may or may not work **</>,
	},
	{
		name: 'R&D 3D Virtual Booth',
		description:
			'Experimental Virtual Booth I am building alone as an R&D project for Brandgage. It is the same as the next project but with many of the features to edit the scene taken out as the idea evolved from a Virtual Booth Builder to a Virtual Booth Experience. However, the model used in this version is greatly improved and loads 12 times faster after I baked the lighting, normal maps, etc, reduced the poly count by 97%, and consolidated textures by UV-mapping multiple meshes to use the same texture to save space.',
		language: 'React / React-Three-Fiber',
		demo: 'http://phpstack-95367-1945343.cloudwaysapps.com/baked-models-live-lights-working-nav/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/R&D.mp4',
	},
	{
		name: 'R&D 3D Virtual Booth (Earlier Version)',
		description:
			'An earlier version of the previous project. Originally the idea was a Virtual Booth Builder/Editor, so many of the objects can be transformed and select meshes edited. However, this was before I optimized the model.',
		language: 'React / React-Three-Fiber',
		demo: 'https://phpstack-95367-1945343.cloudwaysapps.com/drag-and-drop-reduced-models/',
		type: 'video',
		itemUrl: '/assets-by-page/brandgage/R&D-previous.mp4',
	},
]

const rocketItemArray = [
	{
		name: 'Animated Rocket Logo',
		description: 'Animated logo I made for Rocket using Theatre.js.',
		language: 'React / React-Three-Fiber / Theatre.js / Drei',
		demo: 'https://codesandbox.io/s/rocket-logo-animation-22wpji?file=/src/Scene.js:702-810',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/rocket_animated_logo.mp4',
	},
	{
		name: 'Space ACME',
		description:
			'A 3D visualization tool, built for the Space Force, to aid satellite operators to envision system status, orbits, and predicted events; easily create multiple manoeuver options and view/compare them to help decision-makers quickly grasp implications and improve decisions.',
		language: 'React / TypeScript / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
		thumbnail: '/assets-by-page/home/thumbnails/space-acme-logo.png',
		thumbnailName: 'Overview',
	},
	{
		name: 'Stylized Intro',
		description: 'Into I made for the project using Theatre.js . This is not a cut-scene. After the initial camera zoom in it is fully interactive.',
		language: 'React / React-Three-Fiber / Drei / Theatre.js',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/intro-v2.mp4',
	},
	{
		name: 'Real-Time Sun Position',
		description:
			'The "sun" responds to the draggable timeline at the bottom of the render window and is accurately positioned to match its real world counterpart.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
	{
		name: 'State Vector Plotting / Interpolation',
		description:
			'Probably the most challenging feature was plotting orbital state vectors and interpolating between them to position the satellites and achieve a smooth animation. 4 other companies failed to achieve this feat and solving this is ultimately what won us the defense department contract.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
	{
		name: 'Event Creation / Editing',
		description:
			'Users can create and edit events to visualize a change in altitude, inclination, period or suppress satellites entirely. The orbit and satellite label turn green after the start of an event to distinguish between the two.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
	{
		name: 'Search Satellites',
		description: 'Users can search for satellites and visualize thousands of instances at once.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/sat-search.mp4',
	},
	{
		name: 'Orbits and Mouse Interaction',
		description:
			'Users can visualize orbits that also respond to hover and selected states. These states affect the list (outside of the canvas) in the left panel. Interacting with the list, conversely, affects the orbits.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
	{
		name: 'Shaders',
		description:
			"There are several custom GLSL shaders at play to get the final appearance of the earth. Including 2 for the atmosphere (earth's surface and outer glow), moving clouds, and city lights that respond to the position of the sun. (Special thanks to Faraz Shaikh, whose CodeSandbox provided the basis for which my city lights shader is based)",
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
	{
		name: 'Helper Tools',
		description:
			'To aid in the development of the app it was necessary to build several tools and global settings. Including a sun positioning helper, altitude lines, interpolation helper, and setting up GUI controls with Theatre.js(s) new Theatric api to fine tune almost all aesthetic features.',
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: '/assets-by-page/rocket/acme-demo.mp4',
	},
]

const flatironItemArray = [
	{
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

const displayCategoryArray = {
	Brandgage: {
		hasTabInfo: true,
		name: 'Brandgage',
		title: '3D Javascript Developer',
		duration: 'June 2020 - March 2022',
		location: 'Pittsburgh, Pa (On-Site)',
		website: 'https://www.brandgage.com/',
		websiteDisplayName: 'Brandgage.com',
		description: (
			<>
				<p>
					Brandgage is all about brand engagement and leaving a lasting impression. While at Brandgage, I worked on over 40 websites and apps, almost
					exclusively for pharmaceutical companies like Pfizer, Merck, Takeda, and Bayer. I mostly worked on "virtual booths" for virtual and in-person trade
					shows mixing standard web development, video transitions, and virtual reality.
				</p>
			</>
		),
	},
	Rocket: {
		hasTabInfo: true,
		name: 'Rocket Communications, Inc.',
		title: '3D Developer / 3D Artist',
		duration: 'March 2022 - Feb 2023',
		location: 'San Francisco, Ca (Remote)',
		website: 'https://www.rocketcom.com/',
		websiteDisplayName: 'Rocketcom.com',
		description: (
			<>
				<p>
					The entirety of my time at Rocket has been spent working on the Space ACME project, a 3D visualization tool built for the Space Force to aid satellite
					operators. As the sole 3D developer of this project, it has afforded me some of the most intellectually fulfilling work of my career, as well as
					creatively fulfilling since I was given almost full creative control over the look of the 3D.
				</p>
			</>
		),
	},
	PersonalProjects: {
		duration: '2019 - Present',
		message: (
			<>
				<h3>Here are some of the personal projects I've built in my free time.</h3>
			</>
		),
	},
	Flatiron: {
		hasTabInfo: true,
		name: 'Flatiron School',
		duration: '2019',
		location: 'Manhattan, NY (On-Site)',
		website: 'https://flatironschool.com/',
		websiteDisplayName: 'Flatironschool.com',
		description: (
			<>
				<p>Flatiron School is a coding bootcamp that was rated the number 1# by Course Report when I attended in 2019.</p>
			</>
		),
	},
}

export default function Projects({ ...props }) {
	const menuStateCurrentName = props.menuState.currentName

	// Brandgage, Rocket, PersonalProjects
	const [displayCategory, setDisplayCategory] = useState('Rocket')
	const [displayItem, setDisplayItem] = useState(rocketItemArray[1])

	const updateDisplayCategory = category => {
		setDisplayCategory(category)
	}

	const updateDisplayItem = item => {
		setDisplayItem(item)
	}

	const displayItemsFactory = useCallback(categoryArray => {
		return categoryArray.map(item => (
			<div className='item' key={item.name} onClick={() => updateDisplayItem(item)}>
				<div className='item__border'>
					{item.thumbnail ? (
						<div className='item__thumbnail overview'>
							<img className='item__image add-padding' draggable='false' alt='' src={process.env.PUBLIC_URL + item.thumbnail} />
							<img alt='' className='item__hover__image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
							<p className='item__title'>{item.thumbnailName}</p>
						</div>
					) : (
						<div className='item__thumbnail'>
							<p className='item__title'>{item.name}</p>
						</div>
					)}
				</div>
			</div>
		))
	}, [])

	const displayItems = useMemo(() => {
		if (displayCategory === 'Brandgage') {
			updateDisplayItem(brandgageItemArray[0])
			return displayItemsFactory(brandgageItemArray)
		} else if (displayCategory === 'Rocket') {
			updateDisplayItem(rocketItemArray[1])
			return displayItemsFactory(rocketItemArray)
		} else if (displayCategory === 'PersonalProjects') {
			updateDisplayItem(personalProjectsItemArray[0])
			return displayItemsFactory(personalProjectsItemArray)
		} else if (displayCategory === 'Flatiron') {
			updateDisplayItem(flatironItemArray[0])
			return displayItemsFactory(flatironItemArray)
		}
	}, [displayCategory, displayItemsFactory])

	return (
		<div
			className='page projects-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'projects' ? 1 : 0,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<h2 className='tab-switch-message'>Choose between these tabs to see some of the projects I've worked on</h2>

						<div className='tab-switch-container'>
							<div className='item medium' onClick={() => updateDisplayCategory('Rocket')}>
								<div className='item__border'>
									<img
										className='item__image add-padding'
										draggable='false'
										alt=''
										src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/rocket-logo.png'}
									/>
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/acme-gif.gif'} />
								</div>
								<h3 className='duration'>{displayCategoryArray['Rocket'].duration}</h3>
							</div>
							<div className='item medium' onClick={() => updateDisplayCategory('Brandgage')}>
								<div className='item__border'>
									<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/brandgage-logo.png'} />
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/brandgage-gif.gif'} />
								</div>
								<h3 className='duration'>{displayCategoryArray['Brandgage'].duration}</h3>
							</div>
							<div className='item medium' onClick={() => updateDisplayCategory('PersonalProjects')}>
								<div className='item__border'>
									<img
										className='item__image invert-on-hover'
										draggable='false'
										alt=''
										src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/personal-projects-logo.png'}
									/>
									<img alt='' className='item__image hover-image blur-on-hover' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
								</div>
								<h3 className='duration'>{displayCategoryArray['PersonalProjects'].duration}</h3>
							</div>
							<div className='item medium' onClick={() => updateDisplayCategory('Flatiron')}>
								<div className='item__border'>
									<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/flatiron-logo.png'} />
									<img alt='' className='item__image hover-image blur-on-hover' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/flatiron-gif.gif'} />
								</div>
								<h3 className='duration'>{displayCategoryArray['Flatiron'].duration}</h3>
							</div>
						</div>

						<div className={`display-item-panel ${displayCategoryArray[displayCategory].hasTabInfo ? 'has-tab-info' : ''}`}>
							<div className='display-item tab-info'>
								<h1 className='tab-info-name'>{displayCategoryArray[displayCategory].name}</h1>
								<div className='tab-info-details'>
									<div className='tab-info-columns'>
										<div className={`tab-info-flex ${displayCategoryArray[displayCategory].title ? '' : 'no-title'}`}>
											<p className='strong'>Title:</p>
											<p>{displayCategoryArray[displayCategory].title}</p>
										</div>
										<div className='tab-info-flex'>
											<p className='strong'>Location:</p>
											<p>{displayCategoryArray[displayCategory].location}</p>
										</div>
									</div>
									<div>
										<div className='tab-info-flex'>
											<p className='strong'>Website:</p>
											<a href={displayCategoryArray[displayCategory].website} target='_blank' rel='noreferrer' className='link'>
												{displayCategoryArray[displayCategory].websiteDisplayName}
											</a>
										</div>
									</div>
								</div>
								<div>{displayCategoryArray[displayCategory].description}</div>
							</div>
							<div className='display-item'>
								<div className='display-item-image' style={{ display: displayItem.type === 'image' ? 'block' : 'none' }}>
									<img
										className={`display-item-target ${displayCategoryArray[displayCategory].hasTabInfo ? 'has-tab-info' : ''}`}
										alt=''
										src={process.env.PUBLIC_URL + displayItem.itemUrl}
									/>
								</div>
								<div className='display-item-video' style={{ display: displayItem.type === 'video' ? 'block' : 'none' }}>
									<ReactPlayer
										className={`react-player ${displayCategoryArray[displayCategory].hasTabInfo ? 'has-tab-info' : ''}`}
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
									<p className='display-item-message' style={{ display: displayItem.message ? 'block' : 'none' }}>
										{displayItem.message}
									</p>
								</div>
							</div>
						</div>
						<div className={'display-items-container'}>{displayItems}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
