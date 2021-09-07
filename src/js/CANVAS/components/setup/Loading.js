import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function Loading() {
	const loadingGroup = useRef()
	const loadingMesh = useRef()

	useFrame(() => {
		loadingMesh.current.rotation.z -= 0.05
		loadingGroup.current.rotation.y -= 0.003
	})

	return (
		<group ref={loadingGroup}>
			<mesh ref={loadingMesh} name={'loading'} position={[0, 0, 0]} rotation={[0, 0, 0]}>
				<torusBufferGeometry attach='geometry' args={[1.3, 0.14, 16, 100, 4.5]} />
				<meshBasicMaterial attach='material' color='white' />
			</mesh>
			<Text 
				color="white" 
				anchorX="center" 
				anchorY="middle"
				fontSize={.38}
			>
				Loading...
			</Text>
		</group>
	)
}
