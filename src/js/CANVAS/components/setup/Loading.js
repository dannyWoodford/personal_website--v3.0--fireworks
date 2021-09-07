import React, { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'

export default function Loading() {
	const loadingMesh = useRef()

	// useFrame(() => {
	// 	loadingMesh.current.rotation.z -= 0.05
	// })

	return (
		<group>
			<mesh ref={loadingMesh} name={'loading'} position={[0, 0, 0]} rotation={[0, 0, 0]} visible={false}>
				<torusBufferGeometry attach='geometry' args={[1.3, 0.14, 16, 100, 4.5]} />
				<meshBasicMaterial attach='material' color='white' />
			</mesh>
		</group>
	)
}
