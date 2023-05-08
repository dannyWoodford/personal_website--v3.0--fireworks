import { useEffect, useState, useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'

import { OrbitControls, Stars, Stats } from '@react-three/drei'
import { getProject, onChange } from '@theatre/core'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'

import aboutState from './AboutScene.theatre-project-state.json'

import Floor from './Floor'
import BackGround from './BackGround'
import AboutPlane from './AboutPlane'

const dopeSheet = getProject('AboutScene', { state: aboutState }).sheet('Dope Sheet')

export default function Scene({ currentName, setCanvasLoaded }) {
	const [glassIsOpen, setGlassIsOpen] = useState(false)

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

			return () => clearTimeout(timer)
		}
	}, [currentName, setCanvasLoaded])

	onChange(dopeSheet.sequence.pointer.position, sec => {
		// if the animation is past the x second mark
		if (sec > 6 && !glassIsOpen) {
			setGlassIsOpen(true)
		}
	})

	const width = window.innerWidth
	const height = window.innerHeight

	const state = useThree()

	const [setSize] = useState(() => state.setSize)
	useLayoutEffect(() => {
		setSize(width, height)
		state.set({ setSize: () => null })
		return () => state.set({ setSize })
	}, [setSize, width, height])

	return (
		<SheetProvider sheet={dopeSheet}>
			<Stats className='stats' />
			<OrbitControls
				enableDamping
				// enableZoom={false}
			/>
			<PerspectiveCamera theatreKey='Camera' makeDefault far={3000} />

			{/* ___ Back Light ____________________________*/}
			<hemisphereLight skyColor={'blue'} groundColor={'green'} intensity={0.2} position={[0, 300, 50]} />

			<spotLight color={'#fff4d9'} intensity={2.2} position={[5, 20, 16]} penumbra={0.9} angle={Math.PI / 3} castShadow />
			{/* <fog attach='fog' args={['white', 1, 2100]} /> */}

			<BackGround />

			<Floor />

			<AboutPlane glassIsOpen={glassIsOpen} />

			{/* <Sky sunPosition={[10, -10, 10]} /> */}
			<Stars radius={630} depth={30} count={8000} factor={21} speed={2} />
		</SheetProvider>
	)
}
