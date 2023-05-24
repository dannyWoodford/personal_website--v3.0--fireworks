import { useEffect, useRef, useState } from 'react'
import { OrbitControls, Stats, Plane, useTexture, Preload, BakeShadows } from '@react-three/drei'
import { getProject, onChange, val, createRafDriver } from '@theatre/core'
import { SheetProvider, PerspectiveCamera, editable } from '@theatre/r3f'
import { useControls, types } from 'theatric'

import aboutState from './Setup/AboutScene.theatre-project-state-taxi.json'

import Floor from './Floor'
import BackGround from './BackGround'
import Lighting from './Setup/Lighting'
import Resize from './Setup/Resize'

const dopeSheet = getProject('AboutScene', { state: aboutState }).sheet('Dope Sheet')

export default function Scene({ currentName, setCanvasLoaded }) {
	const [cameraGridMap] = useTexture([process.env.PUBLIC_URL + '/assets-by-page/about/Rule-of-Thirds-grid.webp'])

	// const GPUTier = useDetectGPU()

	// useEffect(() => {
	// 	if (GPUTier.tier === '0' || GPUTier.isMobile) {
	// 		console.log('mobile')
	// 	} else {
	// 		console.log('desktop')
	// 	}
	// }, [GPUTier])

	const cameraTargetRef = useRef()
	const orbitCon = useRef()
	const [animationOver, setAnimationOver] = useState(false)

	const { LightingCon } = useControls({
		LightingCon: {
			KeyLight: {
				position: { x: 5, y: 20, z: 16 },
				intensity: 0.5,
				visible: types.boolean(true),
				helperVisible: types.boolean(false),
			},
			KeyLightTarget: { position: { x: 44, y: 0, z: -5 }, visible: types.boolean(false) },
			FillLight: { position: { x: 37, y: 102, z: 64 }, intensity: 1.1, visible: types.boolean(true) },
			HemisphereLight: { intensity: 0.2, visible: types.boolean(true) },
		},
	})
	const { cameraGrid, cameraTarget } = useControls(
		{
			cameraGrid: { size: { x: types.number(2.15, { nudgeMultiplier: 0.1 }), y: types.number(1.24, { nudgeMultiplier: 0.1 }) }, visible: types.boolean(false) },
			cameraTarget: { visible: types.boolean(false) },
		},
		{ folder: 'Camera' }
	)

	const rafDriver = createRafDriver({ name: 'a custom 30fps raf driver' })

	setInterval(() => {
		rafDriver.tick(performance.now())
	}, 1000)

	const usubscribe = onChange(
		dopeSheet.sequence.pointer,
		pointer => {
			if (!cameraTargetRef.current) return
			if (!orbitCon.current) return

			if (pointer.length === pointer.position) {
				if (orbitCon.current.target === cameraTargetRef.current.position) return

				// console.log('animation end')
				orbitCon.current.target = cameraTargetRef.current.position
				orbitCon.current.enabled = true
				orbitCon.current.maxDistance = 40
				orbitCon.current.minAzimuthAngle = -Math.PI / 4.3
				orbitCon.current.maxAzimuthAngle = Math.PI / 14

				setAnimationOver(true)
			}
		},
		rafDriver
	)

	// Not fully necessary. RafDriver limits which frames onChange runs on to avoid too many unnecessary calls.
	useEffect(() => {
		const sequenceLenghtInMilliseconds = val(dopeSheet.sequence.pointer.length) * 1000
		const listen = setTimeout(usubscribe, sequenceLenghtInMilliseconds) // stop listening to changes after 10 seconds
		// console.log('test 1')

		return () => {
			// console.log('test 2')
			clearTimeout(listen)
		}
	})

	// Initialize and Reset timeline
	useEffect(() => {
		if (currentName === 'about') {
			if (dopeSheet.project.isReady) {
				setCanvasLoaded(true)
				dopeSheet.sequence.position = 0
				// console.log('setup')
			}

			const timer = setTimeout(() => {
				dopeSheet.project.ready.then(() => {
					// console.log('PLAY')
					dopeSheet.sequence.play({ iterationCount: 1 })
				})
			}, 3000)

			return () => {
				clearTimeout(timer)
				setCanvasLoaded(false)
				dopeSheet.sequence.position = 0
				setAnimationOver(false)
				// console.log('reset')
			}
		}
	}, [currentName, setCanvasLoaded])

	return (
		<SheetProvider sheet={dopeSheet}>
			{/* <Stats className='stats' /> */}
			<OrbitControls
				ref={orbitCon}
				enabled={false}
				// enableDamping
				// enableZoom={false}
			/>
			<PerspectiveCamera theatreKey='Camera' makeDefault far={2300} lookAt={cameraTargetRef}>
				<Plane name='camera-grid' args={[cameraGrid.size.x, cameraGrid.size.y]} position={[0, 0, -1.5]} visible={cameraGrid.visible}>
					<meshBasicMaterial map={cameraGridMap} transparent alphaTest={0.5} />
				</Plane>
			</PerspectiveCamera>

			<editable.mesh ref={cameraTargetRef} theatreKey='CameraTarget' visible={cameraTarget.visible}>
				<sphereGeometry args={[2]} />
				<meshBasicMaterial color={'red'} />
			</editable.mesh>

			<Lighting LightingCon={LightingCon} />

			<BackGround animationOver={animationOver} />
			<Floor animationOver={animationOver} />

			<Resize />
			<BakeShadows />
			<Preload all />
		</SheetProvider>
	)
}
