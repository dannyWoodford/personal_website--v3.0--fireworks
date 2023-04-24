import { Canvas } from '@react-three/fiber'

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

import Scene from './Scene'

studio.initialize()
studio.extend(extension)

export default function Intro() {
	return (
		<Canvas shadows={true}>
			<Scene />
		</Canvas>
	)
}
