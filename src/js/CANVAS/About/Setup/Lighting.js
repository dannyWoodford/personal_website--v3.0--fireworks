import * as THREE from 'three'
// import { SpotLightHelper } from 'three'
import { useRef, useMemo } from 'react'
import { Stars } from '@react-three/drei'

export default function Lighting() {
	const KeyLightRef = useRef()
	const KeyLightTargetRef = useRef()

	const spotlight = useMemo(() => new THREE.SpotLight(), [])

	// useHelper(KeyLightRef.current && LightingCon.KeyLight.helperVisible && KeyLightRef, SpotLightHelper, 'cyan')

	return (
		<group>
			{/* ___ Back Light ____________________________*/}
			{/* <hemisphereLight
				skyColor={'blue'}
				groundColor={'green'}
				intensity={LightingCon.HemisphereLight.intensity}
				position={[0, 300, 50]}
				visible={LightingCon.HemisphereLight.visible}
			/>
			<spotLight
				color={'#ff9063'}
				intensity={LightingCon.FillLight.intensity}
				position={Object.values(LightingCon.FillLight.position)}
				penumbra={0.9}
				angle={Math.PI / 3.0}
				visible={LightingCon.FillLight.visible}
				castShadow
			/>
			<group>
				<primitive
					ref={KeyLightRef}
					position={Object.values(LightingCon.KeyLight.position)}
					object={spotlight}
					color={'#fff4d9'}
					intensity={LightingCon.KeyLight.intensity}
					visible={LightingCon.KeyLight.visible}
					penumbra={0.9}
					angle={Math.PI / 2.8}
					castShadow
				/>
				<primitive ref={KeyLightTargetRef} object={spotlight.target} position={Object.values(LightingCon.KeyLightTarget.position)}>
					<mesh visible={LightingCon.KeyLightTarget.visible}>
						<sphereGeometry args={[1]} />
						<meshBasicMaterial color={'blue'} />
					</mesh>
				</primitive>
			</group> */}
			<hemisphereLight skyColor={'blue'} groundColor={'green'} intensity={0.3} position={[0, 300, 50]} />
			<spotLight color={'#ff9063'} intensity={1.1} position={[37, 102, 64]} penumbra={0.9} angle={Math.PI / 3.0} castShadow />
			<group>
				<primitive
					ref={KeyLightRef}
					position={[5, 20, 16]}
					object={spotlight}
					color={'#fff4d9'}
					intensity={0.5}
					penumbra={0.9}
					angle={Math.PI / 2.8}
					castShadow
				/>
				<primitive ref={KeyLightTargetRef} object={spotlight.target} position={[44, 0, -5]}>
					{/* <mesh>
						<sphereGeometry args={[1]} />
						<meshBasicMaterial color={'blue'} />
					</mesh> */}
				</primitive>
			</group>

			<Stars radius={790} depth={0} count={12000} factor={30} speed={2} />
		</group>
	)
}
