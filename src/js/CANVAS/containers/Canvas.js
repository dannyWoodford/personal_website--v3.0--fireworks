import React, { Suspense } from 'react'
import { Stats } from 'drei'
import { Canvas } from 'react-three-fiber'

import Projects from './Projects.js'

import Loading from '../components/setup/Loading.js'
import Statue from '../components/models/Statue.js'
import FireworkSolidColored from '../components/models/FireworkSolidColored.js'

export default function Scene({ ...props }) {
	return (
		<Canvas style={{height: '100%', width:'100%'}} camera={{ fov: 80 }}>
			<Suspense fallback={<Loading />}>
				<FireworkSolidColored />
				{/* <Statue  /> */}
				{/* <Projects /> */}
			</Suspense>
			{/* <Stats /> */}
		</Canvas>
	)
}
