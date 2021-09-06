/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

import useMousePosition from '../setup/useMousePosition.js'

export default function FireworkSolidColored(props) {
	const group = useRef()
	const { nodes, materials } = useLoader(GLTFLoader,'3d/fireworks/COLORED-firework-solid_shadeless.glb',draco('/draco-gltf/'))

	let { x, y } = useMousePosition()

	useFrame(() => {
		const newX = (1 + y) / 2900
		const newY = (1 + x) / 2900
		
		group.current.rotation.x = newX / 2 - 0.1
		group.current.rotation.y = newY / 2 - 0.1
		group.current.position.z = -(newY * 25 - 1.9)
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				material={materials['Default OBJ']}
				geometry={nodes['firework-solid'].geometry}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}
