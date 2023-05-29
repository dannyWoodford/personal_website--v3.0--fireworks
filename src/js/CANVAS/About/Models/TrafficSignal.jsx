/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/assets-by-page/about/models/traffic_light.glb --transform --shadows
*/

import { useState, useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TrafficSignal({ animationOver }) {
	const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + '/assets-by-page/about/models/traffic_light-transformed.glb')

	const [switchLeftLight, setSwitchLeftLight] = useState('green')
	const [switchCenterLight, setSwitchCenterLight] = useState('red')
	const [switchLightReset, setSwitchLightReset] = useState(false)

	useEffect(() => {
		if (animationOver) {
			const leftTrafficYellow = setTimeout(() => {
				// console.log('1 interval')
				setSwitchLeftLight('yellow')
			}, 100)

			const leftTrafficRed = setTimeout(() => {
				// console.log('2 interval')
				setSwitchLeftLight('red')
				setSwitchCenterLight('green')
			}, 3000)

			const centerTrafficYellow = setTimeout(() => {
				// console.log('3 interval')
				setSwitchCenterLight('yellow')
			}, 9000)

			const leftTrafficGreen = setTimeout(() => {
				// console.log('4 interval')
				setSwitchLeftLight('green')
				setSwitchCenterLight('red')
				setSwitchLightReset(true)
			}, 11000)

			if (switchLightReset) {
				// console.log('%cuseEffect reset___LEFT___', 'color:blue;font-size:18px;')

				clearTimeout(leftTrafficYellow)
				clearTimeout(leftTrafficRed)
				clearTimeout(centerTrafficYellow)
				clearTimeout(leftTrafficGreen)
				setSwitchLightReset(false)
			}
		}
	}, [switchLightReset, animationOver])

	const leftLightHandler = useMemo(() => {
		if (switchLeftLight === 'green') {
			return materials.traffic_signal__green
		} else if (switchLeftLight === 'yellow') {
			return materials.traffic_signal__yellow
		} else if (switchLeftLight === 'red') {
			return materials.traffic_signal__red
		}
	}, [switchLeftLight, materials])

	const centerLightHandler = useMemo(() => {
		if (switchCenterLight === 'green') {
			return materials.traffic_signal__green
		} else if (switchCenterLight === 'yellow') {
			return materials.traffic_signal__yellow
		} else if (switchCenterLight === 'red') {
			return materials.traffic_signal__red
		}
	}, [switchCenterLight, materials])

	return (
		<group position={[44, -4.9, -24]} rotation={[0, -Math.PI / 2, 0]} scale={10}>
			<group scale={0.01}>
				<group rotation={[-Math.PI / 2, 0, 0]}>
					<mesh castShadow geometry={nodes['traffic_signal_-_MAIN'].geometry} material={materials.traffic_signal__red} />
					<mesh geometry={nodes['traffic_light_-_left'].geometry} material={leftLightHandler} />
					<mesh geometry={nodes['traffic_light_-_center'].geometry} material={centerLightHandler} />
					<mesh geometry={nodes['traffic_light_-_right'].geometry} material={materials.traffic_signal__yellow} />
					<mesh geometry={nodes.walk_signal.geometry} material={materials.traffic_signal__red} />

					<mesh
						geometry={nodes.walk_signal__face.geometry}
						material={switchCenterLight === 'red' ? materials.traffic_signal__walk : materials.traffic_signal__stop}
					/>
					<mesh geometry={nodes.traffic_signal_traffic_signal_0003.geometry} material={materials.traffic_signal__green} />
					<mesh geometry={nodes.traffic_signal_traffic_signal_0003_1.geometry} material={materials['guidepost1-2']} />
					<mesh
						geometry={nodes.central_park.geometry}
						material={nodes.central_park.material}
						position={[0.8, -86.28, 331.19]}
						rotation={[-Math.PI, 0, -Math.PI / 2]}
						scale={16.22}
					/>
					<mesh
						geometry={nodes.west.geometry}
						material={nodes.west.material}
						position={[0.8, -51.58, 326.46]}
						rotation={[-Math.PI, 0, -Math.PI / 2]}
						scale={8.81}
					/>
					<mesh geometry={nodes.traffic_signal_traffic_signal_0004.geometry} material={materials.traffic_signal__green} />
					<mesh geometry={nodes.traffic_signal_traffic_signal_0004_1.geometry} material={materials['guidepost1-2']} />
					<mesh
						geometry={nodes.W_66_ST.geometry}
						material={nodes.W_66_ST.material}
						position={[-78.06, -0.67, 346.48]}
						rotation={[-Math.PI, 0, 0]}
						scale={25.88}
					/>
				</group>
			</group>
		</group>
	)
}
