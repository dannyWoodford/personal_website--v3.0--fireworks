import { useEffect, useState } from 'react'
import { OrbitControls, Stars, Stats, useDetectGPU } from '@react-three/drei'
import { getProject, onChange, val, createRafDriver } from '@theatre/core'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'

import aboutState from './AboutScene.theatre-project-state.json'

import Floor from './Floor'
import BackGround from './BackGround'
import AboutPlane from './AboutPlane'
const dopeSheet = getProject('AboutScene', { state: aboutState }).sheet('Dope Sheet')

export default function Scene({ currentName, setCanvasLoaded }) {
	const GPUTier = useDetectGPU()

	useEffect(() => {
		if (GPUTier.tier === '0' || GPUTier.isMobile) {
			console.log('mobile')
		} else {
			console.log('desktop')
		}
	}, [GPUTier])


	const [glassIsOpen, setGlassIsOpen] = useState(false)

	const rafDriver = createRafDriver({ name: 'a custom 30fps raf driver' })

	setInterval(() => {
		rafDriver.tick(performance.now())
	}, 1000)

	const usubscribe = onChange(
		dopeSheet.sequence.pointer.position,
		sec => {
			if (sec > 5.3 && !glassIsOpen) {
				setGlassIsOpen(true)
			}
		},
		rafDriver
	)

	// Not fully necessary. RafDriver limits which frames onChange runs on to avoid too many unnecessary calls.
	useEffect(() => {
		const sequenceLenghtInMilliseconds = val(dopeSheet.sequence.pointer.length) * 1000
		const listen = setTimeout(usubscribe, sequenceLenghtInMilliseconds) // stop listening to changes after 10 seconds

		return () => {
			clearTimeout(listen)
		}
	})

	// Initialize and Reset timeline
	useEffect(() => {
		if (currentName === 'about') {
			if (dopeSheet.project.isReady) {
				setCanvasLoaded(true)
				dopeSheet.sequence.position = 0
				setGlassIsOpen(false)
			}

			const timer = setTimeout(() => {
				dopeSheet.project.ready.then(() => {
					// console.log('This will run after 2 second!')
					dopeSheet.sequence.play({ iterationCount: 1 })
				})
			}, 2000)

			return () => {
				clearTimeout(timer)
				setCanvasLoaded(false)
				dopeSheet.sequence.position = 0
				setGlassIsOpen(false)
				console.log('reset')
			}
		}
	}, [currentName, setCanvasLoaded])

	return (
		<SheetProvider sheet={dopeSheet}>
			<Stats className='stats' />
			<OrbitControls
				maxDistance={1300}
				// enableDamping
				// enableZoom={false}
			/>
			<PerspectiveCamera theatreKey='Camera' makeDefault far={3000} />

			{/* ___ Back Light ____________________________*/}
			<hemisphereLight skyColor={'blue'} groundColor={'green'} intensity={0.2} position={[0, 300, 50]} />

			<spotLight color={'#fff4d9'} intensity={2.2} position={[5, 20, 16]} penumbra={0.9} angle={Math.PI / 2.8} castShadow />
			{/* <fog attach='fog' args={['white', 1, 2100]} /> */}

			<BackGround />

			<Floor />

			<AboutPlane glassIsOpen={glassIsOpen} />

			{/* <Sky sunPosition={[10, -10, 10]} /> */}
			<Stars radius={790} depth={30} count={8000} factor={24} speed={3} />
		</SheetProvider>
	)
}
