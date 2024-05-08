import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, AdaptiveDpr } from '@react-three/drei'

import Scene from '../../CANVAS/About/Scene'
import Loading from '../../CANVAS/components/setup/Loading'


export default function About({ currentName }) {
	const [canvasLoaded, setCanvasLoaded] = useState(false)

	return (
		<div
			className='page about-page'
			// style={{
			// 	transition: 'opacity 1.5s ease-in-out',
			// 	opacity: currentName === 'about' ? 1 : 0.5,
			// }}
		>
			<div
				className='about-canvas'
				style={{
					backgroundColor: 'black',
					// backgroundImage: canvasLoaded ? '' : `url(${LoadingGif})`,
					// backgroundRepeat: 'no-repeat',
					// backgroundPosition: 'center',
				}}>

				<div 
					className={` ${canvasLoaded ? 'loaded' : ''}`}
				>
					<div id='loader-wrapper'>
						<div id='loader'></div>
						<div className='loader-section section-left'></div>
						<div className='loader-section section-right'></div>
					</div>
				</div>

				<Canvas shadows={true} dpr={[1, 2]}>
					<Suspense fallback={<Loading />}>
						<Scene currentName={currentName} setCanvasLoaded={setCanvasLoaded} />
						<Preload />
						<AdaptiveDpr pixelated />
					</Suspense>
				</Canvas>
			</div>
		</div>
	)
}

// <div className='glass-container about-container'>
// 	<div>
// 		<h1>About</h1>
// 		<p>
// 			Former carpenter turned 3D developer/3D artist in order to pursue more intellectually and creatively challenging work. I graduated from the
// 			Flatiron School where I learned JavaScript, React, Ruby, and Ruby on Rails. It was there that I discovered Canvas for the first time and became
// 			interested in 3D. At Flatiron, I started their first cross-discipline collaboration event that brought together students from the software
// 			engineering, data science, and UI/UX tracks to collaborate on projects. In my personal life, I like to write jokes, read philosophy, and create
// 			things like paintings, replica movie props, and woodworking projects for fun. I am a semi-professional stand-up comedian, and apart from doing
// 			it for the love of it, I believe to grow as a person you must chase the things that make you inherently anxious such as expressing ideas
// 			publicly or overcoming failure; along with creative problem-solving, skills I now consider to be some of my greatest strengths.
// 		</p>
// 	</div>

// 	<div className='skills-container --mobile'>
// 		<h2 className='title'>Skills</h2>
// 		<div className='skills-list'>
// 			<ul>
// 				<li>
// 					<p>React</p>
// 				</li>
// 				<li>
// 					<p>React-Three-Fiber</p>
// 				</li>
// 				<li>
// 					<p>R3F Ecosystem</p>
// 				</li>
// 				<li>
// 					<p>JavaScript</p>
// 				</li>
// 				<li>
// 					<p>Typescript</p>
// 				</li>
// 				<li>
// 					<p>Three.js</p>
// 				</li>
// 				<li>
// 					<p>Blender</p>
// 				</li>
// 				<li>
// 					<p>GLTF Optimization</p>
// 				</li>
// 				<li>
// 					<p>GLSL</p>
// 				</li>
// 				<li>
// 					<p>CSS/SASS</p>
// 				</li>
// 				<li>
// 					<p>Postman</p>
// 				</li>
// 				<li>
// 					<p>HTML/Twig</p>
// 				</li>
// 				<li>
// 					<p>Cypress</p>
// 				</li>
// 				<li>
// 					<p>Sketch</p>
// 				</li>
// 				<li>
// 					<p>Affinity/Photoshop</p>
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// <div
// 	className='glass-container skills-container'
// 	onPointerOver={() => onPointerOverHandler('skills')}
// 	onPointerOut={() => onPointerOutHandler('skills')}>
// 	<div className='skills-list'>
// 		<ul>
// 			<li>
// 				<p>React</p>
// 			</li>
// 			<li>
// 				<p>React-Three-Fiber</p>
// 			</li>
// 			<li>
// 				<p>R3F Ecosystem</p>
// 			</li>
// 			<li>
// 				<p>JavaScript</p>
// 			</li>
// 			<li>
// 				<p>Typescript</p>
// 			</li>
// 			<li>
// 				<p>Three.js</p>
// 			</li>
// 			<li>
// 				<p>Blender</p>
// 			</li>
// 			<li>
// 				<p>GLTF Optimization</p>
// 			</li>
// 			<li>
// 				<p>GLSL</p>
// 			</li>
// 			<li>
// 				<p>CSS/SASS</p>
// 			</li>
// 			<li>
// 				<p>Postman</p>
// 			</li>
// 			<li>
// 				<p>HTML/Twig</p>
// 			</li>
// 			<li>
// 				<p>Cypress</p>
// 			</li>
// 			<li>
// 				<p>Sketch</p>
// 			</li>
// 			<li>
// 				<p>Affinity/Photoshop</p>
// 			</li>
// 		</ul>
// 	</div>
// </div>
