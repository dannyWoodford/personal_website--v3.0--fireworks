import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useTexture, Plane, Text3D } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { onChange, val, createRafDriver } from '@theatre/core'

export default function Logo({ dopeSheet }) {
	const [logoHalf, rocket, communications] = useTexture(['/Rocket_logo_right.png', '/rocket.png', '/communications.png'])

	const left = useRef()
	const right1 = useRef()
	const right2 = useRef()
	const right3 = useRef()
	const right4 = useRef()
	const right5 = useRef()
	const right6 = useRef()
	const dText = useRef()

	// const rocketRef = useRef()
	// const rocketMaterialRef = useRef()
	// const communicationsRef = useRef()
	// const communicationsMaterialRef = useRef()

	// const rafDriver = createRafDriver({ name: 'a custom 10fps raf driver' })

	// setInterval(() => {
	// 	rafDriver.tick(performance.now())
	// }, 100)

	// const usubscribe = onChange(
	// 	dopeSheet.sequence.pointer,
	// 	obj => {
	// 		if (!rocketMaterialRef.current || !communicationsMaterialRef.current) return

	// 		if (obj.position > 1.2 && rocketMaterialRef.current.opacity <= 1) {
	// 			rocketMaterialRef.current.opacity += 0.05
	// 			communicationsMaterialRef.current.opacity += 0.05
	// 		} else if (obj.position < 1.2 && rocketMaterialRef.current.opacity !== 0) {
	// 			// Reset logo opacity
	// 			// opacity could not be animated in Theatre.js directly so I had to do this work around
	// 			rocketMaterialRef.current.opacity = 0
	// 			communicationsMaterialRef.current.opacity = 0
	// 		}
	// 	},
	// 	rafDriver
	// )

	// // Not fully necessary. Just helps avoid codeSandbox from freezing if there was an error during development
	// useEffect(() => {
	// 	const sequenceLenghtInMilliseconds = val(dopeSheet.sequence.pointer.length) * 1000
	// 	const listen = setTimeout(usubscribe, sequenceLenghtInMilliseconds) // stop listening to changes after 10 seconds

	// 	return () => {
	// 		clearTimeout(listen)
	// 	}
	// })

	return (
		<group>
			<e.group theatreKey='left' ref={left} position={[0, 0, 0]}>
				<Text3D position={[3, 0, 0.2]} rotation={[0, Math.PI, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					3
					<meshPhongMaterial color='red' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right1' ref={right1} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right2' ref={right2} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right3' ref={right3} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right4' ref={right4} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right5' ref={right5} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			<e.group theatreKey='right6' ref={right6} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					D
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>

			<e.group theatreKey='woodfordGroup' position={[0, 0, 0]}>
			<e.group theatreKey='wText' position={[0, 0, 0]}>
				<Text3D position={[3, 0, 0.2]} rotation={[0, Math.PI, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
					3
					<meshPhongMaterial color='red' />
				</Text3D>
			</e.group>
			<e.group theatreKey='oodfordText' ref={dText} position={[0, 0, 0]}>
				<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular__reverse.json' size='1.5'>
					oodford
					<meshPhongMaterial color='white' />
				</Text3D>
			</e.group>
			</e.group>

			<e.group theatreKey='dannyGroup' position={[0, 0, 0]}>
				<e.group theatreKey='dText' ref={dText} position={[0, 0, 0]}>
					<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular.json' size='3'>
						D
						<meshPhongMaterial color='red' />
					</Text3D>
				</e.group>
				<e.group theatreKey='annyText' ref={dText} position={[0, 0, 0]}>
					<Text3D position={[0, 0, 0]} font='/intro/Bruno Ace_Regular__reverse.json' size='1.5'>
						anny
						<meshPhongMaterial color='white' />
					</Text3D>
				</e.group>
			</e.group>
		</group>
	)
}
