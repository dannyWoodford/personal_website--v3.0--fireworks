import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useTexture, Plane } from '@react-three/drei'

export default function Streetlamp({ pos, hasLight = true, rot = [0, 0, 0], args = [15, 30] }) {
	const spotlightLeft = useMemo(() => new THREE.SpotLight(), [])

	const [streetlamp] = useTexture([process.env.PUBLIC_URL + '/assets-by-page/about/streetlamp.png'])

	return (
		<group>
			<Plane name='streetlamp' args={args} position={pos} rotation={[rot[0], rot[1] + 6.3, rot[2]]}>
				<meshBasicMaterial map={streetlamp} side={THREE.FrontSide} transparent opacity={1} alphaTest={0.5} />
			</Plane>

			{hasLight && (
				<>
					<primitive
						object={spotlightLeft}
						position={[pos[0], pos[1] + 6.3, pos[2]]}
						intensity={1.9}
						penumbra={0.9}
						distance={100}
						// angle={Math.PI / 2}
						// intensity={0.8}
						// penumbra={0.6}
						// distance={0}
						color={'#ffe094'}
						// color={'white'}
						castShadow
					/>
					<primitive object={spotlightLeft.target} position={[pos[0] + 0, pos[1] - 12.7, pos[2]]} />
				</>
			)}
		</group>
	)
}
