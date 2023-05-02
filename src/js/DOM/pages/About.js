import React, { useState } from 'react'
import { useSpring, a } from 'react-spring'

export default function About({ ...props }) {
	const menuStateCurrentName = props.menuState.currentName

	const [hovered, setHovered] = useState({
		about: false,
		skills: false,
	})

	const animate = useSpring({
		marginAbout: hovered.about ? '20px' : '30px',
		marginSkills: hovered.skills ? '30px' : '20px',
	})

	const onPointerOverHandler = sectionName => {
		setHovered(prevState => ({
			...prevState,
			[sectionName]: true,
		}))
	}

	const onPointerOutHandler = sectionName => {
		setHovered(prevState => ({
			...prevState,
			[sectionName]: false,
		}))
	}

	return (
		<div
			className='page about-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'about' ? 1 : 0,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<a.div className='glass-container floating-glass glass-1' style={{ margin: animate.marginAbout }}></a.div>
					<a.div className='glass-container floating-glass glass-2' style={{ margin: animate.marginAbout }}></a.div>
					<a.div className='glass-container floating-glass glass-3' style={{ margin: animate.marginSkills }}></a.div>
					<a.div className='glass-container floating-glass glass-4' style={{ margin: animate.marginSkills }}></a.div>
					<a.div className='glass-container floating-glass glass-5' style={{ margin: animate.marginAbout }}></a.div>
					<div
						className='glass-container about-container'
						onPointerOver={() => onPointerOverHandler('about')}
						onPointerOut={() => onPointerOutHandler('about')}>
						<div>
							<h1>About</h1>
							<p>
								Former carpenter turned 3D developer/3D artist in order to pursue more intellectually and creatively challenging work. I graduated from the
								Flatiron School where I learned JavaScript, React, Ruby, and Ruby on Rails. It was there that I discovered Canvas for the first time and became
								interested in 3D. At Flatiron, I started their first cross-discipline collaboration event that brought together students from the software
								engineering, data science, and UI/UX tracks to collaborate on projects. In my personal life, I like to write jokes, read philosophy, and create
								things like paintings, replica movie props, and woodworking projects for fun. I am a semi-professional stand-up comedian, and apart from doing
								it for the love of it, I believe to grow as a person you must chase the things that make you inherently anxious such as expressing ideas
								publicly or overcoming failure; along with creative problem-solving, skills I now consider to be some of my greatest strengths.
							</p>
						</div>

						<div className='skills-container --mobile'>
							<h2 className='title'>Skills</h2>
							<div className='skills-list'>
								<ul>
									<li>
										<p>React</p>
									</li>
									<li>
										<p>React-Three-Fiber</p>
									</li>
									<li>
										<p>R3F Ecosystem</p>
									</li>
									<li>
										<p>JavaScript</p>
									</li>
									<li>
										<p>Typescript</p>
									</li>
									<li>
										<p>Three.js</p>
									</li>
									<li>
										<p>Blender</p>
									</li>
									<li>
										<p>GLTF Optimization</p>
									</li>
									<li>
										<p>GLSL</p>
									</li>
									<li>
										<p>CSS/SASS</p>
									</li>
									<li>
										<p>Postman</p>
									</li>
									<li>
										<p>HTML/Twig</p>
									</li>
									<li>
										<p>Cypress</p>
									</li>
									<li>
										<p>Sketch</p>
									</li>
									<li>
										<p>Affinity/Photoshop</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className='glass-container skills-container'
						onPointerOver={() => onPointerOverHandler('skills')}
						onPointerOut={() => onPointerOutHandler('skills')}>
						<div className='skills-list'>
							<ul>
								<li>
									<p>React</p>
								</li>
								<li>
									<p>React-Three-Fiber</p>
								</li>
								<li>
									<p>R3F Ecosystem</p>
								</li>
								<li>
									<p>JavaScript</p>
								</li>
								<li>
									<p>Typescript</p>
								</li>
								<li>
									<p>Three.js</p>
								</li>
								<li>
									<p>Blender</p>
								</li>
								<li>
									<p>GLTF Optimization</p>
								</li>
								<li>
									<p>GLSL</p>
								</li>
								<li>
									<p>CSS/SASS</p>
								</li>
								<li>
									<p>Postman</p>
								</li>
								<li>
									<p>HTML/Twig</p>
								</li>
								<li>
									<p>Cypress</p>
								</li>
								<li>
									<p>Sketch</p>
								</li>
								<li>
									<p>Affinity/Photoshop</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
