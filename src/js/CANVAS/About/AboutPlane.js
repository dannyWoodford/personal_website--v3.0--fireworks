import { Html } from '@react-three/drei'

export default function AboutPlane({ glassIsOpen }) {
	return (
		<Html position={[0, 0, -7]} transform occlude>
			<div className={`glass-container about-container ${glassIsOpen ? 'open-glass' : ''}`}>
				<h1 className='title'>About</h1>
				<p className='text'>
				Professional who appreciates a ballance between art and engineering.
				</p>

				<div className='tab-info-flex'>
					<p className='strong'>Location:</p>
					<p className='location'>New York, NY</p>
				</div>
			</div>
			<div className={`glass-container skills-container ${glassIsOpen ? 'open-glass' : ''}`}>
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
		</Html>
	)
}
