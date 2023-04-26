import React from 'react'
import { useDepthBuffer, SpotLight } from '@react-three/drei'

export default function Lights() {
		const depthBuffer = useDepthBuffer()

	return (
		<>
			{/* ___ Volumetric Front Light ____________________________*/}
			<SpotLight
				depthBuffer={depthBuffer}
				castShadow
				penumbra={1}
				distance={18}
				angle={2.5}
				attenuation={5}
				anglePower={4}
				intensity={9}
				position={[0, 12, 3]}
			/>
			{/* ___ Back Light ____________________________*/}
			<spotLight penumbra={1} distance={13} angle={1.25} attenuation={5} anglePower={4} intensity={1} position={[0, 0, -5]} />
		</>
	)
}
