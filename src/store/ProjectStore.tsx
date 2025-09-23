import { create } from 'zustand'
import React from 'react'  // Add this line

export type ProjectsItem = {
	category: string;
	name: string;
	prefix?: string;
	hashName: string;
	description?: React.ReactNode;
	language?: string;
	github?: string;
	type: 'video' | 'image';
	itemUrl: string;
	message?: React.ReactNode;
	thumbnail: string;
	thumbnailHover?: string;  // Make optional with ?
	thumbnailName?: string;   // Make optional with ?
	demo?: string;            // Make optional with ?
	isFeature?: boolean;
};

export type DisplayCategory = {
	hasTabInfo?: boolean;
	name?: string;
	title?: string;
	duration?: string;
	location?: string;
	website?: string;
	websiteDisplayName?: string;
	description?: React.ReactNode;
};

export type DisplayCategoryObject = {
	[key: string]: DisplayCategory;
};

export const projectsData: ProjectsItem[] = [
	{
		category: 'flatiron',
		name: 'Spotify 3D music Visualizer',
		hashName: 'spotify-3d-music-visualizer',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>3D music visualizer that connects to your Spotify account and allows for web playback.</p>
			</>
		),
		language: 'JavaScript / React / Ruby on Rails Backend / Three.js',
		github: 'https://github.com/dannyWoodford/3D-spotify-visualizer-',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=plxzb_HcO38&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/spotify-thumbnail.jpeg',
	},
	{
		category: 'flatiron',
		name: 'Ziehbare Stimme Leinwand',
		hashName: 'ziehbare-stimme-leinwand',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>This Todo list app, apart from having full CRUD functionality, is designed specifically to frustrate the user.</p>
			</>
		),
		language: 'JavaScript / React / Ruby on Rails Backend / Three.js',
		github: 'https://github.com/jwsharpe/ZiehbareStimmeLeinwand',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=mxqVsnrPhgQ&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/ziehbare-stimme-leinwand.jpeg',
	},
	{
		category: 'flatiron',
		name: 'Enter the Labyrinth',
		hashName: 'enter-the-labyrinth',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Complete the maze before the fire catches you.</p>
			</>
		),
		language: 'JavaScript / Ruby on Rails Backend / Canvas',
		github: 'https://github.com/TenNga/Maze-Game-Front-End',
		demo: 'https://pure-reaches-70099.herokuapp.com/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=ZZM6cyUwNhk&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/enter-the-labyrinth.jpeg',
	},
	{
		category: 'flatiron',
		name: 'NOTFLIX',
		hashName: 'notflix',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Netflix inspired app is a library of TV shows and movies found on youtube with a smart clean look.</p>
			</>
		),
		language: 'Ruby on Rails',
		github: 'https://github.com/ntel-91/mod2-project',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=zEl4K58iNqs&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/notflix.jpeg',
	},
	{
		category: 'flatiron',
		name: 'Flatiron Cross-Discipline Collaboration Event',
		hashName: 'flatiron-cross-discipline-collaboration-event',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					While at Flatiron I started and lead the first cross-discipline collaboration event bringing students from developer, data science, and UX/UI tracks
					together to preform mock projects. Through these projects the students learned what each others role does and how they would interact with one
					another. Of the 60 odd students involved several groups, as well as my own, have continued to bring there mock projects to life post graduation.
				</p>
			</>
		),
		type: 'image',
		itemUrl: '/assets-by-page/projects/thumbnails/cross-colab.jpg',
		thumbnail: '/assets-by-page/projects/thumbnails/cross-colab.jpg',
	},
	{
		category: 'personalProjects',
		name: 'About Section',
		hashName: 'about-section',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Into I made using Theatre.js. This is not a cut-scene. After the initial camera zoom in it is fully interactive.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Theatre.js',
		demo: 'https://dannywoodforddev.web.app/about',
		type: 'video',
		itemUrl: 'https://youtu.be/a_-u9dzlY2s&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/about-section.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'THREE.js / D3.js AI Generator',
		hashName: 'three-js-ai-generator',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Three.js AI Generator which connects to openAI to return a three.js or d3.js scene based on a prompt.</p>
			</>
		),
		language: 'React / Three.js / D3.js / Node.js',
		github: 'https://github.com/dannyWoodford/THREEjs-AI-Generator',
		demo: 'https://threejs-ai-generator.web.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/JUA3GkkPs9E&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/three-js-ai-generator.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Gaussian Splatting w/ Face Tracking',
		hashName: 'gauss-splatting-face-tracking',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					I made this demo to show off the potential of 3D Gaussian Splatting using LumaAI's WebGL Library. Also, I added FaceControls to give it an AR/VR
					quality to enhance perspective and mixed them with OrbitControls so you can still navigate the scene easily.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / LumaAI / Drei',
		github: 'https://github.com/dannyWoodford/gaussian-splatting-face-tracking-controls',
		demo: 'https://gauss-splatting-face-tracking.web.app',
		type: 'video',
		itemUrl: 'https://youtu.be/g5OJDLzT7jI&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/gauss-splatting-face-tracking.jpg',
	},
	{
		category: 'personalProjects',
		name: 'R3F shader transition',
		hashName: 'r3f-shader-transition',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Hide switching between materials with a custom GLSL transition shader. This is designed for situations where you cannot directly access the materials,
					so the transition shader fades in to hide swapping the materials.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / GLSL',
		demo: 'https://codesandbox.io/p/sandbox/relaxed-curie-r6cct8?file=%2Fsrc%2Fobjects%2FAnimatedSphere.jsx%3A75%2C22',
		type: 'video',
		itemUrl: 'https://youtu.be/fJN0_mlCU9E&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/r3f-shader-transition.jpg',
	},
	{
		category: 'personalProjects',
		name: 'R3F Glasses-less 2D to 3D with Face Tracking',
		hashName: 'r3f-glasses-less-2d-to-3d-with-face-tracking',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					React-Three-Fiber demo of custom Three.js shader to make a 2D image appear 3D which is wrapped around a photosphere and controlled with face tracking.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Zapworks AR / Drei',
		github: 'https://github.com/dannyWoodford/r3f-false3D-photosphere-face-tracker',
		demo: 'https://mfwj.zappar.io/5957180484379593482/1.0.0/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=N1YX4zjV4cU&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/r3f-glasses-less-2d-to-3d-with-face-tracking.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Stereographic Projection -- Volumetric Light',
		hashName: 'stereographic-projection',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Demonstrating the concept of stereographic projection in react-three-fiber with some volumetric light thrown in there just for fun.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Postprocessing / Drei',
		demo: 'https://codesandbox.io/s/stereographic-projection--volumetric-light-67b5m?file=/src/index.js:428-442',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=ZVnf0EqW8gQ&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/stereographic-projection.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Chess',
		hashName: 'chess',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>React-Three-Fiber demo with editable textures and transform controls.</p>
			</>
		),
		language: 'React / React-Three-Fiber',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=FbwCUF3Vo0o&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/chess.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Storm',
		hashName: 'storm',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Interactive homepage demo. features(Positional Audio, model animation bound to key interactions)</p>
			</>
		),
		language: 'JavaScript / Three.js',
		demo: 'https://stormflight-threejs.firebaseapp.com/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=pBiciyoSH4U&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/storm.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Responsive Text',
		hashName: 'responsive-text',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>React-Three-Fiber demo.</p>
			</>
		),
		language: 'React / React-Three-Fiber / React-Spring / Drei',
		demo: 'https://codesandbox.io/s/zb5ps?file=/src/components/ResponsiveText.js:141-145',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=4fbjUTfhDkE&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/responsive-text.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Sunrise / Sunset',
		hashName: 'sunrise-sunset',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>The idea for this project was a literal light and dark mode.</p>
			</>
		),
		language: 'JavaScript / Three.js',
		github: 'https://github.com/dannyWoodford/sunrise_sunset-THREE.js',
		demo: 'https://sunrise-sunset-2a89d.web.app/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=Git2C66fpNY&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/sunrise-sunset.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Ali',
		hashName: 'ali',
		language: 'JavaScript / Three.js',
		demo: 'https://ali-tribute.web.app/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=wdqdx9UEf1s&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/ali.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Indika',
		hashName: 'indika',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>UI demo website.</p>
			</>
		),
		language: 'JavaScript',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=fFb0jhT5lcQ&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/indika.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Former Personal Website',
		hashName: 'former-personal-website',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>My original website made shortly after graduating Flatiron School in 2019.</p>
			</>
		),
		language: 'JavaScript / WebGL',
		github: 'https://github.com/dannyWoodford/dannyWoodford.github.io',
		demo: 'https://dannywoodford.github.io/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=3iz6G3kzCfg&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/former-personal-website.jpeg',
	},
	{
		category: 'personalProjects',
		name: 'Quick Search Chrome Extension',
		hashName: 'quick-search-chrome-extension',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>I made a simple chrome extension for myself so I can highlight text and search for it with a single keypress to be more efficient.</p>
			</>
		),
		language: 'JavaScript / Chromium',
		type: 'image',
		itemUrl: '/assets-by-page/projects/chrome-logo.jpg',
		thumbnail: '/assets-by-page/projects/chrome-logo.jpg',
	},
	{
		category: 'personalProjects',
		name: 'LinkedIn Connecter Chrome Extension',
		hashName: 'linkedin-connecter-chrome-extension',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					I made a chrome extension that automates browser events to grow your LinkedIn network. From manpower to horsepower, analog to digital, technology
					increases our speed and efficiency. As programmers, speed and efficiency should ring especially cogent as largely the goal of our code, taking the
					heavy lifting off of us and on to the machine. However, when it comes to the advancement of our careers we take a step back to espouse
					twentieth-century conventions. Automation has been on my mind lately and largely the reason I created this chrome extension.
				</p>
			</>
		),
		language: 'JavaScript / Chromium',
		type: 'image',
		itemUrl: '/assets-by-page/projects/chrome-logo.jpg',
		thumbnail: '/assets-by-page/projects/chrome-logo.jpg',
	},
	{
		category: 'brandgage',
		name: 'Merck 3D',
		hashName: 'merck-3d',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Virtual experience created for pharmaceutical trade show.</p>
			</>
		),
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		// demo: 'https://3d.gesvirtualexhibits.com/show/gjk39k/esmo-2021/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=_kksQSCewsY&ab_channel=DannyWoodford',
		message: <>Site was only live during the trade show it was built for.</>,
		thumbnail: '/assets-by-page/projects/thumbnails/merck-3d.jpeg',
	},
	{
		category: 'brandgage',
		name: 'Company Website',
		hashName: 'company-website',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Virtual experience created for pharmaceutical trade show.</p>
			</>
		),
		language: 'JavaScript / Three.js / SASS',
		demo: 'https://www.brandgage.com/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=izoj6CgjUbg&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/brandgage-company-website.jpeg',
	},
	{
		category: 'brandgage',
		name: 'Pfizer Cibinqo',
		hashName: 'pfizer-cibinqo',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Virtual experience created for pharmaceutical trade show.</p>
			</>
		),
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		// demo: 'https://cibinqovirtualexperience.com/show/zx93mk/aad-2021/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=EE2Uf9bLRpg&ab_channel=DannyWoodford',
		message: <>Site was only live during the trade show it was built for.</>,
		thumbnail: '/assets-by-page/projects/thumbnails/pfizer-cibinqo.jpeg',
	},
	{
		category: 'brandgage',
		name: 'Pfizer Rare Disease',
		hashName: 'pfizer-rare-disease',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Virtual Booth created for pharmaceutical trade show.</p>
			</>
		),
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		// demo: 'https://pfizerrarediseasecongressresources.com/show/jl09pa/endo-2021/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=guQXZciGo9E&ab_channel=DannyWoodford',
		message: <>Site was only live during the trade show it was built for.</>,
		thumbnail: '/assets-by-page/projects/thumbnails/pfizer-rare-disease.jpeg',
	},
	{
		category: 'brandgage',
		name: 'Takeda',
		hashName: 'takeda',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>Virtual Booth created for pharmaceutical trade show.</p>
			</>
		),
		language: 'JavaScript / Three.js / Twig / PHP / SASS',
		// demo: 'https://everymileofthejourney.com/show/booth/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=xqyhc_7OVvk&ab_channel=DannyWoodford',
		message: <>Site was only live during the trade show it was built for.</>,
		thumbnail: '/assets-by-page/projects/thumbnails/takeda.jpeg',
	},
	{
		category: 'brandgage',
		name: 'R&D 3D Virtual Booth - V2.0',
		hashName: '3d-virtual-booth-improved',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Experimental Virtual Booth I am building alone as an R&D project for Brandgage. It is the same as the next project but with many of the features to
					edit the scene taken out as the idea evolved from a Virtual Booth Builder to a Virtual Booth Experience. However, the model used in this version is
					greatly improved and loads 12 times faster after I baked the lighting, normal maps, etc, reduced the poly count by 97%, and consolidated textures by
					UV-mapping multiple meshes to use the same texture to save space.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber',
		// demo: 'http://phpstack-95367-1945343.cloudwaysapps.com/baked-models-live-lights-working-nav/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=p4rODhstcOA&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/3d-virtual-booth-improved.jpeg',
	},
	{
		category: 'brandgage',
		name: 'R&D 3D Virtual Booth - V1.0',
		hashName: '3d-virtual-booth-earlier-version',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					An earlier version of the previous project. Originally the idea was a Virtual Booth Builder/Editor, so many of the objects can be transformed and
					select meshes edited. However, this was before I optimized the model.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber',
		// demo: 'https://phpstack-95367-1945343.cloudwaysapps.com/drag-and-drop-reduced-models/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=nb-Pbs6yhRw&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/3d-virtual-booth-earlier-version.jpeg',
	},
	{
		category: 'rocket',
		name: 'Animated Rocket Logo',
		hashName: 'animated-rocket-logo',
		description: (
			<>
				<h3>Overview</h3>
				<p>Animated logo I made for Rocket using Theatre.js.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Theatre.js / Drei',
		demo: 'https://codesandbox.io/s/rocket-logo-animation-22wpji?file=/src/Scene.js:702-810',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=_Y8PbDfS2T8&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/animated-rocket-logo.jpeg',
	},
	{
		category: 'rocket',
		name: 'Space ACME',
		hashName: 'space-acme',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					A 3D visualization tool, built for the Space Force, to aid satellite operators to envision system status, orbits, and predicted events; easily create
					multiple manoeuver options and view/compare them to help decision-makers quickly grasp implications and improve decisions.
				</p>
			</>
		),
		language: 'React / TypeScript / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		thumbnailName: 'Overview',
	},
	{
		category: 'rocket',
		name: 'Stylized Intro',
		prefix: '(Space ACME)',
		hashName: 'stylized-intro',
		description: (
			<>
				<h3>Feature</h3>
				<p>Into I made for the project using Theatre.js. This is not a cut-scene. After the initial camera zoom in it is fully interactive.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei / Theatre.js',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://www.youtube.com/watch?v=cyIciRX7h4A&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/projects/thumbnails/stylized-intro.jpeg',
	},
	{
		category: 'rocket',
		name: 'Real-Time Sun Position',
		prefix: '(Space ACME)',
		hashName: 'real-time-sun-position',
		description: (
			<>
				<h3>Feature</h3>
				<p>The "sun" responds to the draggable timeline at the bottom of the render window and is accurately positioned to match its real world counterpart.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'State Vector Plotting / Interpolation',
		prefix: '(Space ACME)',
		hashName: 'state-vector-plotting-interpolation',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					Probably the most challenging feature was plotting orbital state vectors and interpolating between them to position the satellites and achieve a
					smooth animation. 4 other companies failed to achieve this feat and solving this is ultimately what won us the defense department contract.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'Event Creation / Editing',
		prefix: '(Space ACME)',
		hashName: 'event-creation-editing',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					Users can create and edit events to visualize a change in altitude, inclination, period or suppress satellites entirely. The orbit and satellite label
					turn green after the start of an event to distinguish between the two.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'Search Satellites',
		prefix: '(Space ACME)',
		hashName: 'search-satellites',
		description: (
			<>
				<h3>Feature</h3>
				<p>Users can search for satellites and visualize thousands of instances at once.</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/CrGRMXDBr_w&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'Orbits and Mouse Interaction',
		prefix: '(Space ACME)',
		hashName: 'orbits-and-mouse-interaction',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					Users can visualize orbits that also respond to hover and selected states. These states affect the list (outside of the canvas) in the left panel.
					Interacting with the list, conversely, affects the orbits.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'Shaders',
		prefix: '(Space ACME)',
		hashName: 'shaders',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					There are several custom GLSL shaders at play to get the final appearance of the earth. Including 2 for the atmosphere (earth's surface and outer
					glow), moving clouds, and city lights that respond to the position of the sun. (Special thanks to Faraz Shaikh, whose CodeSandbox provided the basis
					for which my city lights shader is based)
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'rocket',
		name: 'Helper Tools',
		prefix: '(Space ACME)',
		hashName: 'helper-tools',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					To aid in the development of the app it was necessary to build several tools and global settings. Including a sun positioning helper, altitude lines,
					interpolation helper, and setting up GUI controls with Theatre.js(s) new Theatric api to fine tune almost all aesthetic features.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / Drei',
		demo: 'https://space-acme.netlify.app/',
		type: 'video',
		itemUrl: 'https://youtu.be/s56flzGpq4Q?si=cLCZwtHT_oLbXHF3&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/space-acme-logo.png',
		isFeature: true,
	},
	{
		category: 'atlas',
		name: 'Atlas Studio',
		hashName: 'atlas-studio-overview',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					I led the Atlas Studio project, an in-browser VR-enabled editor using react-three-fiber for building and exporting 3D structures to place on your own
					land or trade on the marketplace.
				</p>
			</>
		),
		language: 'React / React-Three-Fiber / react-three/xr',
		demo: 'https://studio.earth.atlasreality.dev/',
		type: 'video',
		itemUrl: 'https://youtu.be/NaNG4Tw0rKI&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/atlas-studio-logo.png',
		thumbnailName: 'Overview',
	},
	{
		category: 'quest',
		name: 'Scan Your Own Room',
		prefix: '(CITY Furniture)',
		hashName: 'scan-your-own-room',
		description: (
			<>
				<h3>Feature</h3>
				<p>Utilizing the LiDAR sensors in your smartphone's camera you can scan a physical room and a 3D facsimile is generated using AI.</p>
			</>
		),
		language: 'React / Typescript / React-Three-Fiber / @react-three/rapier',
		type: 'video',
		itemUrl: 'https://youtu.be/GRdpuZ8-zqc&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/city-furniture-logo-invert.png',
		isFeature: true,
	},
	{
		category: 'quest',
		name: 'CITY Furniture',
		hashName: 'city-furniture-overview',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					This tool allows customers to seamlessly place furniture in customizable room templates or utilize AI-generated 3D replicas of their actual rooms by
					scanning their surroundings using the LiDAR sensors in their smartphone's camera.
				</p>
			</>
		),
		language: 'React / Typescript / React-Three-Fiber / @react-three/rapier',
		type: 'video',
		itemUrl: 'https://youtu.be/_11k_T4BtVg&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/city-furniture-logo-invert.png',
		thumbnailName: 'Overview',
	},
	{
		category: 'quest',
		name: 'Collision Physics',
		prefix: '(CITY Furniture)',
		hashName: 'collision-physics',
		description: (
			<>
				<h3>Feature</h3>
				<p>I implemented realistic collision interactions between furniture and the environment using @react-three/rapier physics engine.</p>
			</>
		),
		language: 'React / Typescript / React-Three-Fiber / @react-three/rapier',
		type: 'video',
		itemUrl: 'https://youtu.be/Hd4UoqmH-e8&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/city-furniture-logo-invert.png',
		isFeature: true,
	},
	{
		category: 'quest',
		name: 'Editable Room Templates',
		prefix: '(CITY Furniture)',
		hashName: 'editable-room-templates',
		description: (
			<>
				<h3>Feature</h3>
				<p>Modify the dimensions of the room templates, select alternative wall colors, or opt for a different flooring from a wide range of choices.</p>
			</>
		),
		language: 'React / Typescript / React-Three-Fiber / @react-three/rapier',
		type: 'video',
		itemUrl: 'https://youtu.be/FP_tXKjyoaI&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/city-furniture-logo-invert.png',
		isFeature: true,
	},
	{
		category: 'quest',
		name: 'Save and Checkout',
		prefix: '(CITY Furniture)',
		hashName: 'save-and-checkout',
		description: (
			<>
				<h3>Feature</h3>
				<p>Save multiple room layouts and furniture arrangements, then effortlessly purchase your chosen items.</p>
			</>
		),
		language: 'React / Typescript / React-Three-Fiber / @react-three/rapier',
		type: 'video',
		itemUrl: 'https://youtu.be/-o9uoxFbZdY&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/city-furniture-logo-invert.png',
		isFeature: true,
	},
	{
		category: 'subvrsive',
		name: 'Memory Maker (Coca-Cola)',
		hashName: 'memory-maker-overview',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Enabled users to remix, animate, and generate unique outputs (similar to CapCut) by scanning a QR code on the back of millions of Coca-Cola cans
					worldwide.
				</p>
				<h3>Technical Description</h3>
				<p>
					Frontend allowed users to choose from 7 different unique templates, then crop, trim, and re-order uploaded images/videos as well as adding
					coke-branded decals before submitting.
				</p>
				<p>
					Result would then be rendered on GPU-accelerated AWS server instances running a Puppeteer headless Chrome browser. We'd then apply GLSL shaders, image
					segmentation effects, animations, and generative AI based on the chosen template before compositing the result and emailing it to the user.
				</p>
				<p>Project also featured localization into 80+ languages, Amazon Rekognition for NSFW moderation, and prizing mechanics.</p>
			</>
		),
		language: 'React / Typescript / Three.js / React-Three-Fiber / Theatre.js / Stable Diffusion / Puppeteer / FFmpeg / AWS / Docker / Python / OneXP',
		type: 'video',
		itemUrl: 'https://youtu.be/s4hUHDqrH5o&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/sac-logo-5.svg',
		thumbnailHover: '/assets-by-page/home/gifs/memorey-maker-sizzle-2.gif',
		thumbnailName: 'Overview',
		demo: 'https://www.coca-cola.com/za/en/offerings/share-a-coke/memory',
	},
	{
		category: 'subvrsive',
		name: 'Memory Maker Advertisement',
		hashName: 'memory-maker-advertisement',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Enabled users to remix, animate, and generate unique outputs (similar to CapCut) by scanning a QR code on the back of millions of Coca-Cola cans
					worldwide.
				</p>
			</>
		),
		language: 'React / Typescript / Three.js / React-Three-Fiber / Theatre.js / Stable Diffusion / Puppeteer / FFmpeg / AWS / Docker / Python / OneXP',
		type: 'video',
		itemUrl: 'https://youtu.be/pzhCbGhQKuc&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/sac-logo-5.svg',
		demo: 'https://www.coca-cola.com/za/en/offerings/share-a-coke/memory',
		isFeature: true,
	},
	{
		category: 'subvrsive',
		name: 'Templates',
		prefix: '(Memory Maker)',
		hashName: 'memory-maker-templates',
		description: (
			<>
				<h3>Overview</h3>
				<p>
					Users could choose from 7 templates: 2 applied generative AI transformations, 2 used image segmentation effects, and 3 featured custom GLSL shader
					effects. All templates were dynamically animated with Theatre.js.
				</p>
			</>
		),
		language: 'GLSL / React-Three-Fiber / Theatre.js / Stable Diffusion / Transparent Background',
		type: 'video',
		itemUrl: 'https://youtu.be/s4hUHDqrH5o&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/sac-logo-5.svg',
		demo: 'https://www.coca-cola.com/za/en/offerings/share-a-coke/memory',
		isFeature: true,
	},
	{
		category: 'subvrsive',
		name: 'Holocreator (Coca-Cola × Star Wars)',
		hashName: 'holocreator-overview',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Enabled users to create Star Wars–style AR holograms of themselves by recording with their phone, accessible via a QR code on millions of Coca-Cola
					cans worldwide.
				</p>
				<h3>Technical Description</h3>
				<p>Users could choose from 5 characters—like a Jedi, Sith, or trooper—then record their face to see it projected onto an AR hologram.</p>
				<p>
					After receiving their hologram, users could scan the character on the Coke can to view it in 3D, with a parallax effect powered by Three.js and
					controlled by their phone’s motion.
				</p>
				<p>
					Carousel of characters that users could swipe through, animated on swipe and scroll to scrub sequenced PNG images that were batch-loaded for quick
					load times and smooth playback.
				</p>
				<p>Project also featured localization into 30+ languages, Amazon Rekognition for NSFW moderation, and prizing mechanics.</p>
			</>
		),
		language: 'React / Typescript / Three.js / React-Three-Fiber / A-frame / 8th Wall / Tensorflow.js / MediaPipe / AWS / OneXP',
		type: 'video',
		itemUrl: 'https://youtu.be/7sWhm7SesfU&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/holocreator-logo.png',
		thumbnailHover: '/assets-by-page/home/gifs/star-wars-lightspeed.gif',
		thumbnailName: 'Overview',
		demo: 'https://www.coca-cola.com/us/en/offerings/star-wars',
	},
	{
		category: 'subvrsive',
		name: 'Holocreator Advertisement',
		hashName: 'holocreator-advertisement',
		prefix: '(Holocreator)',
		description: (
			<>
				<h3>Project Overview</h3>
				<p>
					Enabled users to create Star Wars–style AR holograms of themselves by recording with their phone, accessible via a QR code on millions of Coca-Cola
					cans worldwide.
				</p>
			</>
		),
		language: 'React / Typescript / Three.js / React-Three-Fiber / A-frame / 8th Wall / Tensorflow.js / MediaPipe / AWS / OneXP',
		type: 'video',
		itemUrl: 'https://youtu.be/w74xviwQmgw&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/holocreator-logo.png',
		demo: 'https://www.coca-cola.com/us/en/offerings/star-wars',
		isFeature: true,
	},
	{
		category: 'subvrsive',
		name: 'Scan a Can & Parallax Characters',
		hashName: 'holocreator-scan-and-parallax',
		prefix: '(Holocreator)',
		description: (
			<>
				<h3>Feature</h3>
				<p>
					After creating a hologram, users can scan Coke cans featuring different Star Wars characters to unlock and collect Parallax-effect versions of those
					characters, which respond dynamically to the motion of their device.
				</p>
				<h3>Technical Description</h3>
				<p>We used TensorFlow.js to train custom models that could recognize the Star Wars characters on the Coke cans.</p>
				<p>
					To create the Parallax effect, we leveraged Three.js, layering 2D character assets in a 3D space and dynamically adjusting the camera position based
					on the user’s device motion.
				</p>
			</>
		),
		language: 'React / Typescript / Three.js / React-Three-Fiber / A-frame / 8th Wall / Tensorflow.js / MediaPipe / AWS / OneXP',
		type: 'video',
		itemUrl: 'https://youtu.be/JeKhJlKfOUA&ab_channel=DannyWoodford',
		thumbnail: '/assets-by-page/home/thumbnails/projects/holocreator-logo.png',
		demo: 'https://www.coca-cola.com/us/en/offerings/star-wars',
		isFeature: true,
	},
];

