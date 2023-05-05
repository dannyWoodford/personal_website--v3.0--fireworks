import { useEffect } from 'react'
import { Sky, OrbitControls, Stars, Stats } from '@react-three/drei'
import { getProject } from '@theatre/core'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'

import aboutState from './AboutScene.theatre-project-state.json'

import Floor from './Floor'
import BackGround from './BackGround'

const dopeSheet = getProject('AboutScene', { state: aboutState }).sheet('Dope Sheet')

export default function Scene({ currentName }) {
	useEffect(() => {
		if (currentName === 'about') {
			if (dopeSheet.project.isReady) {
				console.log('Project loaded!')
			}

			const timer = setTimeout(() => {
				dopeSheet.project.ready.then(() => {
					console.log('This will run after 1 second!')
					dopeSheet.sequence.play({ iterationCount: 1 })
				})
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [currentName])

	return (
		<SheetProvider sheet={dopeSheet}>
			<Stats className='stats' />
			<OrbitControls enableDamping />
			<PerspectiveCamera theatreKey='Camera' makeDefault />

			{/* ___ Back Light ____________________________*/}
			<hemisphereLight skyColor={'blue'} groundColor={'green'} intensity={0.2} position={[0, 300, 50]} />

			<spotLight color={'#fff4d9'} intensity={1.7} position={[5, 50, 26]} penumbra={0.9} angle={Math.PI / 3} castShadow />
			<fog attach='fog' args={['white', 1, 2100]} />

			<BackGround />

			<Floor />

			<Sky sunPosition={[10, -10, 10]} />
			<Stars radius={830} depth={30} count={8000} factor={28} speed={2} />
		</SheetProvider>
	)
}
