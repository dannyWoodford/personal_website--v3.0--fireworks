import React, { useState } from 'react'
import { useSpring, a } from "react-spring"

export default function About({...props}) {

    const menuStateCurrentName = props.menuState.currentName

	const [hovered, setHovered] = useState({
		about: false,
		skills: false,
	})

	const animate = useSpring({
		marginAbout: hovered.about ? '20px' : '30px',
		marginSkills: hovered.skills ? '30px' : '20px',
	})

	const onPointerOverHandler = (sectionName) => {
		setHovered((prevState) => ({
			...prevState,
			[sectionName]: true,
		}));
	}

	const onPointerOutHandler = (sectionName) => {
		setHovered((prevState) => ({
			...prevState,
			[sectionName]: false,
		}));
	}

    return (
        <div className='page about-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'about' ? 1 : 0,
				background: 'transparent',
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<a.div className='glass-container floating-glass glass-1' style={{margin: animate.marginAbout}}></a.div>
					<a.div className='glass-container floating-glass glass-2' style={{margin: animate.marginAbout}}></a.div>
					<a.div className='glass-container floating-glass glass-3' style={{margin: animate.marginSkills}}></a.div>
					<a.div className='glass-container floating-glass glass-4' style={{margin: animate.marginSkills}}></a.div>
					<a.div className='glass-container floating-glass glass-5' style={{margin: animate.marginAbout}}></a.div>
					<div className='glass-container about-container' onPointerOver={() => onPointerOverHandler('about')} onPointerOut={() => onPointerOutHandler('about')} >
						<div>
							<h1>About</h1>
							<p>Former carpenter turned full-stack developer in the pursuit of more challenging and ornate work. Renovating and building houses exposed a passion for engineering and building where I learned to see big jobs through from start to finish independently. I graduated from the Flatiron School where I learned JavaScript, React, Ruby, and Ruby on Rails mainly, and discovered canvas for the first time. While there I started and lead the first cross-discipline collaboration event. In my personal life, I like to write jokes and make things like paintings, replica movie props, woodworking projects for fun. I am a semi-professional stand-up comedian and a part from doing it for the love of it I believe to grow as a person you must chase the things that make you inherently anxious such as expressing ideas publicly or overcoming failure; along with creative problem solving, skills I now consider to be some of my greatest strengths.</p>
						</div>
						
						<div className='skills-container-mobile'>
							<h2 className="title" >Skills</h2>
							<div className='skills-list-mobile'>
								<ul>
									<li><p>JavaScript</p></li>
									<li><p>React</p></li>
									<li><p>Three.js/React-Three-Fiber</p></li>
									<li><p>HTML/Twig</p></li>
									<li><p>CSS/SASS</p></li>
									<li><p>Blender</p></li>
									<li><p>GLTF Optimization</p></li>
									<li><p>Sketch</p></li>
									<li><p>Affinity/Photoshop</p></li>
								</ul>
							</div>
						</div>
					</div>
					<div className='glass-container skills-container' onPointerOver={() => onPointerOverHandler('skills')} onPointerOut={() => onPointerOutHandler('skills')} >
						<div className='skills-list'>
							<ul>
								<li><p>JavaScript</p></li>
								<li><p>React</p></li>
								<li><p>Three.js/React-Three-Fiber</p></li>
								<li><p>HTML/Twig</p></li>
								<li><p>CSS/SASS</p></li>
								<li><p>Blender</p></li>
								<li><p>GLTF Optimization</p></li>
								<li><p>Sketch</p></li>
								<li><p>Affinity/Photoshop</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
