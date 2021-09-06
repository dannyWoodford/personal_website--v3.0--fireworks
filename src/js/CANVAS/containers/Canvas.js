import React, { Suspense, useEffect } from 'react'
import { Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Loading from '../components/setup/Loading.js'
import Firework from '../components/models/Firework.js'

export default function Scene({ ...props }) {
	const canvas = document.querySelector('canvas')
	const currentCanvasColor = props.menuState.currentCanvasColor
	const menuIsOpen = props.menuIsOpen

	useEffect(() => {
		if (canvas && !menuIsOpen) {
			// console.log('canvas',canvas)
			// console.log('currentCanvasColor',currentCanvasColor)
			canvas.style.background = currentCanvasColor
		}
	}, [canvas, currentCanvasColor, menuIsOpen])

	return (
		<Canvas 
			AdaptivePixelRatio
			concurrent
			camera={{ fov: 80}}
		>
			<Suspense fallback={<Loading />}>
				<Suspense fallback={<Firework url={'/3d/fireworks/COLORED-firework-solid_shadeless-transformed.glb'} menuIsOpen={props.menuIsOpen} menuState={props.menuState}/>}>
					<Firework 
						url={'/3d/fireworks/COLORED-firework-solid_shadeless.glb'}
						menuIsOpen={props.menuIsOpen}
						menuState={props.menuState}
					/>
					{/* <Projects /> */}
				</Suspense>
			</Suspense>
			<Stats className="stats" />
		</Canvas>
	)
}
