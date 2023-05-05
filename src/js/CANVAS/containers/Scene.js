import React, { Suspense, useEffect } from 'react'
// import { Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Loading from '../components/setup/Loading.js'
import Firework from '../components/models/Firework.js'

export default function Scene({ ...props }) {
	const canvas = document.querySelector('canvas')
	const currentCanvasColor = props.menuState.currentCanvasColor
	const currentName = props.menuState.currentName

	useEffect(() => {
		if (canvas && currentCanvasColor) {
			canvas.style.background = currentCanvasColor
		}
	}, [canvas, currentCanvasColor])

	return (
		<>
			{currentName !== 'about' && (
				<div className='bg-canvas'>
					<Canvas camera={{ fov: 80 }}>
						<Suspense fallback={<Loading />}>
							<Firework menuIsOpen={props.menuIsOpen} menuState={props.menuState} />
						</Suspense>
					</Canvas>
				</div>
			)}
			{/* <div className='bg-canvas'>
				<Canvas camera={{ fov: 80 }}>
					<Suspense fallback={<Loading />}>
						<Firework menuIsOpen={props.menuIsOpen} menuState={props.menuState} />
					</Suspense>
				</Canvas>
			</div> */}
		</>
	)
}
