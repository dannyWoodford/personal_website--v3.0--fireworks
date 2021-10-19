/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useMousePosition from '../setup/useMousePosition.js'

export default function Firework({...props}) {
	const group = useRef()

	const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + '/3d/fireworks/COLORED-firework-solid_shadeless.glb')

	let { x, y } = useMousePosition()

	const menuIsOpen = props.menuIsOpen
	const menuStateCurrentName = props.menuState.currentName

	useFrame(() => {
		const newX = (1 + y) / 2900
		const newY = (1 + x) / 2900

		if ((!menuIsOpen && menuStateCurrentName !== 'home')) {
			group.current.rotation.x = newX / 2 - 0.1
			group.current.rotation.y = newY / 2 - 0.1
			group.current.position.z = -(newY * 25 - 1.9)
		} else if (!menuIsOpen && group.current.position.z > -35) {
			group.current.position.z -= 0.4
		} else if (!menuIsOpen && group.current.position.z <= -35 && group.current.visible === true) {
			group.current.visible = false
		} 
		
		if ((menuStateCurrentName !== 'home' && group.current.position.z <= 0 && group.current.visible === false)) {
			group.current.position.z += 0.3
			group.current.visible = true
		}
	})

	return (
		<group ref={group} {...props} dispose={null} visible={false}>
			<mesh
				geometry={nodes['firework-solid'].geometry}
				material={materials['Default OBJ']}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}