export const displayCategoryData: DisplayCategoryObject = {
	flatiron: {
		hasTabInfo: true,
		name: 'Flatiron School',
		duration: '2019',
		location: 'Manhattan, NY (On-Site)',
		website: 'https://flatironschool.com/',
		websiteDisplayName: 'Flatironschool.com',
		description: (
			<>
				<h3>Overview</h3>
				<p>Flatiron School is a coding bootcamp that was rated the number #1 by Course Report when I attended in 2019.</p>
			</>
		),
	},
	personalProjects: {
		duration: '2019 - Present',
	},
	brandgage: {
		hasTabInfo: true,
		name: 'Brandgage',
		title: '3D Javascript Developer',
		duration: 'June 2020 - March 2022',
		location: 'Pittsburgh, PA (On-Site)',
		website: 'https://www.brandgage.com/',
		websiteDisplayName: 'Brandgage.com',
		description: (
			<>
				<h3>Role Overview</h3>
				<p>
					Brandgage is all about brand engagement and leaving a lasting impression. While at Brandgage, I worked on over 40 websites and apps, almost
					exclusively for pharmaceutical companies like Pfizer, Merck, Takeda, and Bayer. I mostly worked on "virtual booths" for virtual and in-person trade
					shows mixing standard web development, video transitions, and virtual reality.
				</p>
			</>
		),
	},
	rocket: {
		hasTabInfo: true,
		name: 'Rocket Communications, Inc.',
		title: '3D Developer / 3D Artist',
		duration: 'March 2022 - Feb 2023',
		location: 'San Francisco, CA (Remote)',
		website: 'https://www.rocketcom.com/',
		websiteDisplayName: 'Rocketcom.com',
		description: (
			<>
				<h3>Role Overview</h3>
				<p>
					The entirety of my time at Rocket has been spent working on the Space ACME project, a 3D visualization tool built for the Space Force to aid satellite
					operators. As the sole 3D developer of this project, it has afforded me some of the most intellectually fulfilling work of my career, as well as
					creatively fulfilling since I was given almost full creative control over the look of the 3D.
				</p>
			</>
		),
	},
	atlas: {
		hasTabInfo: true,
		name: 'Atlas Reality, Inc.',
		title: '3D Application Developer',
		duration: 'July 2023 - Jan 2024',
		location: 'Cedar Park, TX (Remote)',
		website: 'https://www.atlasreality.com/',
		websiteDisplayName: 'Atlasreality.com',
		description: (
			<>
				<h3>Role Overview</h3>
				<p>
					Led the Atlas Studio project, an in-browser VR-enabled editor using react-three-fiber for building and exporting 3D structures to place on your own
					land or trade on the marketplace.
				</p>
			</>
		),
	},
	quest: {
		hasTabInfo: true,
		name: 'Quest AI Solutions',
		title: 'Senior Front End Developer',
		duration: 'Oct 2023 - Aug 2024',
		location: 'West Palm Beach, FL (Remote)',
		website: 'https://questaisolutions.com/',
		websiteDisplayName: 'Questaisolutions.com',
		description: (
			<>
				<h3>Role Overview</h3>
				<p>
					I was contracted to PeakActivity by Quest AI to develop an in-browser, photorealistic 3D furniture visualization tool for CITY Furniture, aimed at
					elevating the shopping experience.
				</p>
			</>
		),
	},
	subvrsive: {
		hasTabInfo: true,
		name: 'Subvrsive',
		title: 'Tech Lead (3D Web)',
		duration: 'Aug 2024 - Aug 2025',
		location: 'New York, NY (On-Site)',
		website: 'https://subvrsive.com//',
		websiteDisplayName: 'Subvrsive.com',
		description: (
			<>
				<h3>Role Overview</h3>
				<p>Led development teams and global release of experiences for major brands like Coca-Cola, Disney, Loreal, and more.</p>
				<br />
				<p>Partnered directly with clients and coordinated efforts between design, QA, and creative teams.</p>
			</>
		),
	},
};

interface ProjectStore {
	projectsItemsObject: ProjectsItem[];
	displayCategoriesObject: DisplayCategoryObject;
	// Display states
	displayCategory: string;
	displayItem: ProjectsItem;
	// Update functions
	updateDisplayCategory: (category: string) => void;
	updateDisplayItem: (item: ProjectsItem) => void;
}

// Initialize defaults from a single source of truth (displayCategory)
const initialCategory = 'subvrsive'
const itemsForInitial = projectsData.filter(i => i.category === initialCategory)

const useProjectStore = create<ProjectStore>((set, get) => ({
	projectsItemsObject: projectsData,
	displayCategoriesObject: displayCategoryData,
	// Display states - initialize with default values
	displayCategory: initialCategory,
	displayItem: (itemsForInitial[0] ?? projectsData[0]) as ProjectsItem,
	// Update functions
	updateDisplayCategory: (category: string) => {
		set({ displayCategory: category });
	},
	updateDisplayItem: (item: ProjectsItem) => {
		set({ displayItem: item });
	},
}))

export default useProjectStore