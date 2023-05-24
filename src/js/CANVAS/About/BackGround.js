import * as THREE from 'three'
import React, { useMemo , useEffect} from 'react'
import { Plane, useTexture } from '@react-three/drei'

export default function BackGround({ animationOver }) {
	const [forest, pinkTree, city, city4, empire3, highRise, clouds, building1] = useTexture([
		process.env.PUBLIC_URL + '/assets-by-page/about/forest-reduced.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/pink-tree.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/city-2-reduced.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/city-4-reduced.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/empire-3.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/highRise-reduced.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/clouds.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/building-1.png',
	])

	const pinkTreeFlip = useMemo(() => pinkTree.clone(), [pinkTree])

	useEffect(() => {
		pinkTreeFlip.wrapS = THREE.RepeatWrapping
		pinkTreeFlip.repeat.x = -1
		pinkTreeFlip.needsUpdate = true
	}, [pinkTreeFlip])

	return (
		<group>
			<Plane name='city4' position={[0, 120, -310]} args={[680, 340]} rotation={[0, Math.PI, 0]}>
				<meshLambertMaterial map={city4} side={THREE.BackSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='city' position={[860, 210, -270]} args={[800, 320]}>
				<meshLambertMaterial map={city} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='empire' position={[1280, 450, -460]} args={[240, 470]} rotation={[0, Math.PI, 0]}>
				<meshLambertMaterial map={empire3} side={THREE.BackSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='building1' position={[265, 130, -290]} args={[260, 300]}>
				<meshLambertMaterial map={building1} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='highRise' position={[360, 200, -225]} args={[380, 300]}>
				<meshBasicMaterial color='grey' map={highRise} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>

			<Plane name='clouds' visible={!animationOver} position={[-360, 310, -700]} args={[400, 150]}>
				<meshBasicMaterial map={clouds} side={THREE.FrontSide} transparent opacity={0.16} />
			</Plane>
			<Plane name='clouds' position={[140, 200, -500]} args={[300, 150]} rotation={[0, Math.PI, 0]}>
				<meshBasicMaterial map={clouds} side={THREE.BackSide} transparent opacity={0.07} alphaTest={0.01} />
			</Plane>
			<Plane name='clouds' position={[1730, 760, -450]} args={[700, 500]} rotation={[0, -Math.PI / 2.5, 0]}>
				<meshBasicMaterial map={clouds} side={THREE.FrontSide} transparent opacity={0.2} />
			</Plane>

			<Plane name='forest-left' position={[-185, 21, -90]} args={[290, 110]}>
				<meshLambertMaterial map={forest} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='forest-middle' position={[80, 46, -110]} args={[400, 100]} rotation={[0, Math.PI, 0]}>
				<meshLambertMaterial map={forest} side={THREE.BackSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='forest-right' position={[470, 80, -150]} args={[700, 140]}>
				<meshLambertMaterial map={forest} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>

			<Plane name='pinkTree-middle' position={[80, 23, -90]} args={[190, 100]}>
				<meshLambertMaterial map={pinkTree} side={THREE.FrontSide} transparent alphaTest={0.9} />
			</Plane>
			<Plane name='pinkTree-right' position={[320, 51, -140]} args={[350, 120]}>
				<meshLambertMaterial map={pinkTreeFlip} side={THREE.FrontSide} transparent alphaTest={0.99} />
			</Plane>
		</group>
	)
}
