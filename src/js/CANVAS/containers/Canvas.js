import React, { Suspense } from 'react'
import { Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


import Loading from '../components/setup/Loading.js'
import Firework from '../components/models/Firework.js'

export default function Scene({ ...props }) {

	return (
		<Canvas 
			AdaptivePixelRatio
			concurrent
			camera={{ fov: 80 }}
		>
			<Suspense fallback={<Loading />}>
				<Firework menuIsOpen={props.menuIsOpen}/>
				{/* <Projects /> */}
			</Suspense>
			<Stats className="stats" />
		</Canvas>
	)
}
