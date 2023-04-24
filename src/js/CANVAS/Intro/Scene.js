import { useEffect } from 'react'
import { Stars, OrbitControls, Float } from '@react-three/drei'
import { getProject } from '@theatre/core'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'

import RocketAnimationState from './Rocket_Logo.theatre-project-state.json'

import Logo from './Logo'
import Lights from './Lights'

const dopeSheet = getProject('Dolly Zoom', { state: RocketAnimationState }).sheet('Dope Sheet')

export default function Scene() {

	useEffect(() => {
		console.log('fire')
		
		dopeSheet.project.ready.then(() => dopeSheet.sequence.play({ iterationCount: 1 }))
	}, [])

	return (
		<SheetProvider sheet={dopeSheet}>
			<PerspectiveCamera theatreKey='Camera2222' makeDefault position={[0, 0, 10]} fov={90} />
			<OrbitControls enableDamping />

			<color attach='background' args={['black']} />

			<Lights />
			{/* <ambientLight /> */}

			<Float speed={4} floatIntensity={2} rotationIntensity={0}>
				<Logo dopeSheet={dopeSheet} />
			</Float>

			<Stars radius={70} count={2500} speed={2.5} />
		</SheetProvider>
	)
}
